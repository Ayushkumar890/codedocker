"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const savesnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    });
    revalidatePath(`/snippet/${id}`);
    redirect(`/snippet/${id}`)
}

export const deletesnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id
        }
    });
    redirect('/')
}


export const createSnippet = async (prevState: { message: string }, formData: FormData) => {
    try {

        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 4) {
            return { message: "Title is required and must be longer more then 4 character" };
        }

        if (typeof code !== "string" || code.length < 1) {
            return { message: "Code is required" };
        }
        const snippet = await prisma.snippet.create({
            data: {
                title,
                code,
            },
        });

        console.log("Created snippet:", snippet);
    } catch {
        return { message: "something went wront" }
    }
    redirect("/");
}

