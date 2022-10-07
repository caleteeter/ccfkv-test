import * as ccfapp from '@microsoft/ccf-app';

export interface IDataDefinition {
    id: string,
    name: string
} 

export interface IResponse {
    message: string
}

const data = ccfapp.typedKv("data", ccfapp.string, ccfapp.json<IDataDefinition>());

export function addData(dd: IDataDefinition): IResponse {
    if (data.has(dd.id)) {
        return { message: "Creation of data element failed, data element already exists at this index."};
    }

    data.set(dd.id, dd);
    return { message: "Data element created successfully." };
}