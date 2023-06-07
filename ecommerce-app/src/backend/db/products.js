import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "750",
    categoryName: "non-fiction",
    rating: "5"
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "1000",
    categoryName: "horror",
    rating: "3"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "500",
    categoryName: "fiction",
    rating: "2"
  },
  {
    _id: uuid(),
    title: "Harry Potter",
    author: "J.K.Rowling",
    price: "100",
    categoryName: "non-fiction",
    rating: "4.5"
  },
];
