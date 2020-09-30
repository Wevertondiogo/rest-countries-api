import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mode: boolean = false;
  constructor(private _service: AppService) {}

  ngOnInit(): void {}
  modeColor(): void {
    this.mode = !this.mode;
    this.conditional(this.mode);
    this._service.setMode(this.mode);
  }
  conditional(mode: boolean) {
    const body = document.querySelector('body');
    mode
      ? (body.style.backgroundColor = 'hsl(207, 26%, 17%)')
      : (body.style.backgroundColor = 'hsl(0, 0%, 98%)');
  }
}
