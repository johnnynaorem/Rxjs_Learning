import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsServiceService {
  // message = new Subject<string>();
  message = new BehaviorSubject<string>('Hello');
  constructor() {}

  printVideo(value: string) {
    const listVideo = document.createElement('li');
    listVideo.innerHTML = value;
    document.getElementById('listVideo')?.appendChild(listVideo);
  }
}
