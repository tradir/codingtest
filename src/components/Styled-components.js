import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 5px;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: #eeeeee;
  color: #141e61;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 1;
  text-decoration: none;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  cursor: pointer;
`;

export const BeerLinkText = styled.button`
  margin: 15px;
  padding: 15px;
  color: black;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: lightgray;
  color: black;
  margin: 10px;
  padding: 5px 0 0 10px;
  border-radius: 20px;
  & .icon {
    margin: 5px;
    cursor: pointer;
    &:hover {
    }
  }
`;

export const CancelBtn = styled.button`
  padding: 5px;
  color: white;
  margin: 5px;
  background-color: gray;
  border: none;
  border-radius: 10px;
`;

export const BackgroundColor = styled.div`
  background-color: #787a91;
  margin-top: 0;
  width: 100vw;
  height: 100vh;
`;

export const ButtonWrapper = styled.div``;
