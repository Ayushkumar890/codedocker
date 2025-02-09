import { deletesnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
// import { AwardIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";


type SnippetDetailsProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetailsProps: React.FC<SnippetDetailsProps> = async ({
  params,
}) => {
  const id = Number((await params).id);

  await new Promise((r)=>setTimeout(r,2000));
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) {
    return notFound();
  }
  const deletesnippetaction = deletesnippet.bind(null, id);


  return (
    <>
      <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg border-t-4 border-gray-100">
        <div className=" flex justify-between">

          <h1 className="text-2xl font-bold border-b-4 pb-4 border-gray-100 text-gray-200 mb-4">
            {snippet.title}
          </h1>
          <div className="flex gap-4">
            <Link href={`/snippet/${snippet.id}/edit`}><Button className="bg-green-700 " variant={"destructive"}>Edit</Button></Link>
            <form action={deletesnippetaction}>
              <Button className="bg-red-700">Delete</Button>
            </form>
          </div>
        </ div>
        <pre className="bg-zinc-900 text-white p-4 rounded-md overflow-x-auto">
          <code className="whitespace-pre-wrap">{snippet.code}</code>
        </pre>
      </div>
    </>
  );
};

export default SnippetDetailsProps;

export const generateStaticParams = async()=>{
  const snippets = await prisma.snippet.findMany();

  return snippets.map((snippet)=>{
    return {id:snippet.id.toString()}
  })
}