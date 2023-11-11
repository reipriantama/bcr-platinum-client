// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import FormSignIn from './index'; // Pastikan path ini benar
// import { BrowserRouter } from 'react-router-dom';
// import mockServer from '../../../../../mocks/msw'; // Pastikan path ini benar

// // Mock useNavigate
// const mockedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedNavigate,
// }));

// // Setup MSW
// beforeAll(() => mockServer.listen());
// afterEach(() => mockServer.resetHandlers());
// afterAll(() => mockServer.close());

// describe('FormSignIn Component', () => {
//   // ... (test lainnya)

//   test('navigates to landing page on successful sign in', async () => {
//     render(
//       <BrowserRouter>
//         <FormSignIn />
//       </BrowserRouter>
//     );

//     const emailInput = screen.getByPlaceholderText('Contoh: johndee@gmail.com');
//     const passwordInput = screen.getByPlaceholderText('6+ karakter');
//     const signInButton = screen.getByText('Sign In');

//     userEvent.type(emailInput, 'customer@bcr.io');
//     userEvent.type(passwordInput, 'password123');
//     userEvent.click(signInButton);

//     await waitFor(() => {
//       expect(mockedNavigate).toHaveBeenCalledWith('/');
//     });
//   });

//   // ... (test lainnya)
// });
