import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function CreatePassword() {
  const [loading, setLoading] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const resetPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Password Updated ");
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
        <form className="auth-card" onSubmit={resetPassword}>
          <h2>Create New Password</h2>
          <br></br>

          <div className="password-field">
            <input
              type={showNew ? "text" : "password"}
              placeholder="New Password"
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="password-field">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button type="submit">Update Password</button>
        </form>
      </div>
    </>
  );
}

export default CreatePassword;
