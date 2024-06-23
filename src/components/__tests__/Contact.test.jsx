import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Contact from "../Contact";

describe('render Contact Us Page', () => {
  it("Should Load Contact Us Component", () => {
    render(<Contact />);
  
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  
  it("Should Load Button inside Contact Us Component", () => {
    render(<Contact />);
  
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  
  it("Should Load Input inside Contact Us Component", () => {
    render(<Contact />);
  
    const inputName = screen.getByPlaceholderText('Name')
    const inputMessage = screen.getByPlaceholderText('Message')
    expect(inputName).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();
  });
})