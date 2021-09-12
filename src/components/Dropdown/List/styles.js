import styled from "styled-components"

export const Layout = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  
  button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 4px;

    svg {
      margin-right: 10px;
    }

    :hover {
      opacity: .8;
    }

    :focus {
      border: 3px solid cornflowerblue;
      color: cornflowerblue;

      svg {
        color: cornflowerblue;
      }
    }
  }
`;