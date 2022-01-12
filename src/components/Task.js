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

  const clickHandler = function (event) {
    const delId = +event.target.closest("div").firstElementChild.id;
    const setter = props.setTasks;
    setter((prev) => {
      const arr = [];
      prev.map((ele) => {
        if (ele.id !== delId) {
          arr.push({
            ...ele,
            id: arr.length + 1,
          });
        }
        return ele;
      });
      return arr;
    });
  };

  const allTasks = tasks.map((ele) => {
    return (
      <div
        key={ele.id}
        className="relative bg-white p-2 w-80 md:w-[29rem] rounded-full my-2 border-[1.5px] border-slate-500"
      >
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
        <button onClick={clickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w- absolute right-4 top-1/4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#808080"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center my-1 flex-col">
      {allTasks}
    </div>
  );
}
