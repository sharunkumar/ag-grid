# PATCH

This repository is a fork of [ag-grid](https://github.com/ag-grid/ag-grid).

## Remotes

```
sharun     git@github.com:sharunkumar/ag-grid.git (fetch)
sharun     git@github.com:sharunkumar/ag-grid.git (push)
upstream   git@github.com:ag-grid/ag-grid.git (fetch)
upstream   git@github.com:ag-grid/ag-grid.git (push)
```

## CI

-   Fork-friendly CI workflow at [`.github/workflows/fork-ci.yml`](.github/workflows/fork-ci.yml) (format, lint, typecheck, build, unit + behavioural tests; no org secrets required). Upstream `ci.yml` and other workflows are disabled on the fork.
-   When syncing from upstream, disable any newly-added workflows on the `sharun` remote via `GH_HOST=github.com gh workflow disable <id> --repo sharunkumar/ag-grid` so only `Fork CI` remains active.

## Patches

-   Remove `= any` defaults from public generics
    -   Column-def types
        -   `ColDef<TData, TValue>`
        -   `ColGroupDef<TData>`
        -   `AbstractColDef<TData, TValue>`
        -   `ColDefField<TData, TValue>`
    -   `GridOptions<TData>`
    -   `GridApi<TData>`
    -   `ICellRendererParams<TData, TValue, TContext>`
    -   `ValueGetterParams<TData, TValue, TContext>`
    -   `ValueFormatterParams<TData, TValue, TContext>`
    -   `Column<TValue>`
    -   `IServerSideGetRowsParams<TData, TContext>`
    -   `RowClassParams<TData, TContext>`
    -   `ICellEditorParams<TData, TValue, TContext>`
    -   `SetFilterValuesFuncParams<TData, V>`
    -   `IRowNode<TData>`
    -   `ValueSetterParams<TData, TValue, TContext>`
    -   `CellClassParams<TData, TValue, TContext>`
    -   `EditableCallbackParams<TData, TValue, TContext>`
    -   `NewValueParams<TData, TValue, TContext>`
    -   `ProcessCellForExportParams<TData, TContext>`
    -   `ITooltipParams<TData, TValue, TContext>`
    -   `IServerSideDatasource<TData>`
    -   `GetRowIdFunc<TData, TContext>`
    -   `GetRowIdParams<TData, TContext>`
    -   `RowDragCallbackParams<TData, TValue, TContext>`
    -   `MenuItemDef<TData, TContext>` / `MenuItemLeafDef<TData, TContext>`
    -   `IStatusPanelParams<TData, TContext>`
    -   `ISetFilterParams<TData, V>`
    -   `IHeaderParams<TData, TContext>`
    -   `GetContextMenuItemsParams<TData, TContext>`
    -   `ValueGetterFunc<TData, TValue, TContext>`
    -   `RefreshCellsParams<TData>`
    -   `NestedFieldPaths<TData, TValue, TDepth>`
    -   `IsRowSelectable<TData>`
    -   `IsRowMaster<TData>`
    -   `IGroupCellRendererParams<TData, TValue>`
    -   `IDetailCellRendererParams<TData, TDetail>`
    -   `HeaderCheckboxSelectionCallbackParams<TData, TValue, TContext>`
    -   `GroupCellRendererParams<TData, TValue>`
    -   `GetMainMenuItemsParams<TData, TContext>`
    -   Internal usages updated to pass explicit generics
        -   Reason: removing the defaults makes bare references (e.g. `colDef: ColDef`) a compile error
        -   `<any, any>` / `<any>` used (not `unknown`) because `ColDefField<unknown, unknown>` collapses to `undefined`, breaking internal `colDef.field = ...` assignments
        -   Type-only edits; no runtime behaviour changes
