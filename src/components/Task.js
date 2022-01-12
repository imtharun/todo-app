import React from "react";

export default function Task(props) {
  
  const { tasks } = { ...props };

  const changeHandler = function (event) {
    const setter = props.setTasks;
    const id = +event.target.id;
    setter((prev) =>
      prev.map((ele) => {
        return {
          ...ele,
          isChecked: id === ele.id ? !ele.isChecked : ele.isChecked,
        };
      })
    );
  };

  const allTasks = tasks.map((ele) => {
    return (
      <div key={ele.id} className="p-2 w-96 rounded-full my-2 border border-slate-500">
        <input
          className="text-black ml-2 "
          type="checkbox"
          value={ele.content}
          key={ele.key}
          id={ele.id}
          onChange={changeHandler}
        />
        
        <label
          style={{
            textDecoration: ele.isChecked ? "line-through" : "none",
            color: ele.isChecked ? "#808080" : "#000",
          }}
          className="ml-3 text-lg"
          htmlFor={ele.id}
        >
          {ele.content}
        </label>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center my-1 flex-col">
      {allTasks}
    </div>
  );
}
