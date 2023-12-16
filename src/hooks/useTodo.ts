import { __createTodo, __deleteTodo, __getTodoList, __updateTodo } from "../redux/modules/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { TodoType } from "types";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoSlice);
  const todoDoneList = todoList.filter((todo) => todo.isDone);
  const todoWorkingList = todoList.filter((todo) => !todo.isDone);

  const getTodoList = () => {
    dispatch(__getTodoList());
  };

  const onCreateTodo = ({ title, content }: Pick<TodoType, "title" | "content">) => {
    const newTodo: TodoType = {
      title,
      content,
      id: uuidv4(),
      isDone: false
    };
    dispatch(__createTodo(newTodo));
  };

  const onDeleteTodo = (todo: Pick<TodoType, "id">) => {
    dispatch(__deleteTodo(todo));
  };

  const onUpdateTodo = (todo: Pick<TodoType, "id" | "isDone">) => {
    todo = { ...todo, isDone: !todo.isDone };
    dispatch(__updateTodo(todo));
  };

  return { todoDoneList, todoWorkingList, getTodoList, onCreateTodo, onDeleteTodo, onUpdateTodo };
};
