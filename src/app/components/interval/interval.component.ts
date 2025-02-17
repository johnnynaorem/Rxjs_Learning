import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css',
})
export class IntervalComponent implements OnInit {
  objMsg = '';
  videoSubscription!: Subscription;
  ngOnInit(): void {
    const broadCastingMovie = interval(1000);
    this.videoSubscription = broadCastingMovie.subscribe((res) => {
      console.log(res);

      this.objMsg = 'Video ' + res;

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
