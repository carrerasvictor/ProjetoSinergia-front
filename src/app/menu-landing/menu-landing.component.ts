import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu-landing.component.html',
  styleUrls: ['./menu-landing.component.css']
})
export class MenuLandingComponent implements OnInit {

  constructor(
    private auth: AuthService
    ) { }

  ngOnInit(): void {
  }

}
