import type { BeanCollection } from '../context/context';
import type { GridApi } from './gridApi';

export type ApiFunctionName = keyof GridApi<any>;

export type ApiFunction<TName extends ApiFunctionName> = (
    beans: BeanCollection,
    ...args: Parameters<GridApi<any>[TName]>
) => ReturnType<GridApi<any>[TName]>;
