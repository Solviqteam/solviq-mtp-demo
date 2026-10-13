import { cn } from '@/lib/utils'

type PhotoPlaceholderProps = {
  label: string
  className?: string
}

export function PhotoPlaceholder({ label, className }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — photo placeholder, replace with approved photography`}
      className={cn('flex items-center justify-center bg-charcoal-700', className)}
    >
      <span className="px-4 text-center text-xs uppercase tracking-widest text-cream/40">
        {label}
      </span>
    </div>
  )
}
