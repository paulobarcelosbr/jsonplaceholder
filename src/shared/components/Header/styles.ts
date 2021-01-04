import styled from 'styled-components';

export const Nav = styled.header`
  flex: 1;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #5c56b6;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50px;
    margin-left: 20px;
  }
  ul {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    margin-bottom: 0px;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
    li {
      list-style: none;
      margin: 0 15px;
      a {
        text-decoration: none;
        cursor: pointer;
        color: #fff;
      }
    }
  }
`;
