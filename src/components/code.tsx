import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { IoIosCopy, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const notify = () => {
    toast(<ToastDisplay />, {
      className: "bg-neutral-700 m-2",
    });
    copyToClipboard();
  };

  const ToastDisplay: React.FC = () => {
    return (
      <div className="m-2">
        <p className="text-md">Copied to clipboard!</p>
      </div>
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
        console.log("Copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute flex flex-row top-0 right-0 p-2"
        onClick={notify}
      >
        <span className="m-1 pb-1 basis-3/4 text-xs">{language}</span>
        {copied ? (
          <IoIosCheckmarkCircleOutline className="text-lg m-1 text-green-500 basis-1/4" />
        ) : (
          <IoIosCopy className="text-lg m-1 basis-1/4 hover:text-white" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vs2015}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
        showInlineLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        limit={1}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default CodeBlock;
