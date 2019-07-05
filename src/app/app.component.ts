import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'offspring-web-front';

  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
      this.style = {
          'position': 'fixed',
          'width': '100%',
          'height': '100%',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };

      this.params = {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
        }
    };
  }
}
