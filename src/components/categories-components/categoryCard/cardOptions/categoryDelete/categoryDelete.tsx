"use client";
import { useAppDispatch } from "@/src/app/hooks";
import { getAppDataHandler } from "@/src/handlers/getAppDataHandler";
import { categoriesReducer, userReducer } from "@/src/redux/appStateSlice";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import deleteCategoryHandler from "@/src/handlers/deleteCategoryHandler";
import { categoryTypes } from "@/src/types/interface";
type DialogElement = HTMLDialogElement | null;

export default function CategoryDelete({
  category,
}: {
  category: categoryTypes;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const dialogElement = useRef(null);

  useEffect(() => {
    onclick = (event) => {
      if (event.target === dialogElement.current!) {
        (dialogElement.current as DialogElement)?.close();
      }
    };
  }, []);

  const deleteHadndler = () => {
    (dialogElement.current as DialogElement)?.showModal();
    const { categories } = getAppDataHandler();
    dispatch(categoriesReducer(categories));
  };

  const deleteCategory = () => {
    (dialogElement.current as DialogElement)?.close();
    const remainedCategories = deleteCategoryHandler(category.name);
    dispatch(categoriesReducer(remainedCategories));
  };
  return (
    <div>
      <button
        onClick={deleteHadndler}
        className="mt-2 h-8 w-32 mx-auto hover:shadow-md rounded-lg text-red-400 hover:text-red-600"
      >
        Remove
      </button>
      <dialog
        ref={dialogElement}
        className="bg-gray-300 cursor-default rounded-md w-full sm:w-96"
      >
        <div className="bg-red-100 p-4 w-full h-full">
          Please write down <strong>{category.name}</strong> then click on the
          delete button.
          <input
            id="inputTitle"
            className="w-full m-2 p-1 focus:bg-gray-100 text-xl outline outline-0 transition-all border-none   focus:outline-0 "
            placeholder="..."
            autoComplete="off"
            type="text"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            disabled={inputValue !== category.name}
            onClick={() => deleteCategory()}
            className="icon !px-2 disabled:bg-gray-400 bg-red-400 !w-fit"
          >
            Delete
          </button>
        </div>
      </dialog>
    </div>
  );
}