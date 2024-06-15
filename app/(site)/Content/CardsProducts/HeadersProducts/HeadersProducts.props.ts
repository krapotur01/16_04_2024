export interface HeadersProps {
    headers: string[];
    getCurrentHeader: (header: string) => void;
}