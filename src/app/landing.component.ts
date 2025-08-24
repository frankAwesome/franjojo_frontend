import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  constructor(private router: Router) {}

  screwTheLogin() {
    this.router.navigate(['/home']);
  }

  ngAfterViewInit() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 120 },
          color: { value: ['#fff', '#b0c4de', '#87ceeb', '#e0e0e0'] },
          shape: { type: 'circle' },
          opacity: { value: 0.85 },
          size: { value: 2, random: true },
          line_linked: { enable: false },
          move: { enable: true, speed: 0.7, direction: 'none', random: true, straight: false, out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            repulse: { distance: 60, duration: 0.4 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }
}
