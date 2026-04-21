import type { IStatusPanel, IStatusPanelParams } from 'ag-grid-community';

import { CustomComponentWrapper } from './customComponentWrapper';
import type { CustomStatusPanelProps } from './interfaces';

export class StatusPanelComponentWrapper
    extends CustomComponentWrapper<IStatusPanelParams<any, any>, CustomStatusPanelProps, object>
    implements IStatusPanel
{
    public refresh(params: IStatusPanelParams<any, any>): boolean {
        this.sourceParams = params;
        this.refreshProps();
        return true;
    }
}
