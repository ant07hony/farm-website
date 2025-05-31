
// utils/tempData.js

// temp data for users and products
const users = [
  {
    _id: "1",
    username: "Bart",
    password: "admin123",
    role: 'admin'
  },
  {
    _id: "2",
    username: "John",
    password: "user123",
    role: "user"
  },
];

const products = [
    {
      _id: "1",
      name: "Organic Apples",
      price: 5.99,
      description: "Fresh organic apples grown on our farm.",
      image: "/images/apples.jpg",
    },
    {
      _id: "2",
      name: "Farm Fresh Eggs",
      price: 4.99,
      description: "Free-range eggs from happy chickens.",
      image: "/images/eggs.jpg",
    },
    {
      _id: "3",
      name: "Raw Honey",
      price: 9.99,
      description: "100% pure honey from local bees.",
      image: "/images/honey.jpg",
    }
  ];

  export default {
    users,
    products,
  }