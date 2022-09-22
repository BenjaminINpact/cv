import styled from "@emotion/styled";
import Item from "../../models/item";
import Button from "../../components/Button/index";

type Props = {
  items: Item[];
  id: string;
  onOpenModal: (id: string) => void;
  onRemoveItem: (item: Item) => void;
};

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 3px;
  position: relative;
`;

const Square = styled.div`
  width: 10px;
  height: 10px;
  background-color: #71759c;
  display: inline-block;
  margin-right: 5px;
`;

const Remove = styled.div`
  display: inline-block;
  font-size: 20px;
  margin-right: 5px;
  transform: scale(1.2, 1);
  &:hover {
    color: #f14734;
    cursor: pointer;
  }
`;

const List = ({ items, id, onOpenModal, onRemoveItem }: Props) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <Li key={item.id + index}>
            {item.isPermanent && <Square></Square>}
            {!item.isPermanent && (
              <Remove
                onClick={() => {
                  onRemoveItem(item);
                }}
              >
                x
              </Remove>
            )}
            {item.text}
          </Li>
        );
      })}
      <Button onClick={() => onOpenModal(id)} target={id} />
    </ul>
  );
};

export default List;
