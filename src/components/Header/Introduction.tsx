import styled from "@emotion/styled";

const Div = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const P = styled.p`
  margin: 0;
  padding: 0 300px 0 55px;
  text-align: justify;
  color: white;
`;

const Introduction = () => {
  return (
    <Div>
      <P>
        Issu d'une reconversion réussie dans le développement web et fort d'une
        expérience de 4 ans en tant que développeur fullstack dans des
        technologies modernes comme Angular, API Rest (.Net Core), SQL server,
        intégration et déploiement continue grâce à Azure DevOps, Docker et
        Kubernetes, je suis passionné des nouvelles technologies. Mes affinités
        sont tournées vers le développement Front-End avec des technologies
        comme Angular, et plus récemment avec React.
      </P>
    </Div>
  );
};

export default Introduction;
