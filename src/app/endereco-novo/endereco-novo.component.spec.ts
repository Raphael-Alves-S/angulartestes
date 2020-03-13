import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoNovoComponent } from './endereco-novo.component';

describe('EnderecoNovoComponent', () => {
  let component: EnderecoNovoComponent;
  let fixture: ComponentFixture<EnderecoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
