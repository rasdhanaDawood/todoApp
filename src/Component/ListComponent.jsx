import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

function ListComponent({ items, setItems }) {
    const [editIndex, setEditIndex] = useState(null);
    const [newTitle, setNewTitle] = useState("");
   
    const editItem = (index, title) => {

        setEditIndex(index)
        setNewTitle(title)
        console.log("Items before adding new element",items)
        console.log("new element",title)
    };
    const saveEdit = (key) => {
        
        setItems(items.map((data, index) => {
            if (index === key) {
                return { ...data, title: newTitle }
            }
            return data
        }))
        setNewTitle("")
        setEditIndex(null)

    }

  const deleteItem = (key) => {
    setItems(items.filter((data, index) => index !== key));
  };
  return (
    <div>
      {items.length > 0
        ? items.map((data, index) => (
            <li key={index}>
              {editIndex === index ? (
                    <input
                        className="edit-input"
                        type="text"
                        value={ newTitle }
                        onChange={(e) => setNewTitle(e.target.value)}
                        onBlur={() => saveEdit(index)}
                    />
                )  : (
                        <ButtonComponent
                            data={data}
                            index={index}
                            items={items}
                            setItems={setItems} />
              )}

              <i
                className="fa-regular fa-pen-to-square"
                onClick={() => editItem(index,data.title)}
              ></i>
              <i
                className="fa-regular fa-trash-can"
                onClick={() => deleteItem(index)}
              ></i>
            </li>
          ))
        : null}
    </div>
  );
}
export default ListComponent;
