import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';

@Component({
  selector: 'app-async-subject',
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css',
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit!: string;
  constructor(private service: RxjsServiceService) {}
  handleAddVideo(video: any) {
    // console.log(video.value);
    this.service.asyncVideoEmit.next(video.value);
  }
  handleComplete() {
    console.log('Completed');
    this.service.asyncVideoEmit.complete();
  }

  ngOnInit(): void {
    this.service.asyncVideoEmit.subscribe((res) => {
      console.log(res);
      this.asyncVideoEmit = res;
    });
  }
}
