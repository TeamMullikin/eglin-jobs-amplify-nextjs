"use client";
import { useState } from 'react'
import React from "react";
import DecodeEmail from "./dataProtectDecoder";


const SubmitResume = () => {
  const [mailerComplete, setMailerComplete] = useState("")
  return (
<button onClick={() => setMailerComplete(DecodeEmail)}
    className="p-2 bg-orange-700 text-white rounded-md">
    <a href = {mailerComplete} >
        Email us your Resume<br />
      </a>
      </button>
  );
};

export default SubmitResume;
