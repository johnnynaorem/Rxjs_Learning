import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsServiceService {
  message = new Subject<string>();
  // message = new BehaviorSubject<string>('Hello');

  videoEmit = new ReplaySubject<string>(5); //?(5, 5000) are the number of last emit value & timeline.. I want to store in Replay Subject;
  asyncVideoEmit = new AsyncSubject<string>();
  constructor() {}

  printVideo(value: string) {
    const listVideo = document.createElement('li');
    listVideo.innerHTML = value;
    document.getElementById('listVideo')?.appendChild(listVideo);
  }
}
