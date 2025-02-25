import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-take-operator',
  imports: [CommonModule],
  templateUrl: './take-operator.component.html',
  styleUrl: './take-operator.component.css',
})
export class TakeOperatorComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild('stopButton') stopButton!: ElementRef;
  source = ['Angular', 'React', 'Vue', 'Node'];
  source1 = [10, 20, 30, 45, 40, 50];
  interval = interval(1000);
  obsData: any;

  ngOnInit(): void {
    from(this.interval)
      .pipe(
        map((data) => this.source1[data]),
        takeWhile((x) => x % 10 == 0)
      )
      .subscribe((res) => {
        const li = document.createElement('li');
        li.innerHTML = ' ' + res;
        document.getElementById('takeWhile')?.appendChild(li);
      });
  }

  ngAfterViewInit(): void {
    from(this.interval)
      .pipe(
        map((data) => this.source[data]),
        takeUntil(fromEvent(this.stopButton.nativeElement, 'click'))
      )
      .subscribe((res) => {
        const li = document.createElement('li');
        li.innerHTML = res;
        document.getElementById('listing')?.appendChild(li);
      });
  }
}
