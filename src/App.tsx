import { getTodoList } from "apis/todo";
import Modal from "components/Modal/Modal";
import TodoForm from "components/Todo/TodoForm";
import TodoList from "components/Todo/TodoList";
import Section from "components/common/Section";
import { useTodo } from "hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodoList } from "./redux/modules/todoSlice";

function App() {
  const dispatch = useDispatch();
  const { todoDoneList, todoWorkingList } = useTodo();

  useEffect(() => {
    const getTodo = async () => {
      const res = await getTodoList();
      res && dispatch(setTodoList(res));
    };

    getTodo();
  }, []);
  return (
    <>
      <Modal />
      <Section title={"Todo 작성하기"}>
        <TodoForm />
      </Section>
      <Section title={"working"}>
        <TodoList todoList={todoWorkingList} />
      </Section>
      <Section title={"Done"}>
        <TodoList todoList={todoDoneList} />
      </Section>
    </>
  );
}

export default App;
