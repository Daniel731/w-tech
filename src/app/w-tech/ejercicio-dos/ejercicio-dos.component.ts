import {Component, OnInit} from '@angular/core';
import {EJERCICIO_DOS} from "../data/ejercicio-dos";
import {MatRadioModule} from "@angular/material/radio";
import {MatCard} from "@angular/material/card";
import {JsonPipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ejercicio-dos',
  standalone: true,
  imports: [MatRadioModule, MatCard, NgForOf, JsonPipe, MatButton, FormsModule],
  templateUrl: './ejercicio-dos.component.html',
  styleUrl: './ejercicio-dos.component.scss'
})
export default class EjercicioDosComponent implements  OnInit{
  optionSelect: any;
  statusButton: boolean;

  ejercicioDos = EJERCICIO_DOS.item;
  constructor() {
    this.statusButton =  false;
  }

  ngOnInit(): void {
  }


  validateOption(): void {
    this.statusButton = !this.statusButton;
    console.log(this.optionSelect);
  }

  validateOptionSelect(option: any, data: any): void {
    console.log(option, data);
  }
}
