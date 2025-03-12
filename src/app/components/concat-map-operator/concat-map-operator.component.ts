import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';

@Component({
  selector: 'app-concat-map-operator',
  imports: [],
  templateUrl: './concat-map-operator.component.html',
  styleUrl: './concat-map-operator.component.css',
})
export class ConcatMapOperatorComponent implements OnInit {
  constructor(private service: RxjsServiceService) {}

  formating(data: string) {
    return of('Video Uploaded ' + data).pipe(delay(1000));
  }

  ngOnInit(): void {
    // ? In this I have to use concatAll otherwise it will return an Obsevable
    // const source = from(['Football', 'Cricket', 'Hockey']);
    // source
    //   .pipe(
    //     map((res) => this.formating(res)),
    //     concatAll()
    //   )
    //   .subscribe((res) => this.service.printVideo(res));

    // * But in here with the help of concatMap method I don't need to use multiple method(concatMap = map + concatAll). But it will print one by one becz concat join multiple observables and product final Observable and subscribe the next observable after completing the first Observable
    const source = from(['Football', 'Cricket', 'Hockey']);
    source
      .pipe(concatMap((res) => this.formating(res)))
      .subscribe((res) => this.service.printVideo(res));
  }
}
