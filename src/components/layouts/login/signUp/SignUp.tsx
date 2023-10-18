import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

import './SignUp.scss';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (
        name: string,
        email: string,
        password: string
    ) => {
        try {
            const response = await fetch(
                'http://localhost:3002/auth/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                }
            );

            if (response.status === 201) {
                window.location.href = '/';
            } else {
                setError('Register Failed');
            }
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (name && email && password) {
            handleSignUp(name, email, password);
        } else {
            setError('Please, complete all the fields');
        }
    };

    return (
        <Container>
            <Box className={'signup-container'}>
                <Typography variant="h5" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={'input'}
                    />
                    <TextField
                        label="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={'input'}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={'input'}
                    />
                    {error && (
                        <Typography className={'error-text'}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={'submit-button'}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
