import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Search } from "@material-ui/icons";

const sBarSize = "2.3rem";

const SearchDiv = styled.div`
  display: flex;
  flex: 2;
  height: ${sBarSize};
`;

const SearchIcon = styled(Search)`
  margin-left: -0.2rem;
  min-height: ${sBarSize};
  min-width: 2.5rem;
  padding: 0.2rem 0.2rem;
  background-color: #febd69;
  color: darkblue;
  border-radius: 0.2rem;
`;

const SearchInput = styled.input`
  flex: 2;
  border-radius: 0.2rem;
  border: none;
`;

function SearchBar(props) {
  return (
    <SearchDiv>
      <SearchInput type="text" />
      <SearchIcon />
    </SearchDiv>
  );
}

export default SearchBar;
