import type { ColDef, ColGroupDef } from '../entities/colDef';

/** @internal AG_GRID_INTERNAL - Not for public use. Can change / be removed at any time. */
export interface IPivotColDefService {
    createColDefsFromFields: (fields: string[]) => (ColDef<any, any> | ColGroupDef<any>)[];
    recreateColDef(colDef: ColDef<any, any>): ColDef<any, any>;
}
