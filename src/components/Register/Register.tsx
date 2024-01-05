import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Home from "../../pages/Home";
import "./Register.css";
import { userValidation } from "./validation";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/api";
import { Error_Msg, RegisterFormData } from "../../types/types";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { signupRequest } from "../../redux/actions/actions";

function Register() {
  const [userData, setUserData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Error_Msg>({
    email: "",
    password: "",
  });

  const [authError, setAuthError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.token) {
      localStorage.setItem("token", user.token);
      navigate("/dashboard");
    }
  });

  const Authenticate = () => {
    const { email, password } = userData;
    dispatch(signupRequest({ email, password }));
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = userValidation(userData, setErrors);
    if (valid) {
      Authenticate();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const buttonText = true;
  return (
    <div className="container">
      <Home />
      <div className="register-page">
        <form onSubmit={onFormSubmit}>
          <h2>Register</h2>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
            <span className="material-symbols-outlined close-btn">
              close_small
            </span>
            <p className="error-message">{errors.email}</p>
          </div>
          <div className="input-group">
            <div className="password-grp">
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={userData.password}
                />
                <span className="material-symbols-outlined close-btn">
                  close_small
                </span>
              </div>
              <div className="confirm-password">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={userData.confirmPassword}
                />
                <span className="material-symbols-outlined close-btn">
                  close_small
                </span>
              </div>
            </div>
            <p className="error-message">{errors.password}</p>
          </div>
          <button type="submit">Register</button>
          <p>{user.error}</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
