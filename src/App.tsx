import Todo from "components/Todo/Todo";
import Section from "components/common/Section";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const data = {
  //   id: uuidv4(),
  //   title: "testtest testtesttestt esttestt esttesttest",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis tempore! Dolorum officiis unde ab, enim provident corrupti! Itaque eaque labore a sunt, consequatur aliquam ad ipsam impedit praesentium aspernatur! ",
  //   isDone: false
  // };
  return (
    <>
      <Section title={"타이틀"}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>{/* <Todo data={data} /> */}</div>
      </Section>
    </>
  );
}

export default App;
