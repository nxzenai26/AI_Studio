/**
 * Notebook Output Models
 */

export type OutputType =
    | "stream"
    | "execute_result"
    | "display_data"
    | "error";

/**
 * Stream Output
 */

export interface StreamOutput {

    output_type: "stream";

    content: string;

}

/**
 * Execute Result
 */

export interface ExecuteResultOutput {

    output_type: "execute_result";

    content: {

        data: Record<string, unknown>;

        metadata: Record<string, unknown>;

        execution_count: number;

    };

}

/**
 * Display Data
 */

export interface DisplayDataOutput {

    output_type: "display_data";

    content: {

        data: Record<string, unknown>;

        metadata: Record<string, unknown>;

    };

}

/**
 * Error Output
 */

export interface ErrorOutput {

    output_type: "error";

    content: {

        ename: string;

        evalue: string;

        traceback: string[];

    };

}

export type NotebookOutput =
    | StreamOutput
    | ExecuteResultOutput
    | DisplayDataOutput
    | ErrorOutput;