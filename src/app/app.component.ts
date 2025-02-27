import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxLoadingBar } from '@ngx-loading-bar/core';
import { RxjsServiceService } from './rxjs-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxLoadingBar, NgIf, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  topic: string = '';

  service = inject(RxjsServiceService);
  constructor() {}

  ngOnInit(): void {
    this.service.message.subscribe((res) => (this.topic = res));
  }
}
