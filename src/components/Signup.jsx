import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../components/index";

function Signup() {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center"></div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        <form onSubmit={""}>
          <div className="space-y-5">
            <Input label="Full Name: " placeholder="Enter your full name" />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 active:bg-rose-400"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
