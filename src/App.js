import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./elem/GlobalStyle";
import Main from "./pages/Main";

//컴포넌트
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import SignUpForm from "./pages/SignUpForm";
import FundDetail from "./pages/FundDetail";
import Header from "./components/Headers/Header";
import Funding from "./pages/Funding";
import Cummunity from "./pages/Cummunity";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup/intro" element={<SignUp />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/fund/detail/story/:id" element={<FundDetail />} />
        <Route path="/fund/funding/:id" element={<Funding />} />
        <Route path="/fund/detail/:id/cummunity" element={<Cummunity />} />
      </Routes>
    </div>
  );
}

export default App;
