"use client";

import Sidebar from "./Sidebar";

import Notebook from "@/components/notebook/Notebook";

import { useNotebook } from "@/context/NotebookContext";

export default function Workspace() {

    const {

        currentNotebook,

        loading,

    } = useNotebook();

    return (

        <div className="flex h-full w-full">

            <Sidebar />

            <main className="flex-1 overflow-hidden">

                {loading ? (

                    <div className="flex h-full items-center justify-center">

                        Loading notebooks...

                    </div>

                ) : currentNotebook ? (

                    <Notebook notebook={currentNotebook} />

                ) : (

                    <div className="flex h-full items-center justify-center text-gray-400">

                        No notebook selected.

                    </div>

                )}

            </main>

        </div>

    );

}