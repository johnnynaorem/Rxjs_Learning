import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  from,
  interval,
  map,
  pluck,
  Subscription,
  toArray,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-map-operator',
  imports: [CommonModule],
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.css',
})
export class MapOperatorComponent implements OnInit {
  constructor() {}
  obsMsg: any;
  obsMsg2: any;
  obsMsg3: any;
  sub1!: Subscription;
  sub2!: Subscription;

  ngOnInit(): void {
    const broadCast = interval(1000);

    this.sub1 = broadCast
      .pipe(map((data) => 'video' + data))
      .subscribe((res) => (this.obsMsg = res));

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 5000);

    const broadCast2 = interval(1000);

    this.sub2 = broadCast2
      .pipe(map((data) => data * 10))
      .subscribe((res) => (this.obsMsg2 = res));

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 5000);

    const broadCast3 = from([
      { name: 'johnny', id: 1, age: 25, skill: { language: 'GoLang' } },
      { name: 'Niharika', id: 2, age: 22, skill: { language: 'C#' } },
      { name: 'Rohit', id: 3, age: 23, skill: { language: 'JS' } },
    ]);

    // * zip() pairs each object from broadCast3 with a tick from interval(1000), ensuring sequential execution.
    // zip(broadCast3, interval(1000))
    //   .pipe(map(([data]) => data.name))
    //   .subscribe((res) => {
    //     this.obsMsg3 = res;
    //   });

    broadCast3
      .pipe(
        map((data) => data?.skill?.language),
        toArray()
      )
      .subscribe((res) => {
        this.obsMsg3 = res;
      });
  }
}
