import styled from "styled-components"

export const Layout = styled.div`
  display: flex;
  //width: 650px;
  padding: 2em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Item = styled.li`
  padding: 2em;
  width: 250px;
  cursor: pointer;
  border-radius: 10px;

  svg {
    background: #e8e8e8;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    padding: 10px;
    transition-duration: 200ms;
  }

  h1 {
    font-size: 20px;
    margin: 1.5em 0 .5em 0;
    transition-duration: 200ms;
  }

  p {
    color: #666;
    transition-duration: 200ms;
    pointer-events: none;
  }

  :hover {
    background: #fff;

    svg {
      background: cornflowerblue;
      color: #fff;
    }

    h1 {
      color: cornflowerblue;
    }
  }
`;