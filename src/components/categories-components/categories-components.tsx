import React from "react";
import { categoryTypes } from "@/src/types/interface";
import { isEmpty } from "lodash";
import Link from "next/link";
import { useAppSelector } from "@/src/app/hooks";
import CategoryCard from "./categoryCard/categoryCard";

export default function CategoriesComponents() {
  const { categories } = useAppSelector((state) => state.appState);
  return (
    <div>
      <h2 className="border-b border-gray-300">Categories</h2>
      {isEmpty(categories) ? (
        <div className="text-red-500">
          There is no categories here.
          <br />
          <Link
            href={"/new"}
            className="text-blue-500 font-normal hover:underline"
          >
            Create a new Item with a new category
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-2 my-8">
          {categories.map((category: categoryTypes, i) => {
            return <CategoryCard key={i} category={category} />;
          })}
        </div>
      )}
    </div>
  );
}