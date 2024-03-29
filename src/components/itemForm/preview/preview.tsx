import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { exitFullScreen, fullScreen } from "./fullScreen";
import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { UseFormGetValues } from "react-hook-form";
import { FormValues } from "@/src/types/interface";

type DialogElement = HTMLDialogElement | null;

const Preview = ({
  getValues,
}: {
  getValues: UseFormGetValues<FormValues>;
}) => {
  const [html, setHtml] = useState("");
  const dialogElement = useRef<HTMLDialogElement | null>(null);
  const itemlement = useRef<HTMLDivElement | null>(null);

  const showModalHnadler = () => {
    (dialogElement.current as DialogElement)?.showModal();
    if (getValues().body)
      setHtml(stateToHTML(convertFromRaw(JSON.parse(getValues().body))));
  };

  useEffect(() => {
    onclick = (e) => {
      const target = e.target as HTMLTextAreaElement;
      if (target.id === "close")
        (dialogElement.current as DialogElement)?.close();
    };
  }, []);

  return (
    <div className="item flex">
      <button
        onClick={showModalHnadler}
        style={{ background: "gray" }}
        className="primaryBtn mx-auto mb-2"
      >
        Preview
      </button>
      <dialog
        ref={dialogElement}
        className="preview rounded-lg p-2 sm:p-4 w-screen h-screen scroll-smooth"
      >
        <div ref={itemlement} className="quill my-4 p-4 ">
          <h2 className="font-bold text-gray-500">Preview</h2>
          <div className="max-w-4xl break-words mx-auto">
            <h1 className="text-center font-bold text-2xl my-4">
              {_.capitalize(getValues().title)}
            </h1>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
            <div className="my-4 mx-auto">
              <p className="font-bold text-gray-500">Topic:</p>
              {_.capitalize(getValues().topic)}
            </div>
            <button
              id="close"
              className="primaryBtn m-4"
              onClick={exitFullScreen}
            >
              Back
            </button>
            <button
              id="fullscreen"
              className="primaryBtn"
              onClick={() => fullScreen()}
            >
              Fullscreen
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Preview;
