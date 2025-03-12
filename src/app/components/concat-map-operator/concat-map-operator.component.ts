import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';

@Component({
  selector: 'app-concat-map-operator',
  imports: [],
  templateUrl: './concat-map-operator.component.html',
  styleUrl: './concat-map-operator.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ConcatMapOperatorComponent implements OnInit {
  constructor(private service: RxjsServiceService) {}

  formating(data: string) {
    return of('Video Uploaded ' + data).pipe(delay(1000));
  }

  getHtml(res: any) {
    return of(`<div class="card scale-up-center-normal" style="width: 18rem;">
  <img src="https://th.bing.com/th/id/OIP.aBzoaVLXr_JZAwZpS5s9DwHaEJ?rs=1&pid=ImgDetMain" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name: ${res.name}</h5>
    <p class="card-text">Address: ${res.address}</p>
    <p class="card-text">Age: ${res.age}</p>
  </div>
</div>`).pipe(delay(2000));
  }

  ngOnInit(): void {
    // ? In this I have to use concatAll otherwise it will return an Obsevable
    // const source = from(['Football', 'Cricket', 'Hockey']);
    // source
    //   .pipe(
    //     map((res) => this.formating(res)),
    //     concatAll()
    //   )
    //   .subscribe((res) => this.service.printVideo(res));

    // * But in here with the help of concatMap method I don't need to use multiple method(concatMap = map + concatAll). But it will print one by one becz concat join multiple observables and product final Observable and subscribe the next observable after completing the first Observable
    const source = from([
      {
        name: 'Johnny',
        age: 23,
        address: 'Bishnupur Ward No.6',
      },
      {
        name: 'Lanchen',
        age: 24,
        address: 'Yumnam Khunou',
      },
      {
        name: 'Jaswant',
        age: 22,
        address: 'Ngakchourokpokpi',
      },
    ])
      .pipe(concatMap((res) => this.getHtml(res)))
      .subscribe((res) => {
        const div = document.createElement('div');
        div.innerHTML = res;

        document.getElementById('listNoti')?.prepend(div);
      });
  }
}
