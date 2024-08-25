import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "index",
  },
  {
    title: (
      <div className="px-4 text-white highlight highlight-variant-4 highlight-red-500 w-fit">
        Name
      </div>
    ),
    dataIndex: "todoName",
  },
  {
    title: (
      <div className="px-4 text-white highlight highlight-variant-7 highlight-green-500 w-fit">
        Added Time
      </div>
    ),

    dataIndex: "todoDate",
  },
  {
    title: (
      <div className="px-4 text-white highlight highlight-variant-7 highlight-yellow-500 w-fit">
        Action
      </div>
    ),
    dataIndex: "action",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const CustomTable = ({ todos }) => (
  <Table
    columns={columns}
    dataSource={todos}
    onChange={onChange}
    
  />
);
export default CustomTable;
