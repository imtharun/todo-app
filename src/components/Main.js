import React from "react";
import "./../index.css";

export default function Main(props) {
  return (
    <form onSubmit={props.clickHandler} className="flex justify-center">
      <div>
        <input
          id="taskAdder"
          className="w-[19rem] my-2 rounded-3xl border-2 border-slate-500 py-2 px-3"
          type="text"
        />
      </div>
      <div>
        <button className="cursor-pointer m-2 bg-slate-300  rounded-3xl px-5 py-2">Add</button>
      </div>
    </form>
  );
}
