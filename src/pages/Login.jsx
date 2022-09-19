import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/auth/auth.actions";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginCreds.email && loginCreds.password) {
      dispatch(login(loginCreds));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <div>
      Login Form.
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Email ID"
          value={loginCreds.email}
          onChange={handleChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={loginCreds.password}
          onChange={handleChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
