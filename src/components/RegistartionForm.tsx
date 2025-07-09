import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const RegisterForm = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    fullName: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required.";
        if (!isValidEmail(value)) return "Invalid email format.";
        break;
      case "userName":
        if (!value) return "Username is required.";
        if (value.length > 12) return "Max 12 characters allowed.";
        break;
      case "password":
        if (!value) return "Password is required.";
        if (value.length < 8) return "Password must be at least 8 characters.";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, userName, password } = formData;

    const newErrors = {
      email: validateField("email", email),
      userName: validateField("userName", userName),
      password: validateField("password", password),
    };

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://trailer-spot.onrender.com/api/v1/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Registration successful!");
        setFormData({ email: "", userName: "", password: "", fullName: "" });
        setErrors({ email: "", userName: "", password: "" });
        localStorage.setItem("isRegistered", "true");
        handleSignIn()
      } else {
        toast.error(result?.message || "Registration failed.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    formData.email &&
    isValidEmail(formData.email) &&
    formData.userName &&
    formData.userName.length <= 12 &&
    formData.password &&
    formData.password.length >= 8;

  const ErrorMsg = ({ message }) =>
    message ? (
      <p className="text-red-400 text-sm mt-1 transition duration-300">
        {message}
      </p>
    ) : null;

    function handleSignIn() {
    // Navigate to the login page       
    
    navigate("/login");}

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-opacity-80 bg-black text-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Sign Up for TrailerSpot
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-800 text-white border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <ErrorMsg message={errors.email} />
          </div>

          <div>
            <input
              type="text"
              name="userName"
              placeholder="Username (max 12 chars) *"
              value={formData.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-800 text-white border ${
                errors.userName ? "border-red-500" : "border-gray-600"
              } px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <ErrorMsg message={errors.userName} />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-800 text-white border ${
                errors.password ? "border-red-500" : "border-gray-600"
              } px-4 py-3 pr-20 rounded focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-red-400 hover:text-red-500 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            <ErrorMsg message={errors.password} />
          </div>

          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name (optional)"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-600 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded font-semibold text-white text-lg flex justify-center items-center transition ${
              isFormValid && !loading
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <svg
                className="w-5 h-5 animate-spin mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <span onClick={()=>handleSignIn()} className="text-white underline cursor-pointer">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
