import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

test("renders correct content", () => {
    const { getByText } = render(<Header />);

    getByText("Employee Directory");
    getByText("Browse employees by name or use search bar to find employee info.")
})