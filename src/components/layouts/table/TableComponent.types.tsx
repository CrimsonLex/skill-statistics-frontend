export interface TableProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    headers: Header[];
    className?: string;
    isLoading?: boolean;
    loadingMessage: string;
    emptyMessage: string;
}

export type Header = {
    key: string;
    label: string;
};
