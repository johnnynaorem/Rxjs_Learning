import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsServiceService {
  message = new Subject<string>();
  // message = new BehaviorSubject<string>('Hello');

  videoEmit = new ReplaySubject<string>(5);
  constructor() {}

  printVideo(value: string) {
    const listVideo = document.createElement('li');
    listVideo.innerHTML = value;
    document.getElementById('listVideo')?.appendChild(listVideo);
  }
}
