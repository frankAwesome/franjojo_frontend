import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'franjojo';

  ngOnInit() {
    document.body.style.background = "url('https://i.pinimg.com/originals/6f/5c/58/6f5c58cbdb45d470fb21054337bbe0a4.gif') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
  }

  ngOnDestroy() {
    document.body.style.background = '';
    document.body.style.backgroundSize = '';
  }
}
