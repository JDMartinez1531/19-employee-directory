import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders correct content", () => {
    render(<Header />);

    screen.getByText("Employee Directory");
    screen.getByText("Browse employees by name or use search bar to find employee info.")
})