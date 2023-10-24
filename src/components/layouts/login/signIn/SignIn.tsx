import { useState, FocusEvent } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './SignIn.scss';
import { expressApiUrls } from '../../../../common/apiUrls';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

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
    const fieldValidations = (
        field: string,
        e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
    ) => {
        const value = e.target.value;
        let isValid = false;
        let error = 'Not a valid field';

        if (field == 'password') {
            isValid = !!value;
        }
        if (field == 'email') {
            isValid = !!value;
            const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
            isValid = emailRegex.test(value);
            error = 'Not a valid email, or the field is empty';
        }

        if (!isValid) {
            setErrorMessages({ ...errorMessages, [field]: error });
            console.log(JSON.stringify(errorMessages));
        } else {
            setErrorMessages({ ...errorMessages, [field]: null });
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
                    type="text"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => fieldValidations('email', e)}
                    className={'input'}
                    error={!!errorMessages.email}
                    helperText={
                        errorMessages.email ? errorMessages.email : null
                    }
                />

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
                    style={{ pointerEvents: 'auto' }}
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}
