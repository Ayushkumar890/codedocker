"use client"

import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { prisma } from "@/lib/prisma";
import { Label } from "@radix-ui/react-label";
// import { Actor } from "next/font/google";
// import { redirect } from "next/navigation";
import React, { useActionState } from "react";

export default function Newsnippet() {

  const [formStateData, action] = useActionState(createSnippet, { message: "" });

  return (
    <div className="max-w-md mx-auto bg-zinc-950 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create a New Snippet
      </h1>
      <form action={action} className="space-y-4">
        {/* Title Input */}
        <div>
          <Label htmlFor="title" className="block text-lg font-semibold mb-1">
            Title
          </Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter snippet title"
            className="w-full text-white border border-gray-600 rounded-md p-2 focus:ring-2 "
            required

          />
        </div>

        {/* Code Input */}

        <div>
          <Label htmlFor="code" className="block text-lg font-semibold mb-1">
            Code
          </Label>
          <Textarea
            name="code"
            id="code"
            placeholder="Enter your code here..."
            className="w-full text-white border border-gray-600 rounded-md p-2 focus:ring-2 overflow-auto scrollbar-hide"
            rows={6}
            required
          />
        </div>

        {formStateData && <div className="p-2 text-red-600">{formStateData.message}</div>}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-zinc-600 text-white py-2 rounded-md font-semibold text-lg transition"
        >
          Create Snippet
        </Button>
      </form>
    </div>
  );
}
