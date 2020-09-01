import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from ".";


it("should render with placeholder text", () => {
    const {getByPlaceholderText, baseElement} = render(<Search />);

    expect(baseElement).toBeInTheDocument();
    getByPlaceholderText("Search");
})