import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NavbarComponent from "../../components/NavbarComponent";
import { renderWithProviders } from "../../mocks/redux";

describe("NavbarComponent", () => {
  test("should call handleLogout when the Logout button is clicked", () => {
    const navigateMock = jest.fn();
    renderWithProviders(<NavbarComponent />);

    // Set isAuthenticated to true
    Object.defineProperty(global, "localStorage", {
      value: {
        getItem: () => "your_token_here", // Ganti dengan token Anda
      },
      writable: true,
    });

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    // Periksa apakah fungsi handleLogout dipanggil
    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  test("should display the Register button when not authenticated", () => {
    renderWithProviders(<NavbarComponent />);

    // Set isAuthenticated to false
    Object.defineProperty(global, "localStorage", {
      value: {
        getItem: () => null,
      },
      writable: true,
    });

    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeInTheDocument();
  });
});
