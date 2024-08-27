
import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Newton",
      email: "newton525@gmail.com",
      password: bcrypt.hashSync("1234"),
      isAdmin: true,
    },
    {
      name: "Nkosi",
      email: "sirnewtonnnn@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: "1",
      name: "Laptop Huawei ",
      image: "/images/laptop.png",

      price: 27450,
      brand: "HUAWEI",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "electronic",
      rating: 5,
      isFeatured: true,
      numReviews: 34,
      countInStock: 30,
    },
    {
      id: "2",
      name: "Laker",
      image: "/images/laker_short.png",

      price: 27450,
      brand: "LAKER",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "clothes",
      rating: 3,
      isFeatured: false,
      numReviews: 7,
      countInStock: 5,
    },
    {
      id: "3",
      name: "Jordan",
      image: "/images/Jordan.png",

      price: 650,
      brand: "JORDAN",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "clothes",
      rating: 5,
      isFeatured: true,
      numReviews: 34,
      countInStock: 30,
    },
    {
      id: "5",
      name: "watch pro 2",
      image: "/images/watch2.png",

      price: 600,
      brand: "SONY",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "electronic",
      rating: 2,
      isFeatured: false,
      numReviews: 34,
      countInStock: 30,
    },
    {
      id: "6",
      name: "Airpods pro",
      image: "/images/airpods.png",

      price: 27450,
      brand: "SONY",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "electronic",
      rating: 2,
      isFeatured: true,
      numReviews: 34,
      countInStock: 30,
    },
    {
      id: "7",
      name: "Bulls Hoodie",
      image: "/images/bulls_hoodie.png",

      price: 340,
      brand: "BULLS",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "clothes",
      rating: 3,
      isFeatured: false,
      numReviews: 5,
      countInStock: 6,
    },
    {
      id: "8",
      name: "Sony Headphones",
      image: "/images/headphone.png",

      price: 780,
      brand: "SONY",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "electronic",
      rating: 4,
      isFeatured: false,
      numReviews: 29,
      countInStock: 3,
    },
    {
      id: "9",
      name: "Iphone 13 pro ",
      image: "/images/iphone.png",

      price: 37400,
      brand: "APPLE",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "Phones",
      rating: 2,
      isFeatured: true,
      numReviews: 34,
      countInStock: 30,
    },
    {
      id: "10",
      name: "Sony Headphones pro",
      image: "/images/headphone2.png",

      price: 1200,
      brand: "SONY",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "electronic",
      rating: 4,
      isFeatured: true,
      numReviews: 29,
      countInStock: 3,
    },
    {
      id: "11",
      name: "Airforce",
      image: "/images/airforce.png",

      price: 2240,
      brand: "NIKE",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "shoes",
      rating: 4,
      isFeatured: true,
      numReviews: 5,
      countInStock: 6,
    },
    {
      id: "12",
      name: "Angeles Jacket",
      image: "/images/Angeles_Jacket.png",

      price: 540,
      brand: "BULLS",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "clothes",
      rating: 3,
      isFeatured: false,
      numReviews: 5,
      countInStock: 6,
    },
    {
      id: "13",
      name: "Airforce 2",
      image: "/images/airforce2.png",

      price: 2340,
      brand: "NIKE",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "shoes",
      rating: 4,
      isFeatured: false,
      numReviews: 5,
      countInStock: 6,
    },
    {
      id: "13",
      name: "Brook Short",
      image: "/images/brook_short.png",

      price: 238,
      brand: "BULLS",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed labore nulla aspernatur officiis aliquid nisi consectetur, laboriosam quam vel sint dolorum, maxime totam et maiores. Asperiores ipsa impedit dolorum.",
      catergory: "clothes",
      rating: 3,
      isFeatured: false,
      numReviews: 5,
      countInStock: 6,
    },
  ],
};

export default data;
