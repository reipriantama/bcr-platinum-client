import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormSignUp from "../../../../components/page/Client/SignUp/Form"; // Sesuaikan dengan path yang benar

describe("FormSignUp Component", () => {
  it("should show an error message when the 'Sign Up' button is clicked with invalid input", () => {
    render(<FormSignUp />);
    const signUpButton = screen.getByText("Sign Up");

    fireEvent.click(signUpButton);

    const errorMessage = screen.getByText("Nama harus diisi.");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should navigate to the Sign In page when 'Sign In here' is clicked", () => {
    const navigate = jest.fn();
    jest
      .spyOn(require("react-router"), "useNavigate")
      .mockReturnValue(navigate);

    render(<FormSignUp />);

    const signInLink = screen.getByTestId("signin-link");
    fireEvent.click(signInLink);

    expect(navigate).toHaveBeenCalledWith("/sign-in");
  });
});
