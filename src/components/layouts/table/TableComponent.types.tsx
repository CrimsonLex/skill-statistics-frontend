export interface TableProps {
    data: any[];
    headers: string[];
    className?: string;
    isLoading?: boolean;
    loadingMessage: string;
    emptyMessage?: string;
}