import logo from '@/assets/finetune-logo.png.asset.json';

export function Brand({ compact = false }: { compact?: boolean }) {
  const size = compact ? 'h-10 w-10' : 'h-12 w-12';
  return <img src={logo.url} alt="Finetune Electronics logo" width={48} height={48} className={`${size} shrink-0`} />;
}
