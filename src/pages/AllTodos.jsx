import React, { useContext, useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Context } from "../context/Context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AllTodos() {
  const { todos, setTodos } = useContext(Context);
  const navigate = useNavigate()

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios("http://localhost:3000/todos").then((res) => {
      res.data.map((item, index) => {
        item.key = index + 1;
        item.index = index + 1;
        item.action = (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleDeleteTodo(item.id)}
              className="p-3 border-red-500 w-[30px] h-[30px] border text-red-500 hover:bg-red-500 hover:text-white duration-300 flex items-center justify-center rounded-full"
            >
              <DeleteOutlined />
            </button>
            <button onClick={() => navigate(`/update/${item.id}`)} className="p-3 border-green-500 w-[30px] h-[30px] border text-green-500 hover:bg-green-500 hover:text-white duration-300 flex items-center justify-center rounded-full">
              <EditOutlined />
            </button>
          </div>
        );
      });
      setTodos(res.data);
    });
  }, [refresh]);

  function handleDeleteTodo(id) {
    axios.delete(`http://localhost:3000/todos/${id}`).then((res) => {
      setTimeout(() => {
        setRefresh(!refresh);
        toast.success("Todo Deleted");
      }, 300);
    });

    setRefresh(!refresh);
  }

  return (
    <section className="p-10">
      <CustomTable todos={todos} />
    </section>
  );
}

export default AllTodos;
