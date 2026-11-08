import styled from "styled-components"

export const PageTitle = styled.h1`
  font-size: clamp(2.2rem, 6vw, 2.9rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  margin-bottom: 36px;
`

export const SubTitle = styled.span<{ $past?: boolean }>`
  display: inline-block;
  font-weight: 800;
  font-size: 15px;
  color: ${(p) => (p.$past ? "var(--ink-soft)" : "var(--accent)")};
  background: var(--surface);
  padding: 2px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
`

// Present / past lists read as a timeline: a hairline with a marker per entry.
// An entry that starts with an icon uses that icon as its marker; others get a dot.
export const ItemList = styled.ul<{ $past?: boolean }>`
  position: relative;
  margin: 5px 0 2.2rem 14px;
  padding-left: 30px;
  list-style: none;
  border-left: 2px solid var(--line);

  > li {
    position: relative;
    margin-bottom: 1rem;
  }

  > li::before {
    content: "";
    position: absolute;
    left: -35px;
    top: 0.62em;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid var(--accent);
  }

  > li:first-child::before {
    background: var(--accent);
  }

  > li:has(> svg:first-child)::before {
    display: none;
  }

  > li > svg:first-child {
    position: absolute;
    left: -46px;
    top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 4px;
    border-radius: 50%;
    background: var(--bg);
    color: var(--ink-soft);
  }

  /* past entries: grey dots */
  ${(p) =>
    p.$past &&
    `
    > li::before,
    > li:first-child::before {
      border-color: var(--muted);
      background: var(--bg);
    }
  `}
`

export const PersonalList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  line-height: 1.5;

  > li {
    padding: 14px 0;
    margin: 0;
    border-bottom: 1px solid var(--line);
  }
`

export const Item = styled.li``

export const When = styled.em`
  color: var(--muted);
  font-size: 15px;
  font-style: normal;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

export const BoldText = styled.span`
  font-weight: bold;
`

export const ItalicText = styled.span`
  font-style: italic;
`

export const Quote = styled.blockquote`
  font-size: 21px;
  line-height: 1.55;
  margin: 0 0 2rem;
  padding-left: 1.2rem;
  border-left: 3px solid var(--accent);
  color: var(--ink-soft);
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
