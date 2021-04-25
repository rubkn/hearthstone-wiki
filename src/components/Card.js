import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Render = styled.div`
    display: flex;
    width: 15rem;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    

    img {
        max-width: 100%
    }

    span {
        font-weight: 700;
    }
`;

function getRender(id) {
    return `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${id}.png`
}

const Card = ({ card: {id, name} }) => {
    return (
        <Render>
            <img src={getRender(id)} alt={name}/>
            <span>{name}</span>
        </Render>
    )
}

export default Card
