import { useState } from "react";
import BtnComp from "./button/button";
import CounterComp from "./counter/counter";
import LoginComp from "./login/login";
import UserDetail from "./routes/userDetail";
import Users from "./routes/users";
import UserPosts from "./routes/UserPosts";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const props = { counterText: "Counter is from props" };
  const [btnMessage, setMessage] = useState("");
  const onBtnClick = (message: string) => {
    setMessage(message);
    alert(message);
  };
  return (
    <>
      {/* <LoginComp isLoggedIn={true}></LoginComp>
      <BtnComp clickEvent={onBtnClick}>
        <p>Message from Parent</p>
      </BtnComp>
      <CounterComp
        counterText={"Counter is"}
        btnMessage={btnMessage}
      ></CounterComp>
      <CounterComp {...props} btnMessage={btnMessage}></CounterComp> */}
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserDetail />}>
              <Route path="posts" element={<UserPosts />} />
            </Route>
          </Route>
        </Routes>
        <nav>
          <Link to="/users">Users</Link>
        </nav>
      </BrowserRouter>
    </>
  );
}

export default App;
