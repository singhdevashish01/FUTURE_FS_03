import coffee from "../assets/images/coffee.jpg";
import bakery from "../assets/images/bakery.jpg";
import breakfast from "../assets/images/breakfast.jpg";
import dessert from "../assets/images/dessert.jpg";

export const menuCategories = [
  "All",
  "Coffee",
  "Beverages",
  "Breakfast",
  "Bakery",
  "Desserts",
];

export const menuItems = [
  {
    id: 1,
    name: "Classic Cappuccino",
    category: "Coffee",
    description:
      "Rich espresso finished with steamed milk and a smooth layer of foam.",
    price: 180,
    badge: "Popular",
    image: coffee,
    vegetarian: true,
  },
  {
    id: 2,
    name: "Hazelnut Latte",
    category: "Coffee",
    description:
      "Balanced espresso with steamed milk and a subtle hazelnut finish.",
    price: 220,
    badge: "Signature",
    image: coffee,
    vegetarian: true,
  },
  {
    id: 3,
    name: "Cold Coffee",
    category: "Beverages",
    description:
      "Chilled coffee blended with milk for a smooth and refreshing finish.",
    price: 210,
    badge: "Bestseller",
    image: coffee,
    vegetarian: true,
  },
  {
    id: 4,
    name: "Fresh Lime Cooler",
    category: "Beverages",
    description:
      "A refreshing lime-based cooler finished with mint and sparkling water.",
    price: 160,
    badge: "",
    image: breakfast,
    vegetarian: true,
  },
  {
    id: 5,
    name: "Avocado Toast",
    category: "Breakfast",
    description:
      "Artisan toast topped with seasoned avocado and fresh herbs.",
    price: 260,
    badge: "Fresh",
    image: breakfast,
    vegetarian: true,
  },
  {
    id: 6,
    name: "Café Breakfast Plate",
    category: "Breakfast",
    description:
      "A complete breakfast plate with toast, grilled vegetables, and café sides.",
    price: 340,
    badge: "Complete Meal",
    image: breakfast,
    vegetarian: false,
  },
  {
    id: 7,
    name: "Butter Croissant",
    category: "Bakery",
    description:
      "A flaky layered croissant with a rich buttery finish.",
    price: 140,
    badge: "Fresh Daily",
    image: bakery,
    vegetarian: true,
  },
  {
    id: 8,
    name: "Chocolate Muffin",
    category: "Bakery",
    description:
      "Soft chocolate muffin prepared with cocoa and chocolate pieces.",
    price: 150,
    badge: "",
    image: bakery,
    vegetarian: true,
  },
  {
    id: 9,
    name: "Blueberry Cheesecake",
    category: "Desserts",
    description:
      "Creamy cheesecake finished with a bright blueberry topping.",
    price: 260,
    badge: "Chef's Pick",
    image: dessert,
    vegetarian: true,
  },
  {
    id: 10,
    name: "Chocolate Brownie",
    category: "Desserts",
    description:
      "A rich chocolate brownie with a soft and fudgy centre.",
    price: 190,
    badge: "",
    image: dessert,
    vegetarian: true,
  },
];