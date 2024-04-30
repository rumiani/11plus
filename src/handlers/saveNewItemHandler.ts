import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { FormValues, CategoryTypes, ItemTypes } from "../types/interface";
import { makeUrlFriendly } from "./makeUrlFriendly";

export const saveNewItemToLocal = ({ title, body, category }: FormValues) => {
  const appDataJson: string | null = localStorage.getItem("appData");
  if (appDataJson) {
    let appData = JSON.parse(appDataJson);

    let { categories, itemsData } = appData;
    const categoryExists = categories.find(
      (savedCategory: CategoryTypes) => savedCategory.name === category
    );
    if (!categoryExists)
      categories.push({
        id: uuidv4(),
        name: category.trim(),
        status: false,
        createdAt: Date.now(),
      });
    const itemObject: ItemTypes = {
      id: uuidv4(),
      title,
      body,
      category: category.trim(),
      createdAt: Date.now(),
      reviews: {
        box: 1,
        review: 0,
        lastReviewDate: Date.now(),
      },
    };
    itemsData.push(itemObject);
    localStorage.setItem("appData", JSON.stringify({ categories, itemsData }));
    toast.success("The new item has been saved.");
  }
};
