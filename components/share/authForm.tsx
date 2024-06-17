"use client";

import supabase from "@/supabase/supabaseClient";
import { useEffect, useRef, useState } from "react";

export default function AuthForm() {
  const [login, setLogin] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginFunction = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("djdj");
  };

  const signupFunction = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current)
      supabase.auth.signUp({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
  };

  const inputResetFunction = () => {
    if (emailRef.current) {
      emailRef.current.value = "";
    }
    if (passwordRef.current) {
      passwordRef.current.value = "";
    }
  };

  useEffect(() => {
    inputResetFunction();
  }, [login]);

  return (
    <form
      className="flex flex-col gap-px bg-white rounded-lg p-8 shadow-lg relative"
      onSubmit={login ? loginFunction : signupFunction}
    >
      <input
        className="flex p-2 border border-black rounded-lg"
        placeholder="id"
        ref={emailRef}
      />
      <input
        className="flex p-2 border border-black rounded-lg"
        placeholder="password"
        ref={passwordRef}
      />
      <button type="submit" className="rounded-full p-4 bg-slate-500">
        {login ? "로그인" : "회원가입"}
      </button>
      <div
        onClick={(e) => {
          setLogin(!login);
          if (login) {
            loginFunction(e);
          } else {
            signupFunction(e);
          }
        }}
      >
        {login ? "회원가입" : "로그인"}
      </div>
    </form>
  );
}
