import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { count, fromEvent } from 'rxjs';
import { RxjsServiceService } from '../../rxjs-service.service';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css',
})
export class FromEventComponent implements AfterViewInit {
  constructor(private rxjsService: RxjsServiceService) {}
  @ViewChild('addBtn') addBtn!: ElementRef;

  ngAfterViewInit(): void {
    let count: number = 1;
    let value = '';
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      value = 'Video' + count++;

      this.rxjsService.printVideo(value);
    });
  }
}
