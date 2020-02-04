import React from "react";

import ListItem from "./list_item";

const toDos = [
  {
    id: "01",
    title: "Wash car"
  },
  {
    id: "02",
    title: "Empty dishwasher"
  },
  {
    id: "03",
    title: "Feed cat"
  },
  {
    id: "04",
    title: "Feed other cat, even though he's a jerk."
  },
]


class ToDoList extends React.Component {
  render() {
    const toDoElements = toDos.map((item) => {
      return <ListItem key={item.id} title={item.title} />
    });
    return (
      <ol>
        {toDoElements}
      </ol>
    );
  }
}

export default ToDoList;
