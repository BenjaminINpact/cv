import styled from "@emotion/styled";

const MyFooter = styled.footer`
  background-color: #03122fcc;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Para = styled.p`
  margin: 0;
`;
const Footer = () => {
  return (
    <MyFooter>
      <Para>Contact : benjamin.roulin.33@gmail.com</Para>
    </MyFooter>
  );
};

export default Footer;
