import { Component, OnInit } from '@angular/core';
import { concatMap, from, Observable, of, pipe } from 'rxjs';
import { RxjsServiceService } from '../../rxjs-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-of-from',
  imports: [JsonPipe],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css',
})
export class OfFromComponent implements OnInit {
  constructor(private rxjsService: RxjsServiceService) {}
  obsMsg: any;

  ngOnInit(): void {
    const ofValue = of('apple', 'Mango', 'Banana');
    ofValue.subscribe((res) => this.rxjsService.printVideo(res));

    const Obs2 = of({ name: 'johnny', surname: 'Naorem', age: '23' });
    Obs2.subscribe((res) => {
      this.obsMsg = res;
    });

    const Obs3 = from(['BMW', 'Mercedes', 'Audi', 'Volvo']);
    Obs3.subscribe((res) => {
      const list = document.createElement('li');
      list.innerHTML = res;
      document.getElementById('fromArray')?.appendChild(list);
    });

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolve');
      }, 2000);
    });
    const Obs4 = from(promise);
    Obs4.subscribe((res) => {
      const p: any = document.getElementById('fromPromise');
      p.innerHTML = res;
    });
  }
}
