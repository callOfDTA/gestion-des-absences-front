import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendrier-header',
  templateUrl: './calendrier-header.component.html',
  styleUrls: ['./calendrier-header.component.css']
})

export class CalendrierHeaderComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'fr';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
}
