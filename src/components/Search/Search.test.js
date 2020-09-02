import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event"
import Search from ".";


it("should render with placeholder text and receive user input", () => {
    const {getByPlaceholderText, baseElement} = render(<Search />);

    expect(baseElement).toBeInTheDocument();
    getByPlaceholderText("Search");
    userEvent.type(getByPlaceholderText("Search"), "Hello, World!");
    expect(getByPlaceholderText("Search")).toHaveValue("Hello, World!");
})
