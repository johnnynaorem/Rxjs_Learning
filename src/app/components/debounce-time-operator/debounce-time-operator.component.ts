import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time-operator',
  imports: [],
  templateUrl: './debounce-time-operator.component.html',
  styleUrl: './debounce-time-operator.component.css',
})
export class DebounceTimeOperatorComponent implements AfterViewInit {
  @ViewChild('search') searchInput!: ElementRef;
  status: any;
  http = inject(HttpClient);
  datas!: any;

  constructor(private loadingBar: LoadingBarService) {}

  fetchProduct(searchValue: string) {
    this.http
      .get(`https://dummyjson.com/products/search?q=${searchValue}`)
      .subscribe((data) => {
        console.log(data);
        this.datas = data;
        this.status = 'Data fetched';
        this.loadingBar.useRef().stop();
      });
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          // this.status = 'Typing...';
          return event.target.value;
        }),
        debounceTime(1500),
        distinctUntilChanged()
      )
      .subscribe((input: any) => {
        this.loadingBar.start();
        this.status = 'Fatching data';

        console.log(input);
        this.fetchProduct(input);
      });
  }
}
