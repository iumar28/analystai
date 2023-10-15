import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const Index = () => {
  const [items, setItems] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "grey",
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
  });

  async function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const reorderedItems = [...items];
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
   <DragDropContext onDragEnd={onDragEnd}>
  <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
        className="mx-auto mt-24" 
      >
        {items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.email} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
              >
               <div
  ref={provided.innerRef}
  {...provided.draggableProps}
  {...provided.dragHandleProps}
  style={getItemStyle(
    snapshot.isDragging,
    provided.draggableProps.style
  )}
>
 {item.username}
  <br />
  {item.phone}
</div>

              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>


  );
};

export default Index;
