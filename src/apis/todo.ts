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
export const createTodo = async (todo: TodoType) => {
  try {
    const res = await todoURL.post("/todos", todo);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodoList = async (): Promise<TodoType[] | void> => {
  try {
    const res = await todoURL.get("/todos");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  try {
    const res = await todoURL.patch(`/todos/${id}`, { isDone: isDone });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const res = await todoURL.delete(`/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
