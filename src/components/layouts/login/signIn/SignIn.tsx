import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './SignIn.scss';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await fetch('http://localhost:3002/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 200) {
                const data = await response.json();
                const token = data.token;

                localStorage.setItem('token', token);

                window.location.href = '/';
            } else {
                setError('Login Failed');
            }
        } catch (error) {
            console.error('Error during log in request', error);
        }
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (email && password) {
            handleLogin(email, password);
        } else {
            setError('Please, fill the info with your credentials');
        }
    };

    return (
        <div className={'signin-container'}>
            <form className={'form'} onSubmit={handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={'input'}
                    fullWidth
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={'input'}
                    fullWidth
                />
                {error && (
                    <Typography className={'error-text'}>{error}</Typography>
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
        </div>
    );
}
