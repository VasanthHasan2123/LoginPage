import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp.some((digit) => digit === "")) {
      alert("Please enter complete OTP");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/create-password");
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
        <form className="auth-card" onSubmit={verifyOtp}>
          <h2>Verify OTP</h2>

          <div className="otp-box">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="otp-input"
              />
            ))}
          </div>

          <button type="submit">Verify</button>
        </form>
      </div>
    </>
  );
}

export default Otp;
