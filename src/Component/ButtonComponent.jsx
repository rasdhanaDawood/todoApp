import React from 'react'

function ButtonComponent(props) {
const {data,index,items,setItems}=props
  const toggleStatus = (key) => {
    setItems(
        items.map((item, index) =>
            index === key ? { ...item, status: !item.status } : item
        )
    );
  };
  
  return (
    <div>
       <button
                  className="todo-button"
                  onClick={() => toggleStatus(index)}
                >
                  <svg fill={data.status ? "#056679" : "#808080"}>
                    <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9" />
                  </svg>

                  <p
                    style={
                      data.status ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {data.title}
                  </p>
                </button>
    </div>
  )
}

export default ButtonComponent
