import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddTodos, AllTodos } from "../pages";
import Navbar from "../components/Navbar";

function CustomRoutes() {
  return (
    <div>
      <div className="sticky top-0 w-full">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<AllTodos />} />
          <Route path="/add-todo" element={<AddTodos />} />
          <Route path="/update/:id" element={<AddTodos />} />
        </Routes>
      </div>
    </div>
  );
}

export default CustomRoutes;
