import Modal from "components/Modal/Modal";
import TodoForm from "components/Todo/TodoForm";
import TodoList from "components/Todo/TodoList";
import Section from "components/common/Section";
import { useTodo } from "hooks";
import { useEffect } from "react";

function App() {
  const { todoDoneList, todoWorkingList, getTodoList } = useTodo();

  useEffect(() => {
    getTodoList();
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
