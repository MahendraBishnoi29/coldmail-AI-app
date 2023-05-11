import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import LoadingDots from "../Loading/Loading";

type Props = {};

const GenerateMail = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [generatedEmails, setGeneratedEmails] = useState<String>("");

  const prompt = `write an eye catchy and solid cold email to the recruiter for a any Developer position. for any skills and experience and base it on this context:${email}`;

  const generateEmail = async (e: any) => {
    e.preventDefault();
    setGeneratedEmails("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedEmails((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="w-[90%] flex flex-col justify-center items-center mt-6 pb-16 text-center">
      <div className="mt-4 flex items-center justify-center sm:pl-8">
        <Image
          src="/assets/rocket.png"
          width={30}
          height={30}
          alt="1 icon"
          className="lg:mt-2 sm:mb-2 mr-2"
        />
        <p className="text-left font-medium text-lg">
          give some information about your desired role{" "}
          <span className="text-slate-500">(skills, experience)</span>.
        </p>
      </div>

      <textarea
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        rows={4}
        className="lg:w-2/5 sm:w-full px-2 mt-2 rounded-md border-gray-300 shadow-lg resize-none"
        placeholder={
          "e.g. write a cold email for me I'm a fresher looking for frontend roles. skills- react, typescript"
        }
      />

      {!loading && (
        <button
          onClick={(e) => generateEmail(e)}
          className="flex text-white bg-gradient-to-tr from-blue-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-3"
        >
          <svg
            className="w-5 h-5 mr-2 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          Generate
        </button>
      )}

      {loading && (
        <button
          disabled
          className="flex text-white bg-gradient-to-tr from-blue-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-3"
        >
          <LoadingDots color="white" style="large" />
        </button>
      )}

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2200 }}
      />

      {generatedEmails && (
        <>
          <h2 className="sm:text-3xl text-3xl font-bold text-slate-900 mx-auto my-5">
            Your generated Email
          </h2>

          <p className="text-slate-500 mb-2">
            ⚠ this Email is not formatted here but don&apos;t worry just
            copy(click on it) and paste it anywhere and you&apos;re good to go
            :)
          </p>

          <div className="md:max-w-xl lg:max-w-4xl">
            {generatedEmails
              .split(" ")
              .join(" ")
              .split("1.")
              .map((generateEmail) => {
                return (
                  <>
                    <div
                      key={generateEmail}
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-cell border"
                      onClick={() => {
                        navigator.clipboard.writeText(generateEmail);
                        toast("Email copied to clipboard", {
                          icon: "📋",
                          style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                          },
                        });
                      }}
                    >
                      <p>{generateEmail}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </>
      )}

      {/* <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-cell border"
            onClick={() => {
              toast("Email copied to clipboard", {
                icon: "📋",
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              praesentium dolore reiciendis dignissimos odio rem nam tempora ab
              beatae doloribus.
            </p>
          </motion.div>
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default GenerateMail;
