import { Injectable, Inject } from '@angular/core';
import { Question } from '../models/Questions';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	
  questions:Question[];

  constructor( @Inject('LOCALSTORAGE') private localStorage: any ) { 
/**
  this.questions = [{
  		text: "What is your name?",
  		ans: "My name is Saqib",
  		hide: true
	},{
  		text: "What is your age?",
  		ans: "My age is 23",
  		hide: true
	}];
**/

  }


  getQuestions(){
    //get questions from local storage
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
  	return this.questions;
  }

  addQuestion(ques:Question){
    
    //add questions to local storage

    this.questions.unshift(ques);
    
    //init local variable
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(ques);
      localStorage.setItem('questions', JSON.stringify(questions) )

    }else{
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(ques);
      localStorage.setItem('questions', JSON.stringify(questions) );
    }


  }

  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions) )
      }

    }

  }

}
