import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const list = [
  { sortBy: "title", title: "По названию" },
  { sortBy: "id", title: "По дате" },
  { sortBy: "body", title: "По популярности" },
];

const SortList = ({ setSortType, sortType }) => {
  return (
    <DropdownButton id="dropdown-basic-button" title={sortType?.title || sortType}>
      {list.map((item) => (
        <Dropdown.Item onClick={() => setSortType(item)}>{item.title}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SortList;
