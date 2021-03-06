import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 5%;
  border: 1px solid white;
  border-radius: 25px;
  background-color: white;
`;

const Input = styled.input`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  width: 80%;
  border: none;
  outline: none;
  text-align: center;
  font-weight: bold;

  &:focus {
    outline: none;
    font-size: 1rem;
  }
`;

const IconButton = styled.i`
  display: flex;
  align-self: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.25);
    color: goldenrod;
  }
`;

const Search = () => {
  const [input, setInput] = useState('');
  const handleChange = e => setInput(e.target.value);
  const fetchMovie = movie => {
    axios.post('/api', { movie });
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search for your favorite movie"
        onChange={handleChange}
        onSubmit={() => fetchMovie(input)}
      />
      <IconButton
        className="fas fa-search"
        onClick={() => fetchMovie(input)}
      >
      </IconButton>
    </SearchContainer>
  );
};

export default Search;
