import { useState } from "react";

import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { User } from "../services/authFacade";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState<User>({ username: "", password: "" });

  const navigate = useNavigate();
  const auth = useAuth();

  const [, setErr] = useState(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObject = Object.fromEntries(formData) as {
      username: string;
      password: string;
    };

    setErr(null);

    auth
      .signIn(formDataObject)
      .then(() => {
        navigate("/movie-form");
      })
      .catch((err) => {
        setErr(err);
        console.error(err);
      });
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="login-form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
