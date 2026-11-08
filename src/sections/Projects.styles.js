import styled from "styled-components"

export const ItemRow = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
  justify-content: space-between;
`

export const ItemImage = styled.img`
  border-radius: 4px;
  min-width: 100px;
  max-width: 100px;
  width: 100px;
  height: 62px;
  object-fit: cover;
  margin-top: 5px;
  margin-left: 15px;

  &:hover {
    opacity: 0.9;
  }
`
