import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Iso Gayor - Whey Protein Isolate 1kg",
    image: "https://www.gayoressentials.com/cdn/shop/products/Iso-Gayor-1kg-1.webp?v=1680868531",
    price: "3,100",
    categoryName: "Health Supplements",
    rating: "4.3"
  },
  {
    _id: uuid(),
    title: "Optimum Nutrition - Vegetarian 2kg",
    image: "https://m.media-amazon.com/images/I/61WD2RzBtBL._SL1200_.jpg",
    price: "4,539",
    categoryName: "Health Supplements",
    rating: "4.7"
  },
  {
    _id: uuid(),
    title: "MuscleBlaze 200mg Caffeine",
    image: "https://m.media-amazon.com/images/I/614FyolWMEL._SL1500_.jpg",
    price: "659",
    categoryName: "Health Supplements",
    rating: "3.9"
  },
  {
    _id: uuid(),
    title: "Dumbbells - 20 Kg Adjustable",
    image: "https://m.media-amazon.com/images/I/51aHGGMCgnL.jpg",
    price: "749",
    categoryName: "Fitness Equipment",
    rating: "4.5"
  },
  {
    _id: uuid(),
    title: "Atemi Sports Resistance Band",
    image: "https://m.media-amazon.com/images/I/71RgcGWBJ7L._SL1500_.jpg",
    price: "524",
    categoryName: "Fitness Equipment",
    rating: "4.1"
  },
  {
    _id: uuid(),
    title: "Strauss Steel Push Up Bar",
    image: "https://m.media-amazon.com/images/I/51hbhfxdthL._SL1500_.jpg",
    price: "725",
    categoryName: "Fitness Equipment",
    rating: "3.7"
  },
  {
    _id: uuid(),
    title: "Adidas Mens - Running Shoes",
    image: "https://m.media-amazon.com/images/I/71cotkr8DhL._UL1500_.jpg",
    price: "1,499",
    categoryName: "Fitness Gear",
    rating: "4.0"
  },
  {
    _id: uuid(),
    title: "Puma Womens - Running Shoes",
    image: "https://m.media-amazon.com/images/I/81WFaRml3XL._UX575_.jpg",
    price: "1,999",
    categoryName: "Fitness Gear",
    rating: "4.0"
  },
  {
    _id: uuid(),
    title: "Mens 2 Pack - Running Gym Sports",
    image: "https://m.media-amazon.com/images/I/31ESWFjUO9L.jpg",
    price: "720",
    categoryName: "Fitness Gear",
    rating: "4.0"
  },
  {
    _id: uuid(),
    title: "Women's Yoga Shorts",
    image: "https://m.media-amazon.com/images/I/51Bx8cs9+gL._UY606_.jpg",
    price: "500",
    categoryName: "Fitness Gear",
    rating: "3.8"
  },
];
