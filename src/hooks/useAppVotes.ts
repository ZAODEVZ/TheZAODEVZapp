import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { getVoterId } from "@/lib/voterId";

export interface AppVoteStats {
  /** community average, null until at least one vote exists */
  avg: number | null;
  count: number;
}

const QUERY_KEY = ["app-vote-stats"];

async function fetchStats(): Promise<Record<number, AppVoteStats>> {
  if (!supabase) return {};
  const { data, error } = await supabase.from("app_vote_stats").select("app_id, avg_rating, vote_count");
  if (error) throw error;
  const stats: Record<number, AppVoteStats> = {};
  for (const row of data ?? []) {
    stats[row.app_id as number] = { avg: row.avg_rating as number, count: row.vote_count as number };
  }
  return stats;
}

export function useAppVoteStats() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: fetchStats,
    enabled: !!supabase,
    staleTime: 30_000,
  });
}

export function useCastVote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ appId, rating }: { appId: number; rating: number }) => {
      if (!supabase) throw new Error("Voting isn't configured yet.");
      const voter_id = getVoterId();
      const { error } = await supabase
        .from("app_votes")
        .upsert({ app_id: appId, voter_id, rating }, { onConflict: "app_id,voter_id" });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Vote counted. Thanks for rating!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
    onError: () => {
      toast.error("Couldn't submit your vote. Try again in a moment.");
    },
  });
}

/** Blends the editorial seed rating with real community votes so one early vote can't swing the number wildly. */
export function blendRating(seed: number, community: AppVoteStats | undefined): { rating: number; votes: number } {
  if (!community || community.count === 0 || community.avg === null) {
    return { rating: seed, votes: 0 };
  }
  const SEED_WEIGHT = 10;
  const blended = (seed * SEED_WEIGHT + community.avg * community.count) / (SEED_WEIGHT + community.count);
  return { rating: Math.round(blended * 10) / 10, votes: community.count };
}
