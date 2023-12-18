import { v4 as uuidv4 } from "uuid";
import { TodoType } from "types";
import { useTodoQuery } from "./useTodoQuery";

export const useTodo = () => {
  const { query, createTodoMutation, deleteTodoMutation, updateTodoMutation } = useTodoQuery();
  const { data: todoList, isLoading } = query;

  const todoDoneList: TodoType[] = todoList ? todoList.filter((todo: TodoType) => todo.isDone) : [];
  const todoWorkingList: TodoType[] = todoList ? todoList!.filter((todo: TodoType) => !todo.isDone) : [];

  const onCreateTodo = ({ title, content }: Pick<TodoType, "title" | "content">) => {
    const newTodo: TodoType = {
      title,
      content,
      id: uuidv4(),
      isDone: false
    };
    createTodoMutation.mutate(newTodo);
  };

  const onDeleteTodo = (todo: Pick<TodoType, "id">) => {
    deleteTodoMutation.mutate(todo);
  };

  const onUpdateTodo = (todo: Pick<TodoType, "id" | "isDone">) => {
    todo = { ...todo, isDone: !todo.isDone };
    updateTodoMutation.mutate(todo);
  };

  return {
    todoDoneList,
    todoWorkingList,
    isLoading,
    onCreateTodo,
    onDeleteTodo,
    onUpdateTodo
  };
};
