import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import CustomStore from 'devextreme/data/custom_store';

export class Tasks {
	ID: string;
	Version: Version 
	CreatedAt: string; // "2020-01-19T22:25:55.6184302Z",
	UpdatedAt: string; // "2020-01-30T08:18:54.2188908Z",
	Labels: object;
	Spec: TasksSpec;
	ServiceID: string;
	Slot: number;
	NodeID: string;
	Status: Status;
	DesiredState: string;
	NetworksAttachments: Array<NetworksAttachments>;
}
export class Version {
	Index: number;
}
export class TasksSpec {
	ContainerSpec: ContainerSpec;
	Resources: Resources;
	RestartPolicy: RestartPolicy
	Placement: Placement;
	Networks: Networks;
	ForceUpdate: number;
}
export class Status {
	Timestamp: Date; // "2020-01-21T18:33:30.8413989Z",
	State: string; // "complete",
	Message: string; //"finished",
	ContainerStatus: ContainerStatus;
	PortStatus: Object; // {}
}
export class NetworksAttachments {
	Network: Network;
	Addresses: Array<string>; // ["10.0.12.3/24"]

}
export class Network {
	ID: string; //"czjabnb2gmf9ku8ve0ab2s0yq",
	Version: Version;
	CreatedAt: Date; // "2020-01-19T22:25:53.42618Z",
	UpdatedAt: Date; // "2020-01-19T22:25:53.4312081Z",
	Spec: NetworkSpec;
	DriverState: DriverState; 
	IPAMOptions: IPAMOptions;
}

export class IPAMOptions {
	Driver: Driver;
	Configs: Configs;
}

export class Driver {
	Name: string; //"default"
}
export class Configs {
	Subnet: string; // "10.0.12.0/24",
	Gateway: string; // "10.0.12.1"
}

export class DriverState {
	Name: string; // "overlay",
	Options: Object; //{"com.docker.network.driver.overlay.vxlanid_list": "4108"}
}

export class NetworkSpec {
	Name: string; //"docker-Nodered_functions",
	Labels: Object;
	DriverConfiguration: DriverConfiguration;
	Scope: string; // "swarm"
}

export class DriverConfiguration {
	Name: string; // "overlay"
}

export class ContainerStatus {
	ContainerID: string;
	PID: number;
	ExitCode: number;
}

export class ContainerSpec {
	Image: string;
	Labels: Object;
	User: string;
	Privileges: Privileges; 
	Mounts: Array<Mounts>;
	Isolation: string;
}

export class Resources {
	Limits: Limits;
	Reservations: Reservations;
}

export class Limits {
	NanoCPUs: number;
	MemoryBytes: number;
}

export class Reservations {
	MemoryBytes: number;
}

export class RestartPolicy {
	Condition: string;
	Delay: number;
	MaxAttempts: number;
	Window: number;
}
export class Placement {
	Constraints: Array<any>;// ["node.role == manager"],
	Preferences: Array<Preferences>;
	Platforms: Array<Platforms>;
}
export class Platforms {
	Architecture: string; // "s390x",
	OS: string;//"linux"
}
export class Preferences {
	Spread: Spread;
}
export class Spread {
	SpreadDescriptor: string; //"node.labels.zone"
}

export class Networks {
}

export class Privileges {
	CredentialSpec: Object;
	SELinuxContext: Object;
}

export class Mounts {
	Type: string;
	Source: string;
	Target: string;
	VolumeOptions: VolumeOptions;
}
export class VolumeOptions {
	Labels: Object;
}


@Injectable()
export class TaskService {
}
