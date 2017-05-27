import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent], imports: [RouterTestingModule]});
  });

  it ('should create App Component', async(() => {
    let fixture = TestBed.createComponent(AppComponent);

    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  }));
});
