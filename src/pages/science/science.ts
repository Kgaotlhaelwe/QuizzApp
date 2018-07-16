import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import {SoccerPage} from '../soccer/soccer' ;

//import {}

/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {

  arr =[
  

   // Science and Maths

   new Quizz ("Science and Maths" , "what is 1 + 1 ?" ,["1","2"  ,"3",] ,"2") ,

   new Quizz ("Science and Maths" , "whats square root of 25 ?" ,["1","5"  ,"3",] ,"5") ,
   new Quizz ("Science and Maths" , "10 / 5 ?" ,["2","5"  ,"3",] ,"2") ,
   new Quizz ("Science and Maths" , "20 / 5 ?" ,["2","4"  ,"3",] ,"4") ,
   new Quizz ("Science and Maths" , "20 / 5 ?" ,["2","4"  ,"3",] ,"4") ,
  
  
  
  
  ];



  question =this.arr[0]. questions ;
    option =this.arr[0].options;
    category =this.arr[0].category;
    CorrectAnswers =this.arr[0].answers;

    totalQuestions = 25;
    currentQuestion= 1;

    name  ;

    ind = 0 ;


  Score = 0 ;
  
  percentageScore=0; ;






  

  constructor(public navCtrl: NavController, public navParams: NavParams ,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactsPage');
  }




  Check(i) {

    if(this.arr[this.ind].options[i] == this.arr[this.ind].answers){
         this.Score =this.Score + 1;
          this.percentageScore  = this.Score / 5 * 100 ;

           console.log(this.percentageScore);
        
         
    }  
   
     if (this.ind < 4){
          this.ind++ ;
          this.question =this.arr[this.ind]. questions ;
           this.option =this.arr[this.ind].options;
          this.category =this.arr[this.ind].category;
           this.CorrectAnswers=this.arr[this.ind].answers;
          this.currentQuestion+=1;

      }

   

   else   if (this.percentageScore == 100){

        const alert = this.alertCtrl.create({
         title: 'CONFIRMATION',
        subTitle: ' Last level you Passed all Category',
        buttons: ['OK']
    });
    alert.present();

   
  }

  else {

    const alert = this.alertCtrl.create({
      title: 'CONFIRMATION',
     subTitle: ' unfortunately you failed',
     buttons: ['OK']
 });
 alert.present();



  }

}}






export class Quizz {
  category;
    questions ;
    options ;
    answers ;
    
    
    constructor(category, questions ,options ,answers ) {
        this.category=category;
        this.questions = questions ;
        this.options =options;
        this.answers=answers;
        

    }

  }
  

