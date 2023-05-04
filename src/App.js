import { Route, Routes } from "react-router-dom";
import CopyKiller from "./component/CopyKiller";
import Logout from "./component/Logout";
import Mypage from "./component/Mypage";
import SignUp2 from "./component/SignUp2";
import Header from "./Header";
import Login from "./Login";
import ResultPage from "./component/ResultPage";
import Home from "./Home";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/resultpage' element={<ResultPage />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/copykiller' element={<CopyKiller />}></Route>
        {/* <Route path='/App.js' element={<Logout />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
