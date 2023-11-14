import React from "react";
import { Input } from "@nextui-org/react";

export default function ForgotPassword() {
  return (
    <div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-2xl text-red-400">Comming Soon</h1>
      </div>
    </div>
  );
}
