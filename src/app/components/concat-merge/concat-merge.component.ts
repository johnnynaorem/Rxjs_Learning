import { Component } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { RxjsServiceService } from '../../rxjs-service.service';

@Component({
  selector: 'app-concat-merge',
  imports: [],
  templateUrl: './concat-merge.component.html',
  styleUrl: './concat-merge.component.css',
})
export class ConcatMergeComponent {
  constructor(private service: RxjsServiceService) {}
  sportChannel = interval(1500).pipe(
    map((v) => 'Sport Video # ' + (v + 1)),
    take(5)
  );
  newsChannel = interval(2000).pipe(
    map((v) => 'News Video # ' + (v + 1)),
    take(3)
  );
  funChannel = interval(1000).pipe(
    map((v) => 'Fun Video # ' + (v + 1)),
    take(2)
  );

  // finalObservable = concat(
  //   this.sportChannel,
  //   this.newsChannel,
  //   this.funChannel
  // );

  finalObservable = merge(this.sportChannel, this.newsChannel, this.funChannel);

  handleSubscribe(type: string) {
    this.finalObservable.subscribe((res) => {
      this.service.printVideo(res);
    });
  }
}
