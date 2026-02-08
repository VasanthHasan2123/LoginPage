import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Account Created Successfully");
      navigate("/");
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
        <form className="auth-card" onSubmit={handleSignup}>
          <h2>Create Account</h2>

          {error && <div className="toast-error">{error}</div>}

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className="footer-text">
            Already have an account?{" "}
            <span className="link" onClick={() => navigate("/")}>
              Login
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
