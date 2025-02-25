import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { retry, scan } from 'rxjs';

@Component({
  selector: 'app-retry-operator',
  imports: [JsonPipe],
  templateUrl: './retry-operator.component.html',
  styleUrl: './retry-operator.component.css',
})
export class RetryOperatorComponent implements OnInit {
  datas: any;
  http = inject(HttpClient);

  ngOnInit(): void {
    // this.http
    //   .get('https://dummyjson.com/products/categories')
    //   .pipe(retry(2))
    //   .subscribe(
    //     (res) => (this.datas = res),
    //     (err) => console.log(err)
    //   );

    this.http
      .get('https://dummyjson.com/products/categories')
      .pipe(retry({ count: 2, delay: 7000 }))
      .subscribe((res) => (this.datas = res));
  }
}
