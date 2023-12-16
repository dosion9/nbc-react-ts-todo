import styled from "styled-components";
import Todo from "./Todo";

type PropsType = {
  todoList: TodoType[];
};

function TodoList({ todoList }: PropsType) {
  return (
    <STodoTypeList>
      {todoList.map((n) => (
        <Todo data={n} key={n.id} />
      ))}
    </STodoTypeList>
  );
}

const STodoTypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.base};
`;

export default TodoList;
