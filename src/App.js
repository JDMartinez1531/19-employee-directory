import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
	const [employeeDataList, setemployeeDataList] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (search) => {
		setSearchInput(search);
	};

	return (
		<div className="App">
			<Header />
			<Search
				value={searchInput}
				changeInput={(search) => handleChange(search)}
			/>
			<Table />
		</div>
	);
}

export default App;
