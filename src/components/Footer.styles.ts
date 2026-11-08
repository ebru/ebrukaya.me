import styled from "styled-components"

export const FooterBar = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  border-top: 1px solid var(--line);
  margin-top: 56px;
  padding-top: 22px;
  color: var(--ink-soft);
`

export const FooterLeftDiv = styled.div`
  font-size: 15px;
  text-align: left;
`

export const FooterDiv = styled.div`
  font-size: 15px;
  text-align: right;

  a:hover {
    color: var(--accent);
  }
`

export const LocalTime = styled.span`
  margin-left: 6px;
  color: var(--muted);
  font-size: 15px;
  font-variant-numeric: tabular-nums;
`

// Looks like a text link; the envelope tilts as if being sent.
export const SayHiButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: text-decoration-color 0.2s ease;

  svg {
    transition: transform 0.3s ease, color 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    text-decoration-color: var(--accent);
  }

  &:hover svg,
  &:focus-visible svg {
    color: var(--accent);
    transform: translate(2px, -2px) rotate(-12deg);
  }
`

export const Revealed = styled.span`
  display: inline-flex;
  gap: 8px;
  align-items: baseline;

  a {
    text-decoration: underline;
    text-decoration-color: var(--accent);
    text-underline-offset: 4px;
  }

  span {
    font-size: 13px;
    color: var(--muted);
  }
`
