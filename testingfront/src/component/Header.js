import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/testt.jpg';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
           
        }

    ));
    return (
        <>
            <StyleHeader >

            </StyleHeader>
        </>
    )
}

export default Header