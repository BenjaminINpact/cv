import styled from "@emotion/styled";

const mirror = `transform: scaleX(-1)`;

const Name = styled.h1`
  margin: 0;
  ${mirror};
  color: white;
  font-size: 48px;
`;
const Subtitle = styled.h2`
  margin: 0;
  color: white;
  padding-top: 10px;
  ${mirror};
`;
const BannerImg = styled.div`
  height: 150px;
  background-image: url("/banner.jpg");
  text-align: center;
  ${mirror};
`;
const Div = styled.div`
  display: inline-block;
  margin-top: 16px;
  padding: 5px 10px 10px 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Banner = () => {
  return (
    <div>
      <BannerImg>
        <Div>
          <Name>Benjamin Roulin</Name>
          <Subtitle>Développeur Front-End</Subtitle>
        </Div>
      </BannerImg>
    </div>
  );
};

export default Banner;
