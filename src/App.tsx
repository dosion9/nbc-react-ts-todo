import TodoForm from "components/Todo/TodoForm";
import TodoList from "components/Todo/TodoList";
import Section from "components/common/Section";
import { useModal, useTodo } from "hooks";

function App() {
  const { todoDoneList, todoWorkingList, createTodo, deleteTodo, updateTodo } = useTodo();
  const { modal, updateModal } = useModal();
  return (
    <>
      {modal}
      <Section title={"Todo 작성하기"}>
        <TodoForm createTodo={createTodo} />
      </Section>
      <Section title={"working"}>
        <TodoList
          todoList={todoWorkingList}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          updateModal={updateModal}
        />
      </Section>
      <Section title={"Done"}>
        <TodoList todoList={todoDoneList} deleteTodo={deleteTodo} updateTodo={updateTodo} updateModal={updateModal} />
      </Section>
    </>
  );
}

export default App;
