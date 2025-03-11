import { NgFor, NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject-operator',
  imports: [NgFor, NgStyle],
  templateUrl: './replay-subject-operator.component.html',
  styleUrl: './replay-subject-operator.component.css',
})
export class ReplaySubjectOperatorComponent implements OnInit {
  isSubscribeMode1: boolean = false;
  isSubscribeMode2: boolean = false;
  user1 = ['Angular', 'React'];
  user2: string[] = [];
  user3: string[] = [];

  subsriptionUser2!: Subscription;
  subsriptionUser3!: Subscription;
  constructor(private service: RxjsServiceService) {}
  onAddVideo(video: any) {
    this.service.videoEmit.next(video.value);
    video.value = '';
  }
  toggle(): void {
    if (this.isSubscribeMode1) {
      this.subsriptionUser2.unsubscribe();
    } else if (!this.isSubscribeMode1) {
      this.subsriptionUser2 = this.service.videoEmit.subscribe((res) =>
        this.user2.push(res)
      );
    }
    this.isSubscribeMode1 = !this.isSubscribeMode1;
  }
  toggleUser3(): void {
    if (this.isSubscribeMode2) {
      this.subsriptionUser3.unsubscribe();
    } else if (!this.isSubscribeMode2) {
      this.subsriptionUser3 = this.service.videoEmit.subscribe((res) =>
        this.user3.push(res)
      );
    }
    this.isSubscribeMode2 = !this.isSubscribeMode2;
  }
  ngOnInit(): void {
    this.service.videoEmit.subscribe((res) => this.user1.push(res));
  }
}
