import React from "react";
import "./../index.css";

export default function Main(props) {
  return (
    <form onSubmit={props.clickHandler} className="flex justify-center">
      <div>
        <input
          id="taskAdder"
          className="w-60 md:w-96 my-2 rounded-3xl border-[1.5px] outline-none border-slate-500 py-2 px-3 shadow-xl"
          type="text"
        />
      </div>
      <div>
        <button className="shadow-xl cursor-pointer m-2 bg-slate-300 font-semibold rounded-3xl px-5 py-2 border-[1.5px] border-slate-500">
          Add
        </button>
      </div>
    </form>
  );
}
