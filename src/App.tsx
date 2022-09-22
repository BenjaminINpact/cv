import styled from "@emotion/styled";
import Header from "./components/Header";
import Section from "./components/Section/index";
import Lists from "./mocks/lists";
import List from "./components/List";
import Footer from "./components/Footer";
import AddModal from "./components/AddModal";
import React, { useState } from "react";
import DataForm from "./models/dataForm";
import Item from "./models/item";

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  max-width: 1800px;
  margin: auto;
`;
const lists = new Lists();

function App() {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [listTechnos, setListTechnos] = useState(lists.technos);
  const [listCompetences, setListCompetences] = useState(lists.competences);
  const [listParcours, setListParcours] = useState(lists.parcours);
  const [listInterets, setListInterets] = useState(lists.interets);

  const onToggleModal = () => {
    setIsModalDisplayed((prev) => !prev);
  };

  const openAccurateModal = (id: string) => {
    onToggleModal();
    setTitleModal(id);
  };

  const onAddItem = (datas: DataForm) => {
    setIsModalDisplayed(false);
    const newItem = new Item(datas.text, false, datas.category);
    switch (datas.category) {
      case "technos":
        setListTechnos((prev) => {
          return [newItem, ...prev];
        });
        break;
      case "competences":
        setListCompetences((prev) => {
          return [newItem, ...prev];
        });
        break;
      case "parcours":
        setListParcours((prev) => {
          return [newItem, ...prev];
        });
        break;
      case "interets":
        setListInterets((prev) => {
          return [newItem, ...prev];
        });
        break;
    }
  };

  const onRemoveItem = (item: Item) => {
    switch (item.category) {
      case "technos":
        setListTechnos((prev) => {
          return prev.filter((x) => x.id !== item.id);
        });
        break;
      case "competences":
        setListCompetences((prev) => {
          return prev.filter((x) => x.id !== item.id);
        });
        break;
      case "parcours":
        setListParcours((prev) => {
          return prev.filter((x) => x.id !== item.id);
        });
        break;
      case "interets":
        setListInterets((prev) => {
          return prev.filter((x) => x.id !== item.id);
        });
        break;
    }
  };

  return (
    <React.Fragment>
      {isModalDisplayed && (
        <AddModal
          title={titleModal}
          onCloseModal={onToggleModal}
          onAddItem={(data: DataForm) => onAddItem(data)}
        />
      )}
      <Header />
      <SectionContainer>
        <Section title="Stack technique" gridColumn="1">
          <List
            items={listTechnos}
            id="technos"
            onOpenModal={(id: string) => openAccurateModal(id)}
            onRemoveItem={(item: Item) => onRemoveItem(item)}
          />
        </Section>
        <Section title="Compétences" gridColumn="2">
          <List
            items={listCompetences}
            id="competences"
            onOpenModal={(id: string) => openAccurateModal(id)}
            onRemoveItem={(item: Item) => onRemoveItem(item)}
          />
        </Section>
        <Section title="Parcours professionnel" gridColumn="1 / 3">
          <List
            items={listParcours}
            id="parcours"
            onOpenModal={(id: string) => openAccurateModal(id)}
            onRemoveItem={(item: Item) => onRemoveItem(item)}
          />
        </Section>
        <Section title="Centres d'intérêt" gridColumn="1 / 3">
          <List
            items={listInterets}
            id="interets"
            onOpenModal={(id: string) => openAccurateModal(id)}
            onRemoveItem={(item: Item) => onRemoveItem(item)}
          />
        </Section>
      </SectionContainer>
      <Footer />
    </React.Fragment>
  );
}

export default App;
