import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map-operator',
  imports: [],
  templateUrl: './switch-map-operator.component.html',
  styleUrl: './switch-map-operator.component.css',
})
export class SwitchMapOperatorComponent implements OnInit {
  constructor(private servive: RxjsServiceService) {}

  formating(data: string) {
    return of('Video Uploaded: ' + data).pipe(delay(1000));
  }

  ngOnInit(): void {
    const source = from(['Sports', 'News', 'Funs']);

    source
      .pipe(switchMap((res) => this.formating(res)))
      .subscribe((res) => console.log(res));
  }
}
