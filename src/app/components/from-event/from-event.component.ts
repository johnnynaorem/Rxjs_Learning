import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { count, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css',
})
export class FromEventComponent implements AfterViewInit {
  constructor() {}
  @ViewChild('addBtn') addBtn!: ElementRef;

  ngAfterViewInit(): void {
    let count: number = 1;
    let value = '';
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      value = 'Video' + count++;

      this.printVideo(value);
    });
  }

  printVideo(value: string) {
    const listVideo = document.createElement('li');
    listVideo.innerHTML = value;
    document.getElementById('listVideo')?.appendChild(listVideo);
  }
}
