import type { BeanCollection } from '../../context/context';
import type { ColGroupDef } from '../../entities/colDef';

export function createMergedColGroupDef(
    beans: BeanCollection,
    colGroupDef: ColGroupDef<any> | null,
    groupId: string
): ColGroupDef<any> {
    const colGroupDefMerged: ColGroupDef<any> = {} as ColGroupDef<any>;
    const gos = beans.gos;
    Object.assign(colGroupDefMerged, gos.get('defaultColGroupDef'));
    Object.assign(colGroupDefMerged, colGroupDef);
    gos.validateColDef(colGroupDefMerged, groupId);

    return colGroupDefMerged;
}
