import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Question } from "../../models/Questions";
import { IfStmt } from "@angular/compiler";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"]
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();

  text: string;
  ans: string;

  constructor() {}

  ngOnInit() {}

  addQuestion() {
    if (this.text != undefined && this.ans != undefined)
      this.questionAdded.emit({
        text: this.text,
        ans: this.ans,
        hide: true
      });
  }
}
