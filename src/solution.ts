// Problem-1
type FormatValue = string | number | boolean;
const formatValue = (value: FormatValue) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

// Problem-2
type GetLength = string | number[];
const getLength = (value: GetLength) => {
  return value.length;
};

// Problem-3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails(): string {
    return `'Name:${this.name},Age:${this.age}'`;
  }
}

// Problem-4
type FilterByRating = {
  title: string;
  rating: number;
}[];

const filterByRating = (items: FilterByRating) => {
  return items;
};
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

// Problem-5
const filterActiveUsers = (items: []) => {};

// Problem-6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

// Problem-7
const getUniqueValues = (value: []) => {};

// Problem-8
const calculateTotalPrice = (value: []) => {};
