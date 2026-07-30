"use client";

import { BookOpen } from "lucide-react";

import { useNotebook } from "@/context/NotebookContext";

import type {

    NotebookSummary,

} from "@/types/notebook";

interface Props {

    notebook: NotebookSummary;

    selected: boolean;

}

export default function NotebookItem({

    notebook,

    selected,

}: Props) {

    const {

        openNotebook,

    } = useNotebook();

    return (

        <button

            onClick={() =>

                openNotebook(

                    notebook.id

                )

            }

            className={`

                w-full

                rounded-lg

                border

                p-3

                text-left

                transition

                ${

                    selected

                        ? "border-blue-500 bg-blue-600/20"

                        : "border-slate-800 hover:bg-slate-800"

                }

            `}

        >

            <div className="flex items-center gap-3">

                <BookOpen size={18} />

                <div>

                    <div className="font-medium">

                        {notebook.title}

                    </div>

                    <div className="text-xs text-slate-400">

                        {notebook.description}

                    </div>

                </div>

            </div>

        </button>

    );

}