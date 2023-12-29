import React, { useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { LOGIN_REQUEST } from "../../redux/actiontypes/actionTypes";

function Llogin() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const requestData = { email, password };
    dispatch({ type: LOGIN_REQUEST, payload: requestData });
  };

  const data:any = useAppSelector((state:RootState) => state);
  console.log(data);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <h2>Login</h2>
      <form>
        <label>
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Llogin;
