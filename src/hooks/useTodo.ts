import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { createTodo, deleteTodo, updateTodo } from "../redux/modules/todoSlice";

export const useTodo = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootState) => state.todoSlice);
  const todoDoneList = todoList.filter((todo) => todo.isDone);
  const todoWorkingList = todoList.filter((todo) => !todo.isDone);

  const onCreateTodo = (title: string, content: string) => {
    dispatch(createTodo({ title, content }));
  };

  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const onUpdateTodo = (id: string) => {
    dispatch(updateTodo(id));
  };

  return { todoDoneList, todoWorkingList, onCreateTodo, onDeleteTodo, onUpdateTodo };
};
