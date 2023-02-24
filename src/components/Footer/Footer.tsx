import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-5/6 sm:w-11/12 mt-5 border-t-[4px] border-gray-200 p-3 mx-auto sm:px-10">
      <div className="mx-auto">
        Powered by{" "}
        <a
          href="https://openai.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          OpenAI{" "}
        </a>
        and{" "}
        <a
          href="https://vercel.com/docs/concepts/functions/edge-functions"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Vercel Edge Functions.
        </a>
      </div>
    </footer>
  );
}
