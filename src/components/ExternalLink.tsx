import type { ReactNode } from "react"

type Props = {
  targetUrl: string
  children: ReactNode
  newTab?: boolean
}

const ExternalLink = ({ targetUrl, children, newTab = true }: Props) => (
  <strong>
    <a
      href={targetUrl}
      target={newTab ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </strong>
)

export default ExternalLink
