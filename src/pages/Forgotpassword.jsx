import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendOtp = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/otp");
    }, 1500);
  };

  return (
    <>
      {loading && <div className="page-loader"><div className="big-spinner" /></div>}

      <div className="auth-container">
        <form className="auth-card" onSubmit={sendOtp}>
          <h2>Forgot Password</h2>
          <br></br>
          <input placeholder="Enter your email" />
          <button>Send OTP</button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
