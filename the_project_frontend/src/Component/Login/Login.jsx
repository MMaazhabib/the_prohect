import PropTypes, { useState } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
Login.propTypes = {
  setLogin: PropTypes.isRequired,
};

function Login({ setLogin }) {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const login = async () => {
    console.log("username", username);
    console.log("password", password);

    const { data } = await axios.post("http://localhost:3000/user/logInUser", {
      username,
      password,
    });
    console.log(data);
    if (data.error) {
      return alert("invalid credential");
    }
    return alert("logIn success");
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-blue-200">
        <div className="w-1/3">
          <div className="w-full h-full bg-white bg-blue-300 drop-shadow-xl rounded-2xl flex justify-center  flex-col py-5 px-5">
            <h1 className="flex justify-center py-3">Login</h1>
            <div>
              <label className="my-2 text-xl w-full ">Username</label>
              <input
                className="px-2 text-sm py-4 my-2 w-full rounded-xl"
                type="text"
                id="username"
                placeholder="Username"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />

              <label className="text-xl w-full">Passward</label>
              <input
                className="px-2 text-sm py-4 my-2 w-full rounded-xl"
                type="password"
                id="passward"
                placeholder="********"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <p className="px-2 text-md py-2  w-full">
                {"Don't have an Account "}
                <span
                  className="hover:text-blue-800 hover:underline cursor-pointer"
                  onClick={() => {
                    setLogin(false);
                  }}
                >
                  Go to Signup
                </span>
              </p>
              <input
                className="px-2 text-sm py-4 my-2 w-full bg-blue-400 drop-shadow-xl rounded-xl"
                type="submit"
                id="submit"
                onClick={login}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
