"use client";

import { useNotebook } from "@/context/NotebookContext";

import NotebookItem from "./NotebookItem";

export default function NotebookList() {

    const {

        notebooks,

        currentNotebook,

    } = useNotebook();

    if (notebooks.length === 0) {

        return (

            <div className="p-6 text-center text-slate-400">

                No notebooks found.

            </div>

        );

    }

    return (

        <div className="space-y-2 p-3">

            {notebooks.map((notebook) => (

                <NotebookItem

                    key={notebook.id}

                    notebook={notebook}

                    selected={

                        currentNotebook?.id ===

                        notebook.id

                    }

                />

            ))}

        </div>

    );

}