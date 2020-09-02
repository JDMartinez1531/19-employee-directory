import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  const [employeeDataList, setemployeeDataList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">
      <Header />
      <Search value = {searchInput} />
      <Table />
    </div>
  );
}

export default App;
