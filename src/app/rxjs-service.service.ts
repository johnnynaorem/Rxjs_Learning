import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RxjsServiceService {
  constructor() {}

  printVideo(value: string) {
    const listVideo = document.createElement('li');
    listVideo.innerHTML = value;
    document.getElementById('listVideo')?.appendChild(listVideo);
  }
}
