import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import CustomStore from 'devextreme/data/custom_store';

// http://localhost:1880/red-nodes/container/?container=nodered_nodered_1
// http://localhost:1880/red-nodes/containers/


export class Container {
	Id: string;
	Names: Array<any>;
	Image: string;
	ImageID: string
	Command: string;
	Created: Date;
	Ports: Ports;
	Labels: Object;
	State: string;
	Status: string;
	HostConfig: Object;
	NetworkSettings:NetworkSettings;
	Mounts: Array<Mount>;
}


export class Ports {
    IP: string;
    PrivatePort: number;
    PublicPort: number;
    Type: string;
}

export class NetworkSettings {
    Networks: Object;
}

export class Mount {
    Type: string;
    Source: string;
    Destination: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
}


@Injectable()
export class ContainerService {
    containersStore: CustomStore;

    
    constructor(httpClient: HttpClient) {
        function isNotEmpty(value: any): boolean {
            return value !== undefined && value !== null && value !== "";
        }
        this.containersStore = new CustomStore({
            key: "OrderNumber",
            load: function (loadOptions: any) {
                let params: HttpParams = new HttpParams();
                [
                    "skip",
                    "take",
                    "requireTotalCount",
                    "requireGroupCount",
                    "sort",
                    "filter",
                    "totalSummary",
                    "group",
                    "groupSummary"
                ].forEach(function(i) {
                    if (i in loadOptions && isNotEmpty(loadOptions[i]))
                        params = params.set(i, JSON.stringify(loadOptions[i]));
                });
                return httpClient.get('http://localhost:1880/red-nodes/containers', { params: params })
                    .toPromise()
                    .then((data: any) => {
                        return {
                            data: data.data,
                            totalCount: data.totalCount,
                            summary: data.summary,
                            groupCount: data.groupCount
                        };
                    })
                    .catch(error => { throw 'Data Loading Error' });
            }
        });
    }
}
