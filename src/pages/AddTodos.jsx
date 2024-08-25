import { DatePicker, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAxios } from "../hook/useAxios";
import dayjs from "dayjs";

function AddTodos() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const onChange = (date, dateString) => {
    setTodoDate(dateString);
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = {
      todoName,
      todoDate,
    };

    if (id) {
      axiosInstance.put(`/todos/${id}`, data).then(() => {
        setTimeout(() => {
          navigate("/");
          toast.success("Todo Updated Successfully");
        }, 300);
      });
    } else {
      axiosInstance.post("/todos", data).then(() => {
        setTimeout(() => {
          navigate("/");
          toast.success("Todo Added Successfully");
        }, 300);
      });
    }
  }

  useEffect(() => {
    if (id) {
      axiosInstance.get(`/todos/${id}`).then((res) => {
        setTodoName(res.data.todoName);
        setTodoDate(dayjs(res.data.todoDate));
      });
    }
  }, [id, axiosInstance]);

  return (
    <section className="relative p-10">
      <form onSubmit={handleFormSubmit}>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center justify-center highlight highlight-variant-7 px-10 mb-6 text-4xl font-bold text-center text-white">
            {id ? "Update" : "Add"} Todo
          </h1>
          <button className="relative px-5 py-3 -mt-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-500 opacity-0 group-hover:opacity-100"></span>
            <span className="relative capitalize transition-colors duration-300 delay-200 group-hover:text-white ease">
              {id ? "Update" : "Add"} Todo
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Input
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
            allowClear
            size="large"
            required
            placeholder="Enter todo name"
            name="todoName"
          />
          <DatePicker
            value={todoDate ? dayjs(todoDate) : null}
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