import type { ReactNode } from "react"

type Props = {
  targetUrl: string
  children: ReactNode
  newTab?: boolean
  className?: string
}

const ExternalLink = ({
  targetUrl,
  children,
  newTab = true,
  className,
}: Props) => (
  <strong>
    <a
      href={targetUrl}
      target={newTab ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  </strong>
)

export default ExternalLink
