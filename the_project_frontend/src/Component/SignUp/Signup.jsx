import PropTypes,{ useState } from "react";
import axios from "axios";

SignUp.propTypes = {
  setLogin: PropTypes.isRequired,
};

function SignUp({ setLogin }) {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState(null);
  const signup = async () => {
    console.log("username", username);
    console.log("password", password);
    console.log("password", role);

    const { data } = await axios.post("http://localhost:3000/user/createUser", {
      username,
      password,
      role,
    });
    console.log(data);
    if (data.error) {
      return alert("invalid credential");
    }
    return alert("SignUp success");
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-green-200">
        <div className="w-1/3 ">
          <div className="w-full h-full bg-green-300 drop-shadow-xl rounded-2xl flex justify-center  flex-col py-5 px-5">
            <h1 className="flex justify-center py-3">SignUp</h1>
            <div className="mx-3 ">
              <label className="px-2 text-xl w-full">Username</label>
              <input
                className="px-2 text-sm py-4  w-full rounded-xl"
                type="text"
                id="username"
                placeholder="Username"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />

              <label className="px-2 text-xl w-full">Passward</label>
              <input
                className="px-2 text-sm py-4 my-1 w-full rounded-xl"
                type="password"
                id="passward"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              
              <label className="px-2 text-xl w-full ">Role</label>
              <input
                className="px-2 text-sm py-4 my-1 w-full rounded-xl"
                type="Role"
                id="Role"
                placeholder="Role"
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              />
              <p className="px-2 text-md py-3 w-full">
                {"Already have an Account "}
                <span
                  className="hover:text-blue-800 hover:underline cursor-pointer"
                  onClick={() => {
                    setLogin(true);
                  }}
                >
                  Go to Login
                </span>
              </p>
              <input
                className="px-2 text-sm py-4 w-full bg-green-400 text-black drop-shadow-xl rounded-xl"
                type="submit"
                id="submit"
                onClick={signup}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
