import { Component, ChangeDetectionStrategy } from '@angular/core';

import DataSource from 'devextreme/data/data_source';

import { EventService } from './event.service';



@Component({
    selector: 'app-realtime_grid',
    templateUrl: './realtime_grid.component.html',
    styleUrls: ['./realtime_grid.component.css'],
    providers: [EventService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealtimeGridComponent {
    eventsDataSource: DataSource;

    constructor(service: EventService) {
        this.eventsDataSource = new DataSource({
            store: service.getEvents(),
            reshapeOnPush: true
        });
    }
}
