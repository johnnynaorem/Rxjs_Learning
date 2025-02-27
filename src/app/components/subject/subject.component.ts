import { Component, OnDestroy } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent implements OnDestroy {
  message: string = '';
  disMessage: string = '';

  constructor(private service: RxjsServiceService) {}

  handleClick(input: any) {
    this.message = input.value;
    this.service.message.next(this.message);
    this.service.message.subscribe((res) => (this.disMessage = res));
  }

  ngOnDestroy(): void {
    this.service.message.next('');
  }
}
