import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pipe13';
  today: number = Date.now();
  value: string = '';
  change(value: string) {
    this.value = value;
  }


  birthday = new Date(1988, 3, 15);
  a: number = 0.259;

  pi: number = 3.14159265359;

  // Async pipe
  greeting: Promise<string> | null = null;
  arrived: boolean = false;
  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }

  // JsonPipe
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

}
