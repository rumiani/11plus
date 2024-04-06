import { categoryTypes, itemTypes } from "../types/interface";
import { getAppDataHandler } from "./getAppDataHandler";
import { timeToNowHandler } from "./home/general/timeToNowHandler";

// These are the 6 boxes.Box zero means the learning proccess hasn't started yet.
const reviewBoxes = [0, 1, 3, 7, 15, 31];

export const itemsToReviewHandler = () => {
  if (typeof window !== "undefined") {
    const appData = getAppDataHandler();
    const { itemsData, categories } = appData;
    if (itemsData.length > 0) {
      const itemsToReview = itemsData.filter((item: itemTypes) => {
        const daysSinceReviewed = timeToNowHandler(
          item.reviews.lastReviewDate
        ).days;
        const hoursSinceReviewed = timeToNowHandler(
          item.reviews.lastReviewDate
        ).hours;
        const category = categories.find(
          (category: categoryTypes) => category.name === item.category
        );

        // conditions
        const isInTheBox = item.reviews.box < 6;
        const isTimeToReview =
          daysSinceReviewed >= reviewBoxes[item.reviews.box];
        const reviewedAfterAnHour =
          item.reviews.box === 0 ? hoursSinceReviewed > 0 : true;
        return (
          reviewedAfterAnHour && category.status && isInTheBox && isTimeToReview
        );
      });
      return itemsToReview;
    }
  }
};
