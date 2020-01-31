import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import CustomStore from 'devextreme/data/custom_store';

export class Images {
	Containers: any;
	Created: Date;
	Id: string;
	Labels: Object;
	ParentId: string;
	RepoDigests: Array<any>;
	RepoTags: Array<any>;
	SharedSize: number;
	Size: number;
	VirtualSize: number;
}

@Injectable()
export class ImageService {
}
