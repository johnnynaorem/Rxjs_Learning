import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.css',
})
export class FilterOperatorComponent implements OnInit {
  customerName: string = '';
  customerNameLength: any;
  customers: { name: string; age: number }[] = [];
  constructor() {}

  handleChange(event: any) {
    if (event.target.value !== '') {
      this.helper();
    } else {
      this.customers = this.obj1;
    }
  }

  handleLengthChange(event: any) {
    from(this.obj1)
      .pipe(
        filter((member) => member.name.length >= this.customerNameLength),
        toArray()
      )
      .subscribe((res) => {
        this.customers = res;
      });
  }

  obj1: { name: string; age: number }[] = [
    { name: 'John', age: 25 },
    { name: 'Doe', age: 30 },
    { name: 'Smith', age: 35 },
  ];

  helper() {
    from(this.obj1)
      .pipe(
        filter((member) => member.name === this.customerName),
        toArray()
      )
      .subscribe((res) => {
        this.customers = res;
        console.log(res);
      });
  }

  ngOnInit(): void {
    this.customers = this.obj1;
  }
}
