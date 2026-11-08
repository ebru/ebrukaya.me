import styled from "styled-components"

import useTheme from "@/hooks/useTheme"
import InlineIcon from "@/components/InlineIcon"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()
  const label = isDark ? "Switch to light mode" : "Switch to dark mode"

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className={isDark ? "icon moon" : "icon sun"}>
        <InlineIcon name={isDark ? "moon" : "sun"} />
      </span>
    </Button>
  )
}

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.4s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  &:active {
    transform: rotate(40deg);
  }

  .icon {
    display: inline-flex;
    font-size: 19px;
    animation: pop 0.35s ease;
  }

  .icon svg {
    color: inherit;
    vertical-align: 0;
  }

  @keyframes pop {
    from {
      transform: rotate(-30deg) scale(0.7);
      opacity: 0;
    }
  }
`

export default ThemeToggle
