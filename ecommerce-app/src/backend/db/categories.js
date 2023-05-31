import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or ",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both ",
  },
];
