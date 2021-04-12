import React, { useState } from 'react'
import fetchCards from '../api/FetchCards'
import styled from 'styled-components'
import Card from './Card'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
`;

const CardsGrid = () => {
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const { cards, loading, error } = fetchCards(params, page)

    return (
        <Container>
            {loading && <h1>loading...</h1>}
            {error && <h1>error...</h1>}
            {cards.map(card => {
                return <Card key={card.dbfId} card={card} />
            })}
        </Container>
    )
}

export default CardsGrid
