import { Component, OnInit } from "@angular/core";
import { Pdata } from "../object";
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  fname: string;
  lname: string;
  emailAdd: string;
  gender: string;
  password: string;
  submit = "SUBMIT";

  constructor() {}

  ngOnInit() {}

  dataArr: Pdata[] = [];
  newData: any;

  onSubmit() {
    this.newData = new Pdata();

    this.newData.fname = this.fname;
    this.newData.lname = this.lname;
    this.newData.gender = this.gender;
    this.newData.emailAdd = this.emailAdd;
    this.newData.password = this.password;
  
    this.dataArr.push(this.newData);
    this.submit = "SUBMIT";
  }

  editdata(object: any) {
    if (this.fname === null) {
      this.fname = object.fname;
      this.lname = object.lname;
      this.gender = object.gender;
      this.emailAdd = object.emailAdd;
      this.password = object.password;
      this.submit = "SAVE";

      this.dataArr = this.dataArr.filter(item => {
        if (item != object) {
          return item;
        }
      });

    } else {
      alert("Please save changes before editing.");
    }
  }
}
