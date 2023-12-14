import Button from "components/common/Button";
import styled from "styled-components";

interface TodoData {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

function Todo({ data }: { data: TodoData }) {
  const { id, title, content, isDone }: TodoData = data;
  return (
    <StWrap>
      <h3 className="todo__title">{title}</h3>
      <p className="todo__content">{content}</p>
      <div className="todo__button-wrap">
        {!isDone ? (
          <Button color="success" onClick={() => console.log(1)}>
            완료
          </Button>
        ) : (
          <Button color="warning" onClick={() => console.log(1)}>
            취소
          </Button>
        )}

        <Button color="danger" onClick={() => console.log(1)}>
          삭제하기
        </Button>
      </div>
    </StWrap>
  );
}

const StWrap = styled.div`
  width: 100%;
  max-width: 17rem;
  border: 3px solid ${({ theme }) => theme.color.base};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.base};
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
  flex-direction: column;

  & > .todo__title {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & > .todo__content {
    min-height: 5rem;
    display: -webkit-box;
    -webkit-line-clamp: 5; //원하는 라인수
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > .todo__button-wrap {
    display: flex;
    gap: ${({ theme }) => theme.spacing.base};
    justify-content: center;
  }
`;

export default Todo;
