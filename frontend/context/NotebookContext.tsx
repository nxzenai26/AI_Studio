"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import {
    listNotebooks,
    getNotebook,
    createNotebook,
    updateNotebook,
    deleteNotebook,
} from "@/services/notebook.service";

import type {
    NotebookSummary,
    NotebookDetail,
    CreateNotebookRequest,
    UpdateNotebookRequest,
} from "@/types/notebook";

interface NotebookContextType {

    notebooks: NotebookSummary[];

    currentNotebook: NotebookDetail | null;

    loading: boolean;

    error: string | null;

    refreshNotebooks: () => Promise<void>;

    openNotebook: (
        notebookId: string
    ) => Promise<void>;

    createNewNotebook: (
        notebook: CreateNotebookRequest
    ) => Promise<void>;

    updateCurrentNotebook: (
        notebook: UpdateNotebookRequest
    ) => Promise<void>;

    deleteCurrentNotebook: () => Promise<void>;

}

const NotebookContext =
    createContext<NotebookContextType | null>(
        null
    );

export function NotebookProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [
        notebooks,
        setNotebooks,
    ] = useState<NotebookSummary[]>([]);

    const [
        currentNotebook,
        setCurrentNotebook,
    ] = useState<NotebookDetail | null>(
        null
    );

    const [
        loading,
        setLoading,
    ] = useState(true);

    const [
        error,
        setError,
    ] = useState<string | null>(
        null
    );

    async function refreshNotebooks() {

        try {

            setLoading(true);

            const data =
                await listNotebooks();

            setNotebooks(data);

        } catch (err) {

            console.error(err);

            setError(
                "Unable to load notebooks."
            );

        } finally {

            setLoading(false);

        }

    }

    async function openNotebook(
        notebookId: string
    ) {

        try {

            setLoading(true);

            const notebook =
                await getNotebook(
                    notebookId
                );

            setCurrentNotebook(
                notebook
            );

        } catch (err) {

            console.error(err);

            setError(
                "Unable to open notebook."
            );

        } finally {

            setLoading(false);

        }

    }

    async function createNewNotebook(
        notebook: CreateNotebookRequest
    ) {

        try {

            const created =
                await createNotebook(
                    notebook
                );

            await refreshNotebooks();

            await openNotebook(
                created.id
            );

        } catch (err) {

            console.error(err);

            setError(
                "Unable to create notebook."
            );

        }

    }

    async function updateCurrentNotebook(
        notebook: UpdateNotebookRequest
    ) {

        if (!currentNotebook)
            return;

        const updated = {

            ...currentNotebook,

            ...notebook,

        };

        await updateNotebook(
            updated
        );

        setCurrentNotebook(
            updated
        );

        await refreshNotebooks();

    }

    async function deleteCurrentNotebook() {

        if (!currentNotebook)
            return;

        await deleteNotebook(
            currentNotebook.id
        );

        setCurrentNotebook(
            null
        );

        await refreshNotebooks();

    }

    useEffect(() => {

        refreshNotebooks();

    }, []);

    return (

        <NotebookContext.Provider
            value={{
                notebooks,
                currentNotebook,
                loading,
                error,
                refreshNotebooks,
                openNotebook,
                createNewNotebook,
                updateCurrentNotebook,
                deleteCurrentNotebook,
            }}
        >

            {children}

        </NotebookContext.Provider>

    );

}

export function useNotebook() {

    const context =
        useContext(
            NotebookContext
        );

    if (!context) {

        throw new Error(
            "useNotebook must be used inside NotebookProvider."
        );

    }

    return context;

}