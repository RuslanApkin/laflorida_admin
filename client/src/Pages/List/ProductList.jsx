import React from "react";
import { SideBar } from "../../Components/SideBar";
import Table, {
  ImgCell,
  SelectColumnFilter,
  StatusPill,
  LinkCell,
} from "./Table";

const getData = () => {
  const data = [
    {
      id: "812",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      status: "Active",
      role: "Admin",
      price: 27,
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "812",
      title: "Product Directives Officer",
      department: "Intranet",
      status: "Inactive",
      role: "Owner",
      price: 43,
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "812",
      title: "Forward Response Developer",
      department: "Directives",
      status: "Active",
      role: "Member",
      price: 32,
      imgUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "812",
      title: "Central Security Manager",
      department: "Program",
      status: "Offline",
      role: "Member",
      price: 29,
      imgUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "812",
      title: "Lean Implementation Liaison",
      department: "Mobility",
      status: "Inactive",
      role: "Admin",
      price: 36,
      imgUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "812",
      title: "Internal Applications Engineer",
      department: "Security",
      status: "Active",
      role: "Member",
      price: 24,
      imgUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return [
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ];
};

export const ProductList = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: " ",
        Cell: ImgCell,
        imgAccessor: "imgUrl",
      },
      {
        Header: "About",
        accessor: "title",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        Cell: StatusPill,
      },
      {
        Header: "Link",
        accessor: "role",
        Cell: LinkCell,
        disableSortBy: true,
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="block lg:w-60 shrink-0"></div>
      <div className="min-h-screen text-gray-900 sm:px-6 lg:px-8 pt-4 mt-6 mx-auto w-full max-w-6xl px-4">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};
