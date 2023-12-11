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
    if (username === "codecamp" && password === "123") {
      setIsLogin();
      setUsername("");
      setPassword("");
      router.push("/");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-blue-400 to-purple-500 p-4"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold tracking-tight text-2xl text-white">
          Login
        </h3>
        <p className="text-sm text-white">
          Please enter your username and password to continue.
        </p>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="username"
            placeholder="Username"
            required
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="password"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="flex items-center p-6">
        <input
          type="submit"
          value="Submit"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-white text-blue-500"
        />
      </div>
    </form>
  );
};

export default LoginComponent;
