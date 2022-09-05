import styled from 'styled-components'

export const SectionTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
    margin-top: 60px;
    padding: 10px 20px;
    border-bottom: 2px solid #f8f8f8;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`

export const SubTitle = styled.span`
    font-weight: bold;
`

export const ItemList = styled.ul`
    margin-top: 5px;
    list-style: none;
    padding-left: 0;
    margin-left: 0;
`

export const StackList = styled.ul`
    margin-top: 5px;
    list-style: square inside;
    padding-left: 0;
    margin-left: 0;
    line-height: 1.8;
`

export const PersonalList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    line-height: 1.2;
`

export const Item = styled.li`
`

export const Date = styled.em`
    color: #888;
    font-size: 16px;
`

export const BoldText = styled.span`
    font-weight: bold;
`

export const ItalicText = styled.span`
    font-style: italic;
`

export const Tech = styled.span`
    font-weight: bold;
    font-size: 17px;
    border-radius: 3px;
    padding: 2px 7px;
    background: #f7f7f7;
`

export const CurrentLearning = styled.div`
    font-size: 17px;
    margin-top: 30px;
    font-style: italic;
`

export const Quote = styled.p`
    font-size: 19px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`