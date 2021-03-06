import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { WithContext as ReactTags } from "react-tag-input";
import styles from "./ReactTags.css";

export function MyListbox({ items, selected, setSelected }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm ring-2 ring-white focus:ring-gray-300 dark:bg-gray-700 dark:ring-gray-700 dark:focus:ring-gray-600">
          <span className="block truncate">{selected.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-700">
            {items.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? "text-gray-900 bg-gray-100" : null
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span className="block truncate">{item.name}</span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export function ReactTagsDemo({ tags, setTags }) {
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const onClearAll = () => {
    console.log(tags);
    setTags([]);
  };

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice();
    updatedTags.splice(i, 1, newTag);
    setTags(updatedTags);
  };

  return (
    <div className={styles.ReactTags}>
      <ReactTags
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        delimiters={delimiters}
        onClearAll={onClearAll}
        onTagUpdate={onTagUpdate}
        suggestions={[
          { id: "1", text: "????????" },
          { id: "2", text: "????????????" },
          { id: "3", text: "????????????????????" },
          { id: "4", text: "????????????????" },
        ]}
        placeholder="??????????..."
        minQueryLength={1}
        maxLength={30}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        autocomplete={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        inline={true}
        allowAdditionFromPaste={true}
        editable={false}
        clearAll={true}
        tags={tags}
      />
    </div>
  );
}
