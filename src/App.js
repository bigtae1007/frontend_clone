import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./elem/GlobalStyle";

//컴포넌트
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import SignUpForm from "./pages/SignUpForm";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup/select" element={<SignUp />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
