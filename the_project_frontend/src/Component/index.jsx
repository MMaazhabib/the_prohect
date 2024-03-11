import { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";

function Index() {
  const [isLogin, setIsLogin] = useState(true);

  const updateState = (newState) => {
    setIsLogin(newState);
  };
  return (
    <>
      <div className=" w-screen h-screen">
        {isLogin && <Login setLogin={updateState} />}
        {!isLogin && <SignUp setLogin={updateState} />}
      </div>
    </>
  );
}
export default Index;
