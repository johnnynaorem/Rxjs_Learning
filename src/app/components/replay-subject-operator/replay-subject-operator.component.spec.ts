import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectOperatorComponent } from './replay-subject-operator.component';

describe('ReplaySubjectOperatorComponent', () => {
  let component: ReplaySubjectOperatorComponent;
  let fixture: ComponentFixture<ReplaySubjectOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySubjectOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaySubjectOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
