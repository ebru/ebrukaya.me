import styled from "styled-components"

// The present list with the Noe Crafts logo beside it. The logo sits outside
// the list, so it never changes the spacing between the lines.
export const PresentList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  > ul {
    flex: 1;
  }

  @media (max-width: 600px) {
    > a {
      display: none;
    }
  }
`

export const PresentText = styled.span`
  font-size: 19px;
`

export const ItemImage = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  border-radius: 6px;
  object-fit: cover;
  margin-top: 8px;

  &:hover {
    opacity: 0.9;
  }
`
