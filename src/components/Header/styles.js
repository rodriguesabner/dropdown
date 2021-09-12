import styled from "styled-components"

export const Layout = styled.header`
  width: 100%;
  min-height: 68px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  border-bottom: 1px solid rgba(0, 0, 0, .1);

  .logo {
    font-size: 24px;
  }

  .right-items {
    display: flex;
    align-items: center;

    .login {
      background: #f2f4f6;
      font-weight: 600;
      padding: 10px;
      margin-right: 2em;
      cursor: pointer;
      border: 3px solid transparent;
      border-radius: 4px;
      transition-duration: 200ms;

      :focus {
        border: 3px solid cornflowerblue;
      }
    }
  }
`;


export const ProfileWrapper = styled.div`
  display: flex;
  position: relative;
  
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  }
`;