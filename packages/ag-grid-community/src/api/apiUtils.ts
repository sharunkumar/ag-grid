import type { Context } from '../context/context';
import type { GridApi } from './gridApi';

export function createGridApi(context: Context): { beanName: 'gridApi'; bean: GridApi<any> } {
    return {
        beanName: 'gridApi',
        bean: context.getBean('apiFunctionSvc').api,
    };
}
