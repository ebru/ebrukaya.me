import styled from "styled-components"

export const MainContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 20px;
  align-items: start;
  margin-bottom: -20px;

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;

    > div:first-child {
      order: 2;
    }
  }
`

export const Title = styled.h1`
  font-size: clamp(2.5rem, 7vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1;
  margin-bottom: 1.4rem;
`

export const Snippet = styled.h3`
  font-weight: 600;
  font-size: 21px;
  line-height: 1.5em;
  color: var(--ink-soft);

  @media (max-width: 480px) {
    font-size: 20px;
  }

  .nowrap {
    white-space: nowrap;
  }

  /* hovering Stampie or Noe Crafts underlines the name and colours its icon */
  .nowrap a {
    text-decoration: underline;
    text-decoration-color: transparent;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    transition: text-decoration-color 0.2s ease, color 0.2s ease;
  }

  .nowrap svg {
    transition: color 0.2s ease;
  }

  .nowrap:hover a,
  .nowrap a:focus-visible {
    color: var(--ink);
    text-decoration-color: var(--accent);
  }

  .nowrap:hover svg,
  .nowrap:focus-within svg {
    color: var(--accent);
  }
`

export const Description = styled.p`
  max-width: 34em;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 2px;
  margin-left: -5px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 27px;
    color: var(--ink);
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  a:hover {
    color: var(--accent);
    background: var(--surface);
  }
`

export const ImageContainer = styled.div`
  position: relative;
  margin-top: -24px;

  .portrait {
    width: 100%;
    aspect-ratio: 819 / 1034;
    background: var(--portrait) center / contain no-repeat;
  }

  @media (max-width: 640px) {
    width: 180px;
    margin: -10px 0 18px;
  }
`
