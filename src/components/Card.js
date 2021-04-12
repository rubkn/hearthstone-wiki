import React, { Fragment } from 'react'
import styled from 'styled-components'

export const Image = styled.img`
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
`;

export const ImageCard = styled.div`
    width: 10em;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 5px solid black;
`;

const Card = ({ card: {img, name} }) => {
    return (
        <Fragment>
            <ImageCard>
                <Image src={img} alt={name} />
            </ImageCard>
            <br/>
            {name}
        </Fragment>
    )
}

export default Card
