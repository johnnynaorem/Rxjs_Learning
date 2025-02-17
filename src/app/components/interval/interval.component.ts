import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { RxjsServiceService } from '../../rxjs-service.service';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css',
})
export class IntervalComponent implements OnInit {
  objMsg = '';
  videoSubscription!: Subscription;
  constructor(private rxjsService: RxjsServiceService) {}
  ngOnInit(): void {
    // const broadCastingMovie = interval(1000);
    const broadCastingMovie = timer(5000, 1000);
    this.videoSubscription = broadCastingMovie.subscribe((res) => {
      this.objMsg = 'Video ' + res;

      this.rxjsService.printVideo(this.objMsg);

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
