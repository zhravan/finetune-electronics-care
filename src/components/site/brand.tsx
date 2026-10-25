import logo from '@/assets/finetune-logo.png.asset.json';

export function Brand({ compact = false }: { compact?: boolean }) {
  const size = compact ? 'h-12 w-12' : 'h-16 w-16';
  return <img src={logo.url} alt="Finetune Electronics logo" width={64} height={64} className={`${size} shrink-0`} />;
}
