import React, { useState } from "react";
import { MyListbox, ReactTagsDemo } from "./FormComponenets";
import axios from "axios";

const items1 = [
  { id: 1, name: "Букет", unavailable: false },
  { id: 2, name: "Семена", unavailable: false },
  { id: 3, name: "Что-то еще", unavailable: false },
];

const items2 = [
  { id: 1, name: "В продаже", unavailable: false },
  { id: 2, name: "Нет в наличии", unavailable: false },
  { id: 3, name: "Скрыто", unavailable: false },
];

export default function AddProduct() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [info, setInfo] = useState({
    title: "",
    description: "",
    price: "",
    imgUrl: "",
  });
  const [category, setCategory] = useState(items1[0]);
  const [status, setStatus] = useState(items2[0]);
  const [composition, setComposition] = useState([]);
  const addProductHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    const request = {
      ...info,
      category: category.name,
      status: status.name,
      composition: composition.map((a) => a.text),
    };
    console.log(request);

    axios
      .post("http://127.0.0.1:5000/api/products/create", request, config)
      .then((response) => {
        setInfo({ title: "", description: "", price: "", imgUrl: "" });
      })
      .catch((err) => {
        setError(err.response.data.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="mb-4 text-xl">Добавление товаров</h2>
      {error ? (
        <span className="error-message">{error}</span>
      ) : (
        <form
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative pb-20 mb-20"
          method="POST"
          onSubmit={addProductHandler}
        >
          <label htmlFor="title">
            Название
            <input
              type="text"
              id="title"
              placeholder="Название"
              className="mt-1 relative w-full py-2 px-3 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm ring-2 ring-white focus:ring-gray-300 dark:bg-gray-700 dark:ring-gray-700 dark:focus:ring-gray-600"
              required
              value={info.title}
              onChange={handleChange}
              name="title"
            ></input>
          </label>
          <label htmlFor="category" className="z-20">
            Категория
            <MyListbox
              id="category"
              items={items1}
              selected={category}
              setSelected={setCategory}
              name="category"
            />
          </label>
          <label htmlFor="status" className="z-20">
            Статус
            <MyListbox
              id="status"
              items={items2}
              selected={status}
              setSelected={setStatus}
              name="status"
            />
          </label>
          <label htmlFor="price" className="flex flex-col">
            Цена
            <input
              type="number"
              id="price"
              placeholder="0"
              min={0}
              className="relative mt-1 w-20 py-2 px-3 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm ring-2 ring-white focus:ring-gray-300 dark:bg-gray-700 dark:ring-gray-700 dark:focus:ring-gray-600"
              value={info.price}
              onChange={handleChange}
              name="price"
            />
          </label>
          <label className="">
            Изображение
            <input
              type="file"
              id="imgUrl"
              className="mt-1 relative w-full py-3 px-3 text-left rounded-lg cursor-default focus:outline-none sm:text-sm border-2 border-gray-300 border-dashed dark:border-gray-600
            file:mr-4 file:py-1 file:px-3
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-accent/10 dark:file:bg-accent/20 file:text-accent
            hover:file:bg-accent/20 dark:hover:file:bg-accent/30 file:cursor-pointer file:transition-colors file:duration-200"
              accept=".jpg, .jpeg, .png"
              value={info.imgUrl}
              onChange={handleChange}
              name="imgUrl"
            ></input>
          </label>
          <label htmlFor="description">
            Описание
            <textarea
              type="textarea"
              id="description"
              placeholder="Описание..."
              rows="5"
              className="mt-1 placeholder:italic resize-none relative w-full py-2 px-3 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm ring-2 ring-white focus:ring-gray-300 dark:bg-gray-700 dark:ring-gray-700 dark:focus:ring-gray-600"
              required
              value={info.description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </label>
          <label htmlFor="composition" className="z-20">
            Состав
            <ReactTagsDemo
              id="composition"
              tags={composition}
              setTags={setComposition}
              name="composition"
            />
          </label>
          <button
            type="submit"
            className="bg-accent text-lg text-white py-2 px-4 w-fit rounded-lg border-none absolute bottom-0 right-0 hover:opacity-80"
          >
            Добавить
          </button>
        </form>
      )}
    </>
  );
}
