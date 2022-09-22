import styled from "@emotion/styled";
import Banner from "./Banner";
import Introduction from "./Introduction";

const Avatar = styled.div`
  position: absolute;
  right: 84px;
  top: 49px;
  border-radius: 50px;
  width: 150px;
  height: 200px;
  background-image: url("/avatar.jpg");
  background-size: cover;
  background-position-x: 50%;
`;

const Header = () => {
  return (
    <header>
      <Banner />
      <Avatar></Avatar>
      <Introduction />
    </header>
  );
};

export default Header;
