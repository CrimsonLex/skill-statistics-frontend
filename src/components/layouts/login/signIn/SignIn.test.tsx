import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import SignIn from './SignIn';

describe('SignIn Component', () => {
    test('renders the SignIn component', () => {
        render(<SignIn />);
        const loginTitle = screen.getByText('Login');
        expect(loginTitle).toBeDefined();
    });

    test('handles form submission when email and password are provided', async () => {
        render(<SignIn />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByText('Sign In');

        fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(submitButton);

        expect(window.location.pathname).toBe('/');
    });

    test('disables the submit button when email or password is missing', () => {
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
    it('displays error message for invalid email', () => {
        render(<SignIn />);

        const emailInput = screen.getByLabelText('Email');
        userEvent.type(emailInput, 'invalid-email');
        emailInput.dispatchEvent(new Event('input'));

        const signInButton = screen.getByText('Sign In');
        userEvent.click(signInButton);

        const errorMessage = screen.findByText(
            'Not a valid email, or the field is empty'
        );
        expect(errorMessage).toBeDefined();
    });
});
