import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/testt.jpg';
import SearchInputEl from './SearchInputEl';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
           
        }

    ));
    return (
        <>
            <StyleHeader >
                <SearchInputEl/>
            </StyleHeader>
        </>
    )
}

export default Header