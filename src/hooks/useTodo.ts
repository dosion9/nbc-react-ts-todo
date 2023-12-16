import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { createTodo, deleteTodo, setTodoList, updateTodo } from "../redux/modules/todoSlice";
import { todoAPI } from "apis/todo";
import { v4 as uuidv4 } from "uuid";

export const useTodo = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootState) => state.todoSlice);
  const todoDoneList = todoList.filter((todo) => todo.isDone);
  const todoWorkingList = todoList.filter((todo) => !todo.isDone);

  const getTodoList = async () => {
    const res = await todoAPI.getTodoList();
    res && dispatch(setTodoList(res));
  };

  const onCreateTodo = async (title: string, content: string) => {
    const newTodo: TodoType = {
      title,
      content,
      id: uuidv4(),
      isDone: false
    };

    const res = await todoAPI.createTodo(newTodo);
    res && dispatch(createTodo(res));
  };

  const onDeleteTodo = async (id: string) => {
    const res = await todoAPI.deleteTodo(id);
    res && dispatch(deleteTodo(res));
  };

  const onUpdateTodo = async (todo: Pick<TodoType, "id" | "isDone">) => {
    todo = { ...todo, isDone: !todo.isDone };
    const res = await todoAPI.updateTodo(todo);
    res && dispatch(updateTodo(todo));
  };

  return { todoDoneList, todoWorkingList, getTodoList, onCreateTodo, onDeleteTodo, onUpdateTodo };
};
