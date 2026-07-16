import "./LoginScreen.scss";

export default function LoginScreen({ onLogin }) {
  return (
    <div className="login-screen">
      <div className="login-box">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-pic"
        />

        <h2>Vaibhvee Prakash</h2>

        <button onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
}