import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { RxjsServiceService } from '../../rxjs-service.service';

@Component({
  selector: 'app-merge-map-operator',
  imports: [],
  templateUrl: './merge-map-operator.component.html',
  styleUrl: './merge-map-operator.component.css',
})
export class MergeMapOperatorComponent implements OnInit {
  constructor(private service: RxjsServiceService) {}
  fomating(res: string) {
    return of('Video Uploaded ' + res);
  }
  ngOnInit(): void {
    const source = ['Football', 'Cricket', 'Hockey'];

    // ? It will return as Observable
    // from(source)
    //   .pipe(
    //     map((res) => this.fomating(res)),
    //   )
    //   .subscribe((res) => console.log(res));

    // ? It will return as stream of value becz of mergeAll() method
    // from(source)
    //   .pipe(
    //     map((res) => this.fomating(res)),
    //     mergeAll()
    //   )
    //   .subscribe((res) => console.log(res));

    // ? It solved the problem using a single method (mergeMap())
    from(source)
      .pipe(mergeMap((res) => this.fomating(res)))
      .subscribe((res) => this.service.printVideo(res));
  }
}
