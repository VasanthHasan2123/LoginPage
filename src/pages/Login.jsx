import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login Successful ✅");
    }, 1500);
  };

  return (
    <>
      {loading && (
        <div className="page-loader">
          <div className="big-spinner" />
        </div>
      )}

      <div className="auth-container">
        <form className="auth-card" onSubmit={handleLogin}>
          <h2>Welcome Back</h2>

          {error && <div className="toast-error">{error}</div>}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password with Eye Icon */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button type="submit">Login</button>

          <p
            className="link"
            onClick={() => navigate("/forgot-password")}
            style={{ marginTop: "10px" }}
          >
            Forgot Password?
          </p>

          <p className="footer-text">
            Don’t have an account?{" "}
            <span className="link" onClick={() => navigate("/signup")}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
