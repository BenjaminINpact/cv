import styled from "@emotion/styled";

type Props = {
  title: string;
  children: React.ReactNode;
  gridColumn: string;
};

const Section = ({ title, children, gridColumn }: Props) => {
  const Div = styled.div`
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 20px;
    grid-column: ${gridColumn};
    position: relative;
    &:hover {
      box-shadow: rgb(238 238 255 / 20%) 0px 4px 16px 4px;
    }
    transition: box-shadow 200ms ease 0s, border-color 200ms ease 0s;
  `;

  return (
    <Div className={gridColumn}>
      <h3>{title}</h3>
      {children}
    </Div>
  );
};

export default Section;
