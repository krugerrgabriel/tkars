export interface FiltersProps {
    className?: string;
    type?: string;
    active: boolean;
    filterChange: Function;
    data?: {
        status: string,
        cores: string[],
        combustiveis: string[],
        tipos: string[]
    }
}