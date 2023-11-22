import React from "react";
import { Input, Button } from "@nextui-org/react";
import userAuth from "../context/AuthContext";

export default function Returns() {
  const { user } = userAuth();
  return (
    <>
      <div className="container m-4">
        <h1 className="text-2xl text-red-600 text-center">
          Do you need to make a claim or return?
        </h1>

        <div className="text-center">
          <h4>
            Leave us all the necessary information to correctly respond to your
            request, please complete the following information completely
          </h4>
        </div>

        <div className="m-4 mt-5  ">
          <form action="" className="flex flex-col gap-3">
            <Input
              label="
                Order id"
              placeholder="123455"
            ></Input>
            <Input placeholder={user.email} label="Email"></Input>
            <Input
              label="Description of the facts"
              placeholder="The product arrived in bad condition"
            ></Input>
            <label htmlFor="">
              {" "}
              Remember that the reasons why you request a product change must be
              valid in accordance with our data policies.
            </label>
            <Input type="file"></Input>
            <label htmlFor="file">Attach evidence</label>

            <div className="flex items-center justify-center">
              <Button
                className="bg-black text-white hover:bg-yellow-700"
                onPress={() => {
                  alert(
                    "has been processed correctly, please pay attention to your email"
                  );
                }}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
        <p></p>
      </div>
    </>
  );
}
