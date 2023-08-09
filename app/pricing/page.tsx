"use client"

import { title } from "@/components/primitives";
import Image from "next/image";
import Head from "next/head";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";

export default function PricingPage() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

	return (
    <div className="flex flex-col h-screen justify-between bg-white">
      <Head>
  <script async src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
</Head>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
        <TERipple rippleColor="light">
        <a
          className="inline-block rounded bg-primary mr-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          role="button"
          onClick={toggleShow}
        >
          Link
        </a>
      </TERipple>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={toggleShow}
        >
          Button
        </button>
      </TERipple>

      <TECollapse show={show}>
        <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </TECollapse>
        </div>
        <div className="container mx-auto flex justify-between items-center">
		<h1 className={title()}>Pricing</h1>
        </div>
      </header>
      <div className="flex flex-grow items-stretch container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/3 flex-wrap">
    <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          width={500}
          height={300} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
    <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
          width={500}
          height={300} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
    <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
          width={500}
          height={300} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
    <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
          width={500}
          height={300} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
    <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
          width={500}
          height={300} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
    <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
          width={500}
          height={300} />
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
	);
}
