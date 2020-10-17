import React from "react";
import {StyledSearchBar} from "./SearchBar.styles";

const SearchBar = ({placeholder, onChange}) => {
    return(
        <StyledSearchBar
        placeholder={placeholder}
        onChange={onChange}
        />
    );
};

export default SearchBar;