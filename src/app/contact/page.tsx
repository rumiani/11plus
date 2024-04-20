"use client";
import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-full">
      <p>Get in touch with the developer if you have any suggestions or problems that need to be fixed:</p>
      <div className="flex flex-row w-full my-16 mx-auto gap-4 justify-center">
      <Link href={"https://t.me/memoleitapp"}>
        <button title="Telegram Channel" className="text-blue-500 text-3xl hover:scale-110"> <FaTelegram/></button>
      </Link>
      <Link href="mailto:maziar.rumiani@gmail.com">
        <button title="Send Email" className="text-green-700 text-4xl hover:scale-110"><MdAlternateEmail/></button>
      </Link>
    </div>
    </div>
  );
  return (
    <>
      <h2 className="w-11/12 max-w-md my-10 text-lg mx-auto">Contact us:</h2>
      <form
        className="max-w-md mx-auto my-10 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="text-black w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="text-black w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message ..."
            className="text-black w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white  bg-blue-500 mx-auto px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </>
  );
};
export default Index;
