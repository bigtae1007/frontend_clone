import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./elem/GlobalStyle";
import Main from "./pages/Main";

//컴포넌트
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import SignUpForm from "./pages/SignUpForm";
import FundDetail from "./pages/FundDetail";
import Funding from "./pages/Funding";
import Cummunity from "./pages/Cummunity";
import KakaoRedirectPage from "./pages/KakaoRedirectPage";
import { useSelector } from "react-redux";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const loadingDetail = useSelector((state) => state.funding.loading);
  const errorDetail = useSelector((state) => state.funding.error);
  if (errorDetail) {
    alert(" 에러가 발생했습니다. 다시 한번 시도해주세요");
  }
  return (
    <div className="App">
      <GlobalStyle />
      {false ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup/intro" element={<SignUp />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/fund/detail/story/:id" element={<FundDetail />} />
          <Route path="/fund/funding/:id" element={<Funding />} />
          <Route path="/fund/detail/:id/cummunity" element={<Cummunity />} />
          <Route path="/user/kakao/callback" element={<KakaoRedirectPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
