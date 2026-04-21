# PATCH

This repository is a fork of [ag-grid](https://github.com/ag-grid/ag-grid).

## Remotes

```
sharun     git@github.com:sharunkumar/ag-grid.git (fetch)
sharun     git@github.com:sharunkumar/ag-grid.git (push)
upstream   git@github.com:ag-grid/ag-grid.git (fetch)
upstream   git@github.com:ag-grid/ag-grid.git (push)
```

## Patches

-   Remove `= any` defaults from public generics
    -   Column-def types
        -   `ColDef<TData, TValue>`
        -   `ColGroupDef<TData>`
        -   `AbstractColDef<TData, TValue>`
        -   `ColDefField<TData, TValue>`
    -   `GridOptions<TData>`
    -   Internal usages updated to pass explicit generics
        -   Reason: removing the defaults makes bare references (e.g. `colDef: ColDef`) a compile error
        -   `<any, any>` / `<any>` used (not `unknown`) because `ColDefField<unknown, unknown>` collapses to `undefined`, breaking internal `colDef.field = ...` assignments
        -   Type-only edits; no runtime behaviour changes
