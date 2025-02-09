import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const snippet = await prisma.snippet.findMany();
  return (
    <>
     <div className="max-w-3xl mx-auto p-6 ">
  {/* Home Title */}
  <div className="font-bold text-4xl text-white mb-6 text-center">CodeDocker</div>

  {/* Header Section */}
  <div className="flex items-center justify-between mb-4">
    <h1 className="text-2xl font-semibold text-gray-200">Snippets</h1>
    <Link href="/snippet/new">
      <Button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
        New
      </Button>
    </Link>
  </div>

  {/* Snippets List */}
  <div className="space-y-3">
    {snippet.map((snippet) => (
      <div
        className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
        key={snippet.id}
      >
        <h1 className="text-lg font-medium text-gray-200">{snippet.title}</h1>
        <Link href={`/snippet/${snippet.id}`}>
          <Button className="text-white hover:text-blue-300">
            View
          </Button>
        </Link>
      </div>
    ))}
  </div>
</div>

    </>
  );
}
