import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoAPI } from "apis/todo";
import { TodoType } from "types";

export const useTodoQuery = () => {
  const queryClient = useQueryClient();
  const query = useQuery<TodoType[]>({ queryKey: ["todoList"], queryFn: todoAPI.getTodoList });

  const createTodoMutation = useMutation({
    mutationFn: todoAPI.createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoList"] });
    }
  });

  const deleteTodoMutation = useMutation({
    mutationFn: todoAPI.deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoList"] });
    }
  });

  const updateTodoMutation = useMutation({
    mutationFn: todoAPI.updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoList"] });
    }
  });

  return { query, createTodoMutation, deleteTodoMutation, updateTodoMutation };
};
