import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './SignIn.scss';
import { expressApiUrls } from '../../../../common/apiUrls';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [customError, setCustomError] = useState('');

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await fetch(expressApiUrls.LOGIN, {
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
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (validateEmail(newEmail)) {
            setCustomError('Correo electrónico no válido');
        } else {
            setCustomError(''); // Limpia el mensaje de error si es válido
        }
    };
    const isSubmitedDisabled = !email || !password;

    return (
        <div className={'signin-container'}>
            <form className={'form'} onSubmit={handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={'input'}
                    title="The email field is not valid"
                    error={Boolean(customError)}
                />
                <input
                    id="emailAddress"
                    type="email"
                    size="64"
                    maxlength="64"
                    required
                    placeholder="username@beststartupever.com"
                    pattern=".+@beststartupever\.com"
                    title="Please provide only a Best Startup Ever corporate email address"
                />
                <input type="submit" value="Send Request" />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={'input'}
                />
                {error && (
                    <Typography className={'error-text'}>{error}</Typography>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={'submit-button'}
                    disabled={isSubmitedDisabled}
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}
