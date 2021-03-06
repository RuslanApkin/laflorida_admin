import React, { useEffect, useState } from "react";
import axios from "axios";
import Table, {
  ImgCell,
  SelectColumnFilter,
  StatusPill,
  LinkCell,
} from "./Table";

// const getData = () => {
//   const data = [
//     {
//       id: "812",
//       title: "Regional Paradigm Technician",
//       department: "Optimization",
//       status: "Active",
//       role: "Admin",
//       price: 27,
//       imgUrl:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//     },
//     {
//       id: "812",
//       title: "Product Directives Officer",
//       department: "Intranet",
//       status: "Inactive",
//       role: "Owner",
//       price: 43,
//       imgUrl:
//         "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//     },
//     {
//       id: "812",
//       title: "Forward Response Developer",
//       department: "Directives",
//       status: "Active",
//       role: "Member",
//       price: 32,
//       imgUrl:
//         "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//     },
//     {
//       id: "812",
//       title: "Central Security Manager",
//       department: "Program",
//       status: "Offline",
//       role: "Member",
//       price: 29,
//       imgUrl:
//         "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//     },
//     {
//       id: "812",
//       title: "Lean Implementation Liaison",
//       department: "Mobility",
//       status: "Inactive",
//       role: "Admin",
//       price: 36,
//       imgUrl:
//         "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//     },
//     {
//       id: "812",
//       title: "Internal Applications Engineer",
//       department: "Security",
//       status: "Active",
//       role: "Member",
//       price: 24,
//       imgUrl:
//         "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//     },
//   ];
//   return [
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//     ...data,
//   ];
// };

export const ProductList = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: " ",
        Cell: ImgCell,
        imgAccessor: "image",
      },
      {
        Header: "????????????????",
        accessor: "title",
      },
      {
        Header: "????????",
        accessor: "price",
      },
      {
        Header: "??????????????????",
        accessor: "category",
      },
      {
        Header: "????????????",
        accessor: "status",
        Filter: SelectColumnFilter,
        Cell: StatusPill,
      },
      {
        Header: "????????????",
        accessor: "_id",
        Cell: LinkCell,
        disableSortBy: true,
      },
    ],
    []
  );

  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      axios
        .get("http://127.0.0.1:5000/api/products/read", config, {})
        .then((response) => {
          setPrivateData(response.data.data);
        })
        .catch((err) => {
          setError(err.response.data.error);
        });
    };

    fetchPrivateData();
  }, []);

  return (
    <>
      <h2 className="mb-4 text-xl">???????????? ??????????????</h2>
      {error ? (
        <span className="error-message">{error}</span>
      ) : privateData ? (
        <Table columns={columns} data={privateData} />
      ) : null}
    </>
  );
};
