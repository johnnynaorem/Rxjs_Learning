import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  imports: [NgStyle],
  templateUrl: './tap-operator.component.html',
  styleUrl: './tap-operator.component.css',
})
export class TapOperatorComponent implements OnInit {
  color: string = '';
  ngOnInit(): void {
    const obs1 = ['Niharika', 'Raj', 'Rahul', 'Rohit'];
    const obs3 = ['red', 'green', 'blue', 'black', 'purple', 'yellow'];
    const source = interval(1500);
    const obs2 = source
      .pipe(
        tap((data) => {
          if (data > 3) {
            obs2.unsubscribe();
          }
          console.log('tap before => ', data);
        }),
        map((res) => obs1[res]),
        tap((data) => {
          console.log('tap after => ', data);
        })
      )
      .subscribe((res) => {
        const ls = document.createElement('li');
        ls.innerHTML = res;
        document.getElementById('listing')?.appendChild(ls);
      });

    const obs4 = source
      .pipe(
        tap((data) => {
          if (data > 5) {
            obs4.unsubscribe();
          }
          console.log('tap before => ', data);
        }),
        map((res) => obs3[res]),
        tap((data) => {
          console.log('tap after => ', data);
        })
      )
      .subscribe((res) => {
        const ls = document.createElement('li');
        ls.innerHTML = res;
        document.getElementById('color')?.appendChild(ls);
        this.color = res;
      });
  }
}
