"use client";

import { Plus } from "lucide-react";

import { useNotebook } from "@/context/NotebookContext";

import NotebookList from "./NotebookList";

export default function Sidebar() {

    const {

        createNewNotebook,

    } = useNotebook();

    async function handleCreateNotebook() {

        await createNewNotebook({

            title: "Untitled Notebook",

            description: "",

            visibility: "private",

            tags: [],

        });

    }

    return (

        <aside className="w-80 border-r border-slate-800 bg-slate-950">

            <div className="border-b border-slate-800 p-4">

                <button

                    onClick={handleCreateNotebook}

                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 hover:bg-blue-700"

                >

                    <Plus size={18} />

                    New Notebook

                </button>

            </div>

            <NotebookList />

        </aside>

    );

}