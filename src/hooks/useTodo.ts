import { useState } from "react";
import { TodoType } from "types";
import { v4 as uuidv4 } from "uuid";

export const useTodo = () => {
  const [todoList, seTodoTypeList] = useState<TodoType[]>([]);

  const todoDoneList = todoList.filter((todo) => todo.isDone);
  const todoWorkingList = todoList.filter((todo) => !todo.isDone);

  const createTodo = (title: string, content: string) => {
    const newTodo: TodoType = {
      title,
      content,
      id: uuidv4(),
      isDone: false
    };
    seTodoTypeList((prev) => [...prev, newTodo]);
  };

  const deleteTodo = ({ id }: Pick<TodoType, "id">) => {
    seTodoTypeList((prev) => [...prev.filter((n) => n.id !== id)]);
  };

  const updateTodo = ({ id }: Pick<TodoType, "id">) => {
    seTodoTypeList((prev) => [...prev.map((n) => (n.id === id ? { ...n, isDone: !n.isDone } : n))]);
  };

  return { todoDoneList, todoWorkingList, createTodo, deleteTodo, updateTodo };
};
