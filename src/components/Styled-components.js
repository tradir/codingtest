import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 5px;
  top: 0;
  left: 0;
  width: 100vw;
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
  margin-bottom: 5px;
  padding: 10px;
  color: #eeeeee;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #787a91;
  border: 2px solid #141e61;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 30vh;
  background-color: #eeeeee;
  color: #141e61;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  border: 3px solid #141e61;
  & .icon {
    margin: 5px;
    cursor: pointer;
    &:hover {
      background-color: gray;
      border-radius: 50px;
      height: 60px;
      width: 60px;
      transition: 1s;
    }
  }
`;

export const CancelBtn = styled.button`
  padding: 15px;
  margin-top: 30px;
  margin-left: 30vh;
  color: white;
  background-color: #141e61;
  border: 2px solid #eeeeee;
  border-radius: 10px;
  cursor: pointer;
`;

export const BackgroundColor = styled.div`
  background-color: #787a91;
  margin-top: 0;
  width: 94.5vw;
  height: 100vh;
  padding: 50px;
`;

export const WelcomeTable = styled.div`
  background-color: #eeeeee;
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
  border-radius: 50px;
  text-align: center;
  border: 3px solid #141e61;
`;

export const ParagraphText = styled.p`
  color: #141e61;
  padding: 10px;
`;

export const ButtonWrapper = styled.div``;
