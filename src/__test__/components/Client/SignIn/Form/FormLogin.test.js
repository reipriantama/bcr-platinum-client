// Import dependencies yang diperlukan
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormSignIn from '../../../../../components/page/Client/SignIn/Form/index';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Test navigasi ke landing page
test('navigates to landing page on successful sign in', async () => {
  // Implementasi test
  // ...
});

// Test navigasi ke halaman pendaftaran
test('navigates to sign up page on link click', async () => {
  // Implementasi test
  // ...
});

