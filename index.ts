interface Person {
  id: number,
  name: string,
}
interface Teacher extends Person {
  id: number,
  name: string,
  subjects: string[]
}

interface Student extends Person {
  // id: number,
  // name: string,
  age: number,
}

let teacher: Teacher = { id: 1, name: "a", subjects: ["Javascript", "Typescript"] }

let student = { id: 2, name: "aa", age: 19 }