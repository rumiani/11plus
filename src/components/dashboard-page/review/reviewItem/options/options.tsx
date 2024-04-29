"use client";
import React, { useState } from "react";
import { editHandler } from "@/src/handlers/editHandler";
import { randomItemHandler } from "@/src/handlers/randomItemHandler";
import { removeHandler } from "@/src/handlers/removeHandler";
import { itemReducer } from "@/src/redux/appStateSlice";
import { itemTypes } from "@/src/types/interface";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Options({ item }: { item: itemTypes }) {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const removeBtnFunction = () => {
    setShowOptions(false);
    const isItemRemoved = removeHandler(item.id);
    if (isItemRemoved) {
      toast.success("Item was removed successfully");
      const randomItem = randomItemHandler();
      if (randomItem) {
        dispatch(itemReducer(randomItem));
      } else {
        dispatch(itemReducer());
      }
    }
  };
  const editBtnFunction = () => {
    setShowOptions(false);
    editHandler(item.id);
  };
  return (
    <div className="">
      <button onClick={() => setShowOptions(true)} className="icon">
        <BsThreeDotsVertical />
      </button>
      {showOptions && (
        <div className="absolute left-0 flex flex-col top-0 w-full h-32 rounded-lg shadow-gray-400 shadow-lg bg-white">
          <button
            onClick={() => setShowOptions(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-xl text-red-500 hover:bg-red-200 "
          >
            <IoClose />
          </button>
          <Link
            href={`/dashboard/edit/${item.id}`}
            className="mt-8 h-8 w-32 mx-auto hover:shadow-md rounded-lg text-yellow-500 hover:text-yellow-700"
          >
            <button
              onClick={() => editBtnFunction()}
              className="text-center w-full pt-2"
            >
              Edit
            </button>
          </Link>
          <button
            onClick={() => removeBtnFunction()}
            className="mt-2 h-8 w-32 mx-auto hover:shadow-md rounded-lg text-red-400 hover:text-red-600"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
