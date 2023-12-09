import { useLogStore } from "@/hooks/useLogStore";
import { useRouter } from "next/navigation";
import React, { FormEvent, FunctionComponent, useState } from "react";

const LoginComponent: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsLogin } = useLogStore();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    setIsLogin();
    setUsername("");
    setPassword("");
    router.push("/");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 w-1/4 p-10 h-[300px]"
      >
        <div className="mb-4 p-2">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="p-2">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-black text-white mt-2 px-4 py-2"
        />
      </form>
    </div>
  );
};

export default LoginComponent;
