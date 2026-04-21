import type { ColDef } from '../entities/colDef';
import type { FiltersToolPanelState } from './gridState';
import type { IToolPanel } from './iToolPanel';

export interface IFiltersToolPanel extends IToolPanel {
    setFilterLayout(colDefs: ColDef<any, any>[]): void;
    expandFilterGroups(groupIds?: string[]): void;
    collapseFilterGroups(groupIds?: string[]): void;
    expandFilters(colIds?: string[]): void;
    collapseFilters(colIds?: string[]): void;
    syncLayoutWithGrid(): void;
    getState(): FiltersToolPanelState;
}
