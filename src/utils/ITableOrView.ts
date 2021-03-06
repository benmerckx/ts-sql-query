import { AnyDB } from "../databases/AnyDB"

export class ITableOrView<DB extends AnyDB> {
    // @ts-ignore
    protected ___database: DB
}

export interface __ITableOrViewPrivate {
    __name: string
    __as?: string
    __type: 'table' | 'view'
}

export function __getTableOrViewPrivate(table: ITableOrView<any>): __ITableOrViewPrivate {
    return table as any
}

export class ITable<DB extends AnyDB> extends ITableOrView<DB>{
    // @ts-ignore
    protected ___table: 'table'
}

export class IView<DB extends AnyDB> extends ITableOrView<DB>{
    // @ts-ignore
    protected ___view: 'view'
}
