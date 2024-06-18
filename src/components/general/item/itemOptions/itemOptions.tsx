"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useParams, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { ItemTypes } from "@/src/types/interface";
import {
  allItemsReducer,
  itemReducer,
  numberOfItemsToReviewReducer,
} from "@/src/redux/slices/itemStateSlice";
import { itemsCategoryIdFilterHandler } from "@/src/handlers/itemsCategoryIdFilterHandler";
import { randomItemHandler } from "@/src/handlers/randomItemHandler";
import { db } from "@/src/services/db";
import notFoundError from "@/src/handlers/notFoundError";
import { useRouter } from "next/navigation";
import { itemsToReviewWithActiveCategoryHandler } from "@/src/handlers/itemsToReviewWithActiveCategoryHandler";
import { numberOfItemsToReviewHandler } from "@/src/handlers/itemsToReviewHandler";

export default function ItemOptions({ item }: { item: ItemTypes }) {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const category = useParams<{ id: string; category: string }>();
  const router = useRouter();
  const path = usePathname();

  const removeBtnFunction = async () => {
    setShowOptions(false);
    const pageName = path.split("/")[2];
    console.log(pageName);

    try {
      const foundItem = await db.items.get(item.id);
      if (!foundItem) throw notFoundError("404");
      await db.items.delete(item.id);

      if (pageName === "review") {
        const numberOfItems = await numberOfItemsToReviewHandler();
        if (numberOfItems)
          dispatch(numberOfItemsToReviewReducer(numberOfItems));
        const itemsToReview = await itemsToReviewWithActiveCategoryHandler();
        if (itemsToReview) {
          dispatch(allItemsReducer(itemsToReview));
          const newRandomItem = randomItemHandler(itemsToReview);
          dispatch(itemReducer(newRandomItem));
        }
      }
      if (pageName === "category") {
        const filteredItemsData = await itemsCategoryIdFilterHandler(
          category.id
        );
        dispatch(allItemsReducer(filteredItemsData));
        router.push(`/box/category/${item.categoryId}/${item.category}`);
      }
      if (pageName === "item") {
        router.push(`/box/category/${item.categoryId}/${item.category}`);
      }
      toast.success("The item was removed.");
    } catch (error: any) {
      console.log("Error");
      if ((error.name = "404")) toast.error("Item was not found");
    }
  };
  const editBtnFunction = () => {
    setShowOptions(false);
  };

  const modelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modelRef.current &&
        !modelRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    if (showOptions) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showOptions]);
  return (
    <div className="z-10 relative">
      <button onClick={() => setShowOptions(true)} className="icon">
        <BsThreeDotsVertical />
      </button>
      {showOptions && (
        <div
          ref={modelRef}
          className="absolute right-0 flex flex-col top-0 gap-2 p-4 w-52 h-fit rounded-lg shadow-gray-400 shadow-lg bg-white text-center"
        >
          <button
            onClick={() => setShowOptions(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-xl text-red-500 hover:bg-red-200 "
          >
            <IoClose />
          </button>
          <div className="mt-8 flex flex-col gap-2">
            <Link href={`/dashboard/edit/${item.id}`}>
              <button
                onClick={() => editBtnFunction()}
                className=" text-yellow-500 hover:text-yellow-700"
              >
                Edit
              </button>
            </Link>
            <button
              onClick={() => removeBtnFunction()}
              className="  text-red-400 hover:text-red-600"
            >
              Remove
            </button>
            <Link href={`/box/item/${item.id}`}>
              <button className=" text-blue-400 hover:text-blue-600">
                Open Item
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}