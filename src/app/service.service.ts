import { Injectable } from '@angular/core';

export class Service {
	ID: string;
	Version: Version;
	CreatedAt: Date; // "2020-01-19T22:25:55.6163933Z",
	UpdatedAt: Date; // "2020-01-27T14:06:03.765992214Z",
	Spec: Spec;
	Endpoint: Endpoint;
}

export class Version {
	Index: number;
}
export class Spec {
	Name: string; // "docker-Nodered_nodered",
	Labels: Object;
	TaskTemplate: TaskTemplate;
	Mode: Mode;
	UpdateConfig: UpdateConfig;
	EndpointSpec: EndpointSpec;
}
export class TaskTemplate {
	ContainerSpec:ContainerSpec;
	Resources: Resources;
	RestartPolicy: RestartPolicy;
	Placement: Placement;
	Networks: Array<Networks>;
	ForceUpdate: number // 0
	Runtime: string; //"container"
}

//TODO link to task?
export class ContainerSpec {
	Image: string;
	Labels: Object;
	User: string;
	Privileges: Privileges; 
	Mounts: Array<Mounts>;
	Isolation: string;
}
export class Resources {}
export class Privileges{}
export class Mounts {}
export class RestartPolicy {}
export class Placement {}
export class Networks {}

export class Mode {
	Replicated: Replicated;
}

export class Replicated {
	Replicas: number; // 1
}
export class UpdateConfig {
	Parallelism: number; // 1,
	Delay: number; // 10000000000,
	FailureAction: string; // "pause",
	MaxFailureRatio: number; // 0,
	Order: string; // "stop-first"
}
export class EndpointSpec {
	Mode: string // "vip"
}

export class Endpoint {
	Spec: Endpoint_Spec;
	VirtualIPs: VirtualIPs;
}

export class Endpoint_Spec {
	Mode: string // "vip"
}

export class VirtualIPs {
	NetworkID: string; // "ybwuizzzia8fhjougtnijruil",
	Addr: string; // "10.0.5.134/24"
}

@Injectable()
export class ServiceService {
}
