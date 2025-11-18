# Blog

--

1. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof দিয়ে আমরা একটি object type-এর সব key-এর union type নিতে পারি।

উদাহরণ:
type Person = {
  name: string;
  age: number;
};
type PersonKeys = keyof Person;
   
2. Provide an example of using union and intersection types in TypeScript.

Union (|) — variable multiple types হতে পারে।
Intersection (&) — variable সব type-এর combination হতে হবে।

উদাহরণ:

// Union
let value: string | number;
value = "hello";
value = 42;

// Intersection
type A = { name: string };
type B = { age: number };
type C = A & B;
