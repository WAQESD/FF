import "./App.css";
import Container from "./Component/Container";
import Answer from "./Component/Answer";
import { useState } from "react";

let questions = [];
const URL =
  "http://ec2-13-125-219-111.ap-northeast-2.compute.amazonaws.com:8080";
//const URl = "http://localhost:8080";

const answer = [3, 2, 3, 3, 3, 3, 3, 1, 3, 1, 3, 3, 1];

function App() {
  const [content, setContent] = useState(undefined);

  const init = () => {
    fetch(URL + "/questions", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          if (a.qid > b.qid) return 1;
          else if (a.qid === b.qid) return 0;
          else return -1;
        });
        setContent(<Answer answer={answer} questions={data}></Answer>);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (!content) init();

  return (
    <div className="App">
      <Container>{content}</Container>
    </div>
  );
}

export default App;
