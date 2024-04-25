import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render greeting 'Hello Solomon!'", () => {
    render(<Greeting />);
    const greetingElement = screen.getByText("Hello Solomon!");
    expect(greetingElement).toBeInTheDocument();
  });

  test("render 'It's nice to see you again' when the button is clicked", () => {
    render(<Greeting />);

    const welcomeElement = screen.getByText("It's nice to see you again");
    expect(welcomeElement).toBeInTheDocument();
  });

  test("render 'Changed!' when the button is clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert

    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("not to render 'It's nice to see you again' when the button is clicked", () => {
    // Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("It's nice to see you again");
    expect(outputElement).toBeNull();
  });
});
