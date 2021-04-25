import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin: 0;
    width: 100%;
    height: 18em;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Title = styled.h1`
    letter-spacing: 1px;
    margin: 0;
`;

const Banner = styled.img`
    width: 100%;
`;

const Logo = styled.img`
    position: absolute;
    width: 30%;
    top: 15%;
`;


const Header = () => {
    return (
        <Container>
            <Logo src={process.env.PUBLIC_URL + '/images/logo1.png'}></Logo>
            <Banner src={process.env.PUBLIC_URL + '/images/banner1.jpg'}></Banner>
        </Container>
        
    )
}

export default Header
