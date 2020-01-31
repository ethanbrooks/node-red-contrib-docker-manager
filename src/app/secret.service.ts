import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';


export class Secret {
	ID: string;
	Version: Object;
	CreatedAt: Date; // "2020-01-15T17:03:58.6540592Z",
	UpdatedAt: Date; // "2020-01-15T17:03:58.6540592Z",
	Spec: Spec;
}

export class Spec {
	Name: string;
	Labels: Object;
}


@Injectable()
export class SecretService {
}
