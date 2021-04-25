import React, { useState } from 'react'
import fetchCards from '../api/FetchCards'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
    margin: 2.5% 5% 0;
    display: flex;
    flex-direction: flex-start;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
                return <Card key={card.id} card={card} />
            })}
        </Container>
    )
}

export default CardsGrid
