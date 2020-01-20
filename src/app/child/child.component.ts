import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pdata } from "../object";
import { element } from 'protractor';
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  fname: string;
  lname: string;
  gender: string;
  email: string;
  password: string;

  constructor() {}

  ngOnInit() {}

  @Input() parentdata: Pdata[];

  @Output() editData = new EventEmitter<Pdata>();

  onEdit(event:any) {
    this.editData.emit(event) ;   
  }
  
 
}
