import { useEffect } from "react";
import "./BootScreen.scss";

export default function BootScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="boot-screen">
      <img src="/apple-logo.png" alt="Apple" />
      <div className="loader"></div>
    </div>
  );
}