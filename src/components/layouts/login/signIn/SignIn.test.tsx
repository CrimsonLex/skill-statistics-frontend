import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SignIn from './SignIn';

describe('SignIn Component', () => {
    test('renders the SignIn component', () => {
        render(<SignIn />);
        const loginTitle = screen.getByText('Login');
        expect(loginTitle).toBeDefined();
    });

    it('handles form submission when email and password are provided', async () => {
        render(<SignIn />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByText('Sign In');

        fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(submitButton);

        expect(window.location.pathname).toBe('/');
    });

    it('disables the submit button when email or password is missing', () => {
        const { getByText, getByLabelText } = render(<SignIn />);

        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Password');
        const signInButton = getByText('Sign In');

        expect(signInButton).toBeDisabled();

        fireEvent.change(emailInput, {
            target: { value: 'example@email.com' },
        });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(signInButton).not.toBeDisabled();
    });
});
