import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css'],
})
export class WelcomepageComponent implements AfterViewInit {
  welcome = 'welcome to my project page';
  constructor() {}
  ngAfterViewInit(): void {
    anime({
      targets: '.c1 .el',
      direction: 'alternate',
      loop: true,
      scale: {
        value: '1.4',
        delay: function (el, i, l) {
          return i * 800;
        },
        duration: 700,
      },
    });

    // throw new Error('Method not implemented.');
  }

  ngOnInit() {}
}
