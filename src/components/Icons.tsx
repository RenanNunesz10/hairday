import type { ReactNode, SVGProps } from 'react'

// Ícones no estilo Phosphor (traço fino), desenhados em SVG.
// Todos usam "currentColor", então a cor vem do CSS (propriedade color).
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

type BaseIconProps = IconProps & {
  children: ReactNode
}

function BaseIcon({ size = 20, children, ...props }: BaseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="4.5" width="17" height="16" rx="1" />
      <path d="M16 3v3M8 3v3M3.5 9h17" />
    </BaseIcon>
  )
}

export function CaretDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 9l6 6 6-6" />
    </BaseIcon>
  )
}

export function UserSquareIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M6.5 20.5c1.1-2.4 3.1-3.8 5.5-3.8s4.4 1.4 5.5 3.8" />
    </BaseIcon>
  )
}

export function TrashIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16M10 10.5v6M14 10.5v6" />
      <path d="M18 6v13.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6" />
      <path d="M15.5 6V4.5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1V6" />
    </BaseIcon>
  )
}

export function SunHorizonIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 16.5a5 5 0 0 1 10 0M2.5 16.5h19M6 20h12" />
      <path d="M12 4.5v3M5.6 8.1l1.6 1.6M18.4 8.1l-1.6 1.6" />
    </BaseIcon>
  )
}

export function CloudSunIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 20h8.5a4 4 0 1 0-1.1-7.85A5.5 5.5 0 0 0 5.6 14.4 3 3 0 0 0 8.5 20Z" />
      <path d="M6.2 10.6A3.5 3.5 0 0 1 11.6 7M9 2.5V4M3 8.5h1.5M4.6 4.6l1 1" />
    </BaseIcon>
  )
}

export function MoonStarsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 14.2A8 8 0 0 1 9.8 4a8 8 0 1 0 10.2 10.2Z" />
      <path d="M17 3v4M15 5h4M20.5 8.5v2.5M19.25 9.75h2.5" />
    </BaseIcon>
  )
}

export function ScissorsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M20 4 8 16M14.5 14.5 20 20M8 8l4 4" />
    </BaseIcon>
  )
}
