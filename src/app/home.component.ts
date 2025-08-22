import { Component, AfterViewInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80 },
          color: { value: '#fff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 4 },
          line_linked: { enable: true, color: '#fff', opacity: 0.4 },
          move: { enable: true, speed: 2 }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }
}
