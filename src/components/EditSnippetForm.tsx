"use client";
import { Editor } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import type { Snippet } from "@prisma/client";
import hljs from "highlight.js";
import { Button } from "./ui/button";
import { savesnippet } from "@/actions"


const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {

  const [code, setCode] = useState(snippet.code);

  const savehandler = (value: string = "") => {
    setCode(value);
  }

  const savesnippetAction = savesnippet.bind(null, snippet.id, code);


  const [language, setLanguage] = useState<string>("javascript");

  const detectLanguage = (code: string) => {
    const detectedLanguage = hljs.highlightAuto(code).language;
    return detectedLanguage || "javascript";
  };

  useEffect(() => {
    const detectedLanguage = detectLanguage(code);
    setLanguage(detectedLanguage);
  }, [code]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-zinc-900 text-white rounded-lg shadow-lg space-y-6">
      <h1 className="text-3xl font-semibold text-center mb-4">Edit Snippet</h1>
      <div className="border-2 border-gray-700 rounded-lg p-4 bg-zinc-800">
        <Editor
          width="100%"
          height="400px"
          language={language}
          defaultValue={code}
          theme="vs-dark"
          onChange={savehandler}
        />
      </div>

      {/* Save Button */}
      <form action={savesnippetAction} >

        <Button type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-md mt-4 hover:bg-green-700 transition duration-300"
        >
          Save Snippet
        </Button>
      </form>
    </div>
  );
};

export default EditSnippetForm;
