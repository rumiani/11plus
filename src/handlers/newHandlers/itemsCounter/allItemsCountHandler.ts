import { db } from "../../../services/db";
import itemsCountHandler from "./itemsCountHandler";

export const allItemsCountHandler = (categoryId: string) => {
  db.items
    .toArray()
    .then((items) => {
      return itemsCountHandler(items);
    })
    .catch(() => {
      console.log(Error);
    });
};
