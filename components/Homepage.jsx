// components/Homepage.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Roboto_400Regular as RobotoRegular, Roboto_700Bold as RobotoBold } from '@fontsource/roboto';

const StyledContainer = styled(Container)({
    marginTop: (theme) => theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#111', // Dark background color
    color: '#fff', // White text color
    padding: (theme) => theme.spacing(4),
    borderRadius: (theme) => theme.spacing(2),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Light shadow
});

const StyledTitle = styled(Typography)({
    marginBottom: (theme) => theme.spacing(2),
    fontWeight: 'bold',
});

const StyledBodyText = styled(Typography)({
    marginBottom: (theme) => theme.spacing(2),
    textAlign: 'center',
});

const StyledButton = styled(Button)({
    marginTop: (theme) => theme.spacing(2),
    backgroundColor: '#fff', // White button background
    color: '#111', // Dark text color for button
});

const Homepage = () => {
    return (
        <StyledContainer component="main" maxWidth="sm">
            <StyledTitle variant="h1">Cynthia Zhang</StyledTitle>
            <StyledBodyText variant="body1">
                Welcome to my personal website. Showcase your skills and experience in a sleek and professional manner.
            </StyledBodyText>
            <StyledButton variant="contained" color="primary" onClick={() => alert('Button Clicked!')}>
                Click Me
            </StyledButton>
        </StyledContainer>
    );
};

export default Homepage;
