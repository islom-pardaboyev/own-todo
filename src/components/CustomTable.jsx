import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: <div className="px-4 text-white highlight highlight-variant-4 highlight-red-500 w-fit">Name</div>,
    dataIndex: "todoName",

  },
  {
    title: "Added Time",
    dataIndex: "todoDate",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const CustomTable = ({todos}) => (
  <Table
    columns={columns}
    dataSource={todos}
    onChange={onChange}
    showSorterTooltip={{
      target: "sorter-icon",
    }}
  />
);
export default CustomTable;
