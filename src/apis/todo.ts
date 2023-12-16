import { todoURL } from "apis";

// ========== INTERCEPTORS ==========
todoURL.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

todoURL.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// ========== CRUD  ==========
const createTodo = async (todo: TodoType): Promise<TodoType | void> => {
  try {
    const res = await todoURL.post("/todos", todo);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getTodoList = async (): Promise<TodoType[] | void> => {
  try {
    const res = await todoURL.get("/todos");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const updateTodo = async (todo: Pick<TodoType, "id" | "isDone">): Promise<TodoType[] | void> => {
  try {
    const res = await todoURL.patch(`/todos/${todo.id}`, { isDone: todo.isDone });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteTodo = async (id: string): Promise<string | void> => {
  try {
    await todoURL.delete(`/todos/${id}`);
    return id;
  } catch (error) {
    console.error(error);
  }
};

export const todoAPI = {
  createTodo,
  getTodoList,
  updateTodo,
  deleteTodo
};
