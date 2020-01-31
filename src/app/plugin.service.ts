import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

export class Plugin {
	Config:Config;
	Enabled: boolean;
	Id: string;
	Name: string;
	PluginReference: string;
	Settings: Settings;
}

export class Settings {
	Args: Array<any>;
	Devices: Array<Devices>;
	Env: Array<any>;
	Mounts: Array<Mounts>;
}

export class Config {
	Args: Args;
	Description:  string;
	DockerVersion: string;
	Documentation: string;
	Entrypoint: Array<any>;
	Env: Env;
	Interface:Interface;
	Mounts: Array<Mounts>;
	IpcHost: boolean;
	Linux: Linux;
	Network: Network;
	PidHost: boolean;
	PropagatedMount: string;
	User: Object;
	WorkDir: string;
	rootfs: rootfs;
}

export class Args {
	Description: string;
	Name: string;
	Settable: Array<any>;
	Value: any;
}

export class Env {
	Description: string;
	Name: string;
	Settable: Array<any>;
	Value: string;
}

export class Mounts {
	Description: string;
	Destination: string;
	Name: string;
	Options: Array<any>;
	Settable: Array<any>;
	Source: string;
	Type: string;
}

export class Interface {
	Socket: string;
	Types: Array<any>;
}

export class Linux {
	AllowAllDevices: boolean;
	Capabilities: Array<any>;
	Devices: Array<Devices>;
}

export class Devices {
	Description: string;
	Name: string;
	Path: string;
	Settable: Array<any>;
}

export class Network {
	Type: string;
}

export class rootfs {
	diff_ids: Array<any>;
	type: string;
}

@Injectable()
export class PluginService {
}
