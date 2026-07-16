import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        className="icon github"
        onClick={() =>
          setWindowsState((state) => ({
            ...state,
            github: true,
          }))
        }
      >
        <img src="/doc-icons/github.svg" alt="GitHub" />
      </div>

      <div
        className="icon note"
        onClick={() =>
          setWindowsState((state) => ({
            ...state,
            note: true,
          }))
        }
      >
        <img src="/doc-icons/note.svg" alt="Notes" />
      </div>

      <div
        className="icon pdf"
        onClick={() =>
          setWindowsState((state) => ({
            ...state,
            resume: true,
          }))
        }
      >
        <img src="/doc-icons/pdf.svg" alt="Resume" />
      </div>

      <div 
      onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r","_blank")}}
      className="icon calender">
        <img src="/doc-icons/calender.svg" alt="Calendar" />
      </div>

      <div
        className="icon spotify"
        onClick={() =>
          setWindowsState((state) => ({
            ...state,
            spotify: true,
          }))
        }
      >
        <img src="/doc-icons/spotify.svg" alt="Spotify" />
      </div>

      <div 
      onClick={()=>{window.open("mailto:vaibhvee@example.com","_blank")}}
      className="icon mail">
        <img src="/doc-icons/mail.svg" alt="Mail" />
      </div>

      <div 
      onClick={()=>{window.open("https://www.linkedin.com/in/vaibhvee-prakash-901ba7289/","_blank")}}
      className="icon link">
        <img src="/doc-icons/link.svg" alt="Link" />
      </div>

      <div
        className="icon cli"
        onClick={() =>
          setWindowsState((state) => ({
            ...state,
            cli: true,
          }))
        }
      >
        <img src="/doc-icons/cli.svg" alt="CLI" />
      </div>
    </footer>
  );
};

export default Dock;