export interface TodoInput {
  name: string;
  age: number;
}

export interface Todo extends TodoInput {
  id: number;
}
