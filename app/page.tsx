"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import { SocialLoginFacebook, SocialLoginInstagram } from "@/components";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFacebook, setIsOpenFacebook] = useState(false);
  return (
    <main className="w-full flex-center flex-col">
      <header className="px-8 sm:px-20">
        <Navbar fluid={false} rounded className="bg-white mt-2">
          <Navbar.Brand href="">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              PX Contest
            </span>
          </Navbar.Brand>

          <Navbar.Toggle className="" />

          <Navbar.Collapse className="">
            <Navbar.Link
              onClick={() => setOpenModal(true)}
              className="hover:bg-slate-100 cursor-pointer"
            >
              Wall Art
            </Navbar.Link>
            <Navbar.Link
              onClick={() => setOpenModal(true)}
              className="hover:bg-slate-100 cursor-pointer"
            >
              Beach
            </Navbar.Link>
            <Navbar.Link
              onClick={() => setOpenModal(true)}
              className="hover:bg-slate-100 cursor-pointer"
            >
              Tech
            </Navbar.Link>
            <Navbar.Link
              onClick={() => setOpenModal(true)}
              className="hover:bg-slate-100 cursor-pointer"
            >
              Collections
            </Navbar.Link>
            <Navbar.Link
              onClick={() => setOpenModal(true)}
              className="hover:bg-slate-100 cursor-pointer"
            >
              Community
            </Navbar.Link>
            <Navbar.Link
              onClick={() => setOpenModal(true)}
              className="hover:bg-slate-100 cursor-pointer"
            >
              Join
            </Navbar.Link>
            <Navbar.Link
              onClick={() => setOpenModal(true)}
              className="hover:bg-slate-100 cursor-pointer"
            >
              Sign In
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main className=" bg-red-300 hidden">
        <Button
          onClick={() => setOpenModal(true)}
          className="text-blue-400 bg-gray-50 hover:!bg-blue-50"
        >
          Vote this Image
        </Button>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header className="bg-white">Login Required</Modal.Header>
          <Modal.Body className="bg-white">
            <div className="flex flex-col justify-between text-center mt-10">
              <button
                onClick={() => {
                  setIsOpen(true);
                  setOpenModal(false);
                }}
              >
                <div className="flex flex-row justify-center gap-2 border border-pink-400 rounded-lg !min-w-[214px] py-1 mx-14 items-center text-pink-600 opacity-90 text-sm font-medium easeInst">
                  <Image
                    src="/social_login/instagram.webp"
                    alt="Instagram"
                    width={25}
                    height={25}
                  />
                  <p>Continue With Instagram</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setIsOpenFacebook(true);
                  setOpenModal(false);
                }}
              >
                <div className="flex flex-row !min-w-[214px] justify-center gap-2 mt-3 border border-blue-400 rounded-lg py-1 mx-14 items-center text-blue-600 opacity-90 text-sm font-medium easeFace">
                  <Image
                    src="/social_login/facebook.webp"
                    alt="facebook"
                    width={25}
                    height={25}
                  />
                  <p>Continue With Facebook</p>
                </div>
              </button>

              <div className="flex justify-end gap-2">
                <button
                  color="gray"
                  onClick={() => setOpenModal(false)}
                  className="text-red-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <SocialLoginInstagram
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        />
        <SocialLoginFacebook
          isOpenFacebook={isOpenFacebook}
          closeModal={() => setIsOpenFacebook(false)}
        />
      </main>

      <div className="flex flex-row justify-between items-center mt-12 max-md:flex-col px-8 sm:px-20">
        <div>
          <h1 className="text-3xl font-inter font-medium">
            ONLINE PHOTOS CONTESTS
          </h1>
        </div>

        <div className="max-lg:hidden">
          <div className="flex flex-row space-x-12">
            <Link href="/">
              <span className="text-gray-500 text-sm">COMMUNITY FEATURES</span>
            </Link>
            <span className="text-gray-500 text-sm">Who&apos;s Online?</span>
          </div>
          <hr />
          <span className="text-gray-500 text-sm grid w-2/3 md:w-full">
            Discussions | Groups | Blogs | Chat | Graphs | Activity
          </span>
        </div>
      </div>

      <section className="flex flex-col justify-center p-8 mt-5 items-center  px-8 sm:px-20">
        <article className="flex flex-col justify-between p-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <h2 className="text-1xl font-satoshi font-medium text-center sm:text-left text-black">
            Online photos competitions continue to thrive,providing a stage for
            photographers and artists to share their vision with the
            world.Whether you are a hobbyist looking to test the waters or a
            professional seeking to cement your status,these contests can be a
            fun and rewarding part of your journey.So, charge your
            batteries,clear your collections,and let the world see through your
            lens.your next shot could be the next award-winning masterpiece.
          </h2>
        </article>
      </section>

      <div className="flex flex-col mt-3 px-8 sm:px-20">
        <div className="flex justify-center mb-3">
          <button
            onClick={() => setOpenModal(true)}
            className="border-solid border-2 border-gray-300 w-56 text-center py-1 font-satoshi bg-gray-100 hover:border-none focus:border-green-100 hover:shadow-inner"
          >
            Vote for this Image
          </button>
        </div>
        <div className="flex flex-row max-sm:flex-col max-md:flex-col max-lg:flex-col">
          <div className="flex flex-row justify-between items-center max-md:flex-col max-lg:flex-col max-lg:mb-4">
            <Image
              src="/poster_image/logo1-1-vibrant-and-colorful.jpg"
              alt="Logo image"
              width={400}
              height={120}
              className="max-sm:w-100 max-md:w-120"
            />
          </div>
          <div className="ml-28 max-lg:ml-6 max-md:ml-6 max-sm:ml-6 flex flex-row justify-between items-center max-md:flex-col max-lg:flex-col">
            <div className="flex flex-col">
              <p className="font-satoshi font-medium text-2xl">
                VIBRANT AND COLORFUL
              </p>
              <span className="w-full flex flex-row justify-between">
                <p className="text-sm text-gray-500">Ending</p>
                <p className="text-sm text-black">Few Hours Left</p>
              </span>
              <span className="w-full flex flex-row justify-between">
                <p className="text-sm text-gray-500">Voting</p>
                <p className="text-sm text-black">Facebook And Instagram</p>
              </span>
              <span className="w-full flex flex-row justify-between">
                <p className="text-sm text-gray-500">Members</p>
                <p className="text-sm text-black">3798</p>
              </span>
              <span className="w-full flex flex-row justify-between">
                <p className="text-sm text-gray-500">Images</p>
                <p className="text-sm text-black">1045</p>
              </span>
              <span className="w-full flex flex-row justify-between">
                <p className="text-sm text-gray-500">Group</p>
                <p className="text-sm text-black">Creative Artworks</p>
              </span>

              <div className="mt-3 flex justify-center mb-3">
                <button
                  onClick={() => setOpenModal(true)}
                  className="border-solid border-2 border-gray-300 w-56 text-center py-1 font-satoshi bg-gray-100 hover:bg-green-400 hover:border-none focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
                >
                  View Contest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
