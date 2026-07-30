const KEY = "zao_voter_id";

/** Anonymous, per-browser id so a visitor's vote can be upserted (changed) instead of duplicated. */
export function getVoterId(): string {
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
}
