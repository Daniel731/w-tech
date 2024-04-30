import {Component, OnInit} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-ejercicio-uno',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatCard,
    MatIcon,
    NgbCollapseModule
  ],
  templateUrl: './ejercicio-uno.component.html',
  styleUrl: './ejercicio-uno.component.scss'
})
export default class EjercicioUnoComponent implements OnInit{

  public showOrHideFilters: boolean;
  public isCollapsed: boolean;
  constructor() {
    this.showOrHideFilters = false;
    this.isCollapsed = true;

  }

  ngOnInit(): void {
  }
}
