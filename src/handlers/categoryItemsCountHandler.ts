import { ItemTypes } from "../types/interface";
import { getAppDataHandler } from "./getAppDataHandler";
import { makeUrlFriendly } from "./newHandlers/makeUrlFriendly";

export const categoryItemsCountHandler = (category: string) => {
  // if (typeof window !== "undefined") {
    
  //   const allItems = getAppDataHandler().itemsData;
  //   const categoryItems: ItemTypes[] = allItems.filter((item: ItemTypes) => {
      
  //     return makeUrlFriendly(item.) === makeUrlFriendly(category);
  //   });

  //   let allItemsCount: number;
  //   let learnedCount: number;
  //   let unLearnedCount: number;

  //   if (category === "") {
  //     const allLearnedItems = allItems.filter(
  //       (item: ItemTypes) => item.reviews.box > 5
  //     );
  //     allItemsCount = allItems.length;
  //     learnedCount = allLearnedItems.length;
  //     unLearnedCount = allItemsCount - learnedCount;
  //   } else {
  //     const categoryLearnedItems = categoryItems.filter(
  //       (item: ItemTypes) => item.reviews.box > 5
  //     );
  //     allItemsCount = categoryItems.length;
  //     learnedCount = categoryLearnedItems.length;
  //     unLearnedCount = allItemsCount - learnedCount;
  //   }
  //   return { allItemsCount, learnedCount, unLearnedCount };
  // }
};
