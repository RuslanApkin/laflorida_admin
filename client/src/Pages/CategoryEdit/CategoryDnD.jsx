import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialData = {
  categoreis: {
    "category-1": { id: "category-1", content: "Монобукеты" },
    "category-2": { id: "category-2", content: "Розы" },
    "category-3": { id: "category-3", content: "Смешанные букеты" },
    "category-4": { id: "category-4", content: "Каркасные" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Букеты",
      itemIDs: ["category-1", "category-2", "category-3", "category-4"],
    },
  },
  columnOrder: ["column-1"],
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const CategoryDnD = () => {
  const [data, setData] = useState(initialData);
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newItemIDs = Array.from(column.itemIDs);
    newItemIDs.splice(source.index, 1);
    newItemIDs.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      itemIDs: newItemIDs,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const items = column.itemIDs.map((itemIDs) => data.categoreis[itemIDs]);

        return <Column key={column.id} column={column} items={items} />;
      })}
    </DragDropContext>
  );
};

export default CategoryDnD;

function Column({ key, column, items }) {
  return (
    <div className="rounded-lg border-2 border-gray-300 p-4 bg-white max-w-xs">
      <h3 className="text-xl font-semibold text-center select-none">
        {column.title}
      </h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Item key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

function Item({ key, item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="text-lg border-2 border-gray-300 rounded-md p-2 bg-gray-100 mt-2"
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
}
