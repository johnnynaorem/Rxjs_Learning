import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  imports: [JsonPipe],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css',
})
export class ToArrayComponent implements OnInit {
  objMsg: any;
  objArray: any;
  ngOnInit(): void {
    const Obs1 = from(['hi', 'hello', 'Dear']);
    Obs1.pipe(toArray()).subscribe((res) => (this.objMsg = res));

    const Obs2 = interval(1000);
    Obs2.pipe(take(5), toArray()).subscribe((res) => console.log(res));

    const Obs3 = of('Apple', 'Banana', 'Orange');
    Obs3.pipe(toArray()).subscribe((res) => {
      this.objArray = res;
    });
  }
}
