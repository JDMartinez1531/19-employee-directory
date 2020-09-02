import React from "react";
import Form from "react-bootstrap/Form";
import "./style.css";

const Search = () => {
    return (
        <Form className="searchForm">
            <Form.Control
            className="searchBar"
            type="text"
            placeholder="Search" />
        </Form>
    )
}


export default Search;