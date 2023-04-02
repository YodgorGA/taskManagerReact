export interface locationState{
    from:string | null
}

export type ValueDataKeyFunc = (value:string, dataKey:string) =>void;
export type ValueFunc = (value:string) => void;
export type PaginationFunc = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void;
export type VoidFunc = ()=>void

