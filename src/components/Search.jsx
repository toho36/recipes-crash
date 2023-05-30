import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <div>
      <FormStyle>
        <FaSearch></FaSearch>
        <input type="text" />
      </FormStyle>
    </div>
  );
}

export default Search;

const FormStyle = styled.form`
  margin: 2rem 10rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    width: 100%;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    // transform: translate(100%, -50%);
    color: red;
  }
`;
