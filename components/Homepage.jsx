// components/Homepage.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#111', // Dark background color
        color: '#fff', // White text color
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Light shadow
    },
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
    },
    bodyText: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: '#fff', // White button background
        color: '#111', // Dark text color for button
    },
}));

const Homepage = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" className={classes.container}>
            <Typography variant="h1" className={classes.title}>
                Cynthia Zhang
            </Typography>
            <Typography variant="body1" className={classes.bodyText}>
                Welcome to my personal website. Showcase your skills and experience in a sleek and professional manner.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => alert('Button Clicked!')}
            >
                Click Me
            </Button>
        </Container>
    );
};

export default Homepage;
