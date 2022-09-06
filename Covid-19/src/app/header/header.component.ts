import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCovidData: boolean = false;
  isUs: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((routerData) => {
      if (routerData instanceof ResolveEnd) {
        if (routerData.url === '/us') {
          this.isCovidData = true;
          this.isUs = true;
        } else if (routerData.url === '/data') {
          this.isUs = false;
          this.isCovidData = true;
        }
      }
    });
  }

  ngOnInit() {
    const href = this.router.url;
  }
}
