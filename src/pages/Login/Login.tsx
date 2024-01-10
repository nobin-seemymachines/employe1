import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { loginRequest } from "../../redux/actions/actions";
import Home from "../Home";
import { FormData } from "../../types/types";
import { EMAIL_REGEX } from "../../constants";
import "./Login.css";

function Login() {

  const [formData, setFormData] = useState<FormData>({
    userData: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      password: "",
    },
  });

  const user = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.token) {
      localStorage.setItem("token", user.token);
      navigate("/dashboard");
    }
  }, [user]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      userData: {
        ...prevFormData.userData,
        [name]: value,
      },
      errors: {
        ...prevFormData.errors,
        [name]: "",
      },
    }));
  };

  const validateData = () => {
    let isValid = true;
    if (
      !formData.userData.email ||
      !EMAIL_REGEX.test(formData.userData.email)
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        errors: {
          ...prevFormData.errors,
          email: "Invalid Email",
        },
      }));
      isValid = false;
    }

    if (!formData.userData.password) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        errors: {
          ...prevFormData.errors,
          password: "Password must be filled",
        },
      }));
      isValid = false;
    }
    return isValid;
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateData();
    if (isValid) {
      dispatch(loginRequest(formData.userData));
    }
  };

  return (
    <div className="container">
      <Home />
      <div className="login-page">
        <form onSubmit={onFormSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              name="email"
              value={formData.userData.email}
              onChange={handleInputChange}
            />
            <p className="error-message">{formData.errors.email}</p>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.userData.password}
              onChange={handleInputChange}
            />
            <p className="error-message">{formData.errors.password}</p>
          </div>
          <button type="submit">Login</button>
          <p className="error-message">{user.error}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
