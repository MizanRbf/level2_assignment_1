type PrimitiveValue = string | number | boolean;
const formatValue = (value: PrimitiveValue): PrimitiveValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type StringOrArray = string | any[];
const getLength = (value: StringOrArray): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
};

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

type Items = {
  title: string;
  rating: number;
}[];

const filterByRating = (items: Items): Items => {
  const highRatedItems = items.filter((item) => item.rating >= 4);
  return highRatedItems;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];
const filterActiveUsers = (users: User): User => {
  const filteredUsers = users.filter((user) => user.isActive);
  return filteredUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const bookInfo = `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available:${book.isAvailable ? "Yes" : "No"}`;
  console.log(bookInfo);
};

type ArrayItem = string | number;
type InputArray = ArrayItem[];

const getUniqueValues = (
  array1: InputArray,
  array2: InputArray
): InputArray => {
  const combinedArray = [] as ArrayItem[];
  const uniqueList = [] as ArrayItem[];

  for (let i = 0; i < array1.length; i++) {
    combinedArray[combinedArray.length] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combinedArray[combinedArray.length] = array2[i];
  }

  for (let i = 0; i < combinedArray.length; i++) {
    const value = combinedArray[i];
    let isDuplicate = false;

    for (let j = 0; j < uniqueList.length; j++) {
      if (uniqueList[j] === value) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueList[uniqueList.length] = value;
    }
  }

  return uniqueList;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}[];
const calculateTotalPrice = (products: Product): number => {
  const totalAmount = products.reduce((total, product) => {
    const discountedPrice = product.discount
      ? product.price - (product.price / 100) * product.discount
      : product.price;
    return total + discountedPrice * product.quantity;
  }, 0);
  return totalAmount;
};
