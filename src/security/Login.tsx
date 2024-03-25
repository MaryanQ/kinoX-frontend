import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { User } from "../services/authFacade";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState<User>({ username: "", password: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const [, setErr] = useState(null);

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObject = Object.fromEntries(formData) as {
      username: string;
      password: string;
    };

    setErr(null); // Clear any previous errors
    // console.log(err); // Remove this line, as it logs the previous state
    // alert("Login: " + JSON.stringify(formDataObject)); // Remove this line, not necessary for production

    auth
      .signIn(formDataObject)
      .then(() => {
        navigate(from, { replace: true }); // Redirect after successful login
      })
      .catch((err) => {
        setErr(err); // Set the error state for displaying to the user
        console.error(err); // Log the error
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
            id="username" // Add id attribute
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
