import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import CustomStore from 'devextreme/data/custom_store';

export class Network {
	Name: string;
	Id: string;
	Created: Date; //isn't epoch
	Scope: string;
	Driver: string;
	EnableIPv6: boolean;
	IPAM: IPAM;
	Internal:  boolean;
	Attachable:  boolean;
	Ingress: boolean;
	ConfigFrom: Object;
	ConfigOnly: boolean;
	Containers: null;
	Options: Object;
	Labels: Object;
}

export class IPAM {
	Driver: string;
	Options: Object;
	Config: Array<Config>;
}
export class Config {
	Subnet: string;
	Gateway: string;
}


@Injectable()
export class NetworkService {
}
