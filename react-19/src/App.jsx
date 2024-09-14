import { Suspense } from "react";
import "./App.css";
import Posts from "./components/api-fetch";
import Login from "./components/login";
import Login19 from "./components/login-19";
import TodoList from "./components/todo";
import Container from "./components/container";

function App() {
  return (
    <>
      {/* <Login />
      <div
        style={{
          height: 1,
          width: "100vw",
          backgroundColor: "black",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      />
      <Login19 /> */}
      {/* <TodoList /> */}
      {/* <Suspense fallback={"Loading..."}>
        <Posts />
      </Suspense> */}
      <Container />
    </>
  );
}

export default App;
