export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Finetune Electronics">
      <img
        src="/favicon.png"
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className={`shrink-0 rounded-sm object-contain ${compact ? 'h-9 w-9' : 'h-10 w-10'}`}
      />
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight text-foreground">Finetune</span>
          <span className="text-sm font-semibold tracking-tight text-foreground">Electronics</span>
        </span>
      )}
    </span>
  );
}
