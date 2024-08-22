import { DatePicker, Input } from "antd";
import React, { useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTodos() {
  const { todos } = useContext(Context);

  const navigate = useNavigate();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  function handleFormSubmit(e) {
    e.preventDefault();
    const { todoName, todoDate } = e.target.elements;
    const data = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      todoName: todoName.value,
      todoDate: todoDate.value,
    };

    axios.post("http://localhost:3000/todos", data, {
      headers: { "Content-Type": "application/json" },
    });
    setTimeout(() => {
      navigate("/");
    }, 300);
  }
  return (
    <section className="relative p-10">
      <form onSubmit={handleFormSubmit}>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center justify-center px-10 mb-6 text-4xl font-bold text-center text-white jc highlight-variant-10 highlight-green-500 highlight">
            Add Todo
          </h1>
          <button className="relative px-5 py-3 -mt-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-500 opacity-0 group-hover:opacity-100"></span>
            <span className="relative capitalize transition-colors duration-300 delay-200 group-hover:text-white ease">
              sav and add
            </span>
          </button>
        </div>
        <div
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center gap-3"
        >
          <Input
            allowClear
            size="large"
            required
            placeholder="Enter todo name"
            name="todoName"
          />
          <DatePicker
            name="todoDate"
            required
            className="w-full"
            size="large"
            onChange={onChange}
          />
        </div>
      </form>
    </section>
  );
}

export default AddTodos;
