export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}
    >
      luma
      <span className={light ? "text-yellow" : "text-blue"}>.</span>
    </span>
  );
}
