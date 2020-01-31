import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import CustomStore from 'devextreme/data/custom_store';

export class Node {
	ID: string;
	Version: Version;
	CreatedAt: Date; //"2019-12-06T16:59:57.2370561Z",
	UpdatedAt: Date; // "2020-01-30T08:18:52.9081567Z",
	Spec: Spec;
	Description: Description;
	Status: Status;
	ManagerStatus: ManagerStatus;
}
export class Version {
	Index: number;
}
export class Spec {
	Labels: object;
	Role: string;
	Availability: string;
}
export class Description {
	Hostname: string;
	Platform: Platform;
	Resources: Resources; 
	Engine: Engine; 
	TLSInfo: TLSInfo;
}

export class Status {
	State: string;
	Addr: string;
}
export class ManagerStatus {
	Leader: boolean;
	Reachability: string;
	Addr: string;
}

export class Platform {
	Architecture: string;
	OS: string;
}
export class Resources {
	NanoCPUs: number;
	MemoryBytes: number;
}

export class Engine {
	EngineVersion: string;
	Plugins: Array<Plugins>;
}


export class Plugins {
	Type: string;
	Name: string;
}

export class TLSInfo {
	TrustRoot: string;
	CertIssuerSubject: string;
	CertIssuerPublicKey: string;
}

@Injectable()
export class NodeService {
}
