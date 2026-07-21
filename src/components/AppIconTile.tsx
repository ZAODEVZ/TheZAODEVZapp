import type { LucideIcon } from "lucide-react";

type Size = "sm" | "md" | "lg";

const DIMS: Record<Size, { box: string; radius: string; icon: number }> = {
  sm: { box: "w-14 h-14", radius: "rounded-2xl", icon: 24 },
  md: { box: "w-[62px] h-[62px]", radius: "rounded-[18px]", icon: 27 },
  lg: { box: "w-[72px] h-[72px]", radius: "rounded-[20px]", icon: 32 },
};

/**
 * A resilient, always-crisp app icon. Renders a lucide glyph on a brand
 * gradient tile instead of a remote logo image, so nothing ever 404s and
 * every card looks uniform and premium.
 */
export default function AppIconTile({
  icon: Icon,
  grad,
  glow,
  name,
  size = "md",
}: {
  icon: LucideIcon;
  grad: [string, string];
  glow: string;
  name: string;
  size?: Size;
}) {
  const d = DIMS[size];
  return (
    <div className="relative flex-shrink-0">
      <div
        className={`absolute inset-0 ${d.radius} blur-md opacity-70 scale-90`}
        style={{ background: glow }}
        aria-hidden="true"
      />
      <div
        className={`icon-3d relative ${d.box} ${d.radius} flex items-center justify-center`}
        style={{
          background: `linear-gradient(145deg, ${grad[0]}, ${grad[1]})`,
          boxShadow: `0 12px 36px ${glow}, 0 2px 8px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.28)`,
        }}
        role="img"
        aria-label={`${name} icon`}
      >
        <Icon size={d.icon} strokeWidth={2.1} className="text-white drop-shadow" aria-hidden="true" />
      </div>
    </div>
  );
}
