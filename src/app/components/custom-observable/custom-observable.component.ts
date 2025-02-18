import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  imports: [CommonModule],
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.css',
})
export class CustomObservableComponent implements OnInit {
  obsMsg: any;
  status: string = '';
  ngOnInit(): void {
    const CustomObservable = new Observable<string>((obj) => {
      setTimeout(() => {
        obj.next('Data 1 Emit');
      }, 1000);

      setTimeout(() => {
        obj.next('Data 2 Emit');
      }, 2000);

      setTimeout(() => {
        // obj.error(new Error('Limit Exceed'));
      }, 3000);

      setTimeout(() => {
        obj.next('Date 4 Emit');
        obj.complete();
      }, 4000);
    });

    // CustomObservable.subscribe(
    //   (res) => {
    //     console.log(res);
    //     const li = document.createElement('li');
    //     li.innerHTML = res;
    //     document.getElementById('display')?.appendChild(li);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.status = 'error';
    //   },
    //   () => console.log('Completed')
    // );

    CustomObservable.subscribe({
      next: (res) => {
        const li = document.createElement('li');
        li.innerHTML = res;
        document.getElementById('display')?.appendChild(li);
        this.status = 'success';
      },
      error: (err) => {
        console.log(err), (this.status = 'error');
      },
      complete: () => {
        console.log('Completed'), (this.status = 'completed');
      },
    });
  }
}
