import React from "react";
import Form from "react-bootstrap/Form";
import "./style.css";

const Search = ({ value, changeInput}) => {
    return (
        <Form className="searchForm">
            <Form.Control
            className="searchBar"
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e) => {changeInput(e.target.value)}} />
        </Form>
    )
}


export default Search;