import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {SciencePage} from '../../pages/science/science';

import {FactsPage} from '../../pages/facts/facts';
/**
 * Generated class for the SoccerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soccer',
  templateUrl: 'soccer.html',
})
export class SoccerPage {

  arr =[
  

    // Science and Maths
 
    new Quizz ("Soccer" , "Which country has won the second most number of World Cups?" ,["Italy", "Brazil"  ,"Ghana",] ,"Italy") ,
 
    new Quizz ("Soccer" , "Which country has won the most FIFA World Cups ?" ,["South Afica ", "Brazil"  ,"Ghana",] ,"Brazil") ,
    new Quizz ("Soccer" , "How many times has Germany won the tournament? ?" ,["2","5"  ,"3",] ,"3") ,
    new Quizz ("Soccer" , "In what year was the first World Cup held, and in which country ?" ,["Brazil, 1934","Italy, 1930"  ," Uruguay, 1930",] ," Uruguay, 1930") ,
    new Quizz ("Soccer" , "How many countries participated in the first tournament??" ,["2","13"  ,"3",] ,"13") ,
   
   
   
   
   ];
 
 
 
   question =this.arr[0]. questions ;
     option =this.arr[0].options;
     category =this.arr[0].category;
     CorrectAnswers =this.arr[0].answers;
 
     totalQuestions = 5;
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
          //this.percentageScore  = this.Score / 5 * 100 ;

          this.percentageScore  = this.Score / this.arr.length * 100 ;

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
        subTitle: 'Level 1 Passed CONGRATULATION U PASSED' + "  " + "SCORE" + this.percentageScore + "%",
        buttons: ['OK']
    });
    alert.present();

    this.navCtrl.push(FactsPage);
  }

  else {

    const alert = this.alertCtrl.create({
      title: 'CONFIRMATION',
     subTitle: ' unfortunately you failed'   + "  " + "SCORE" + this.percentageScore + "%",
     buttons: ['OK']
 });
 alert.present();



  }
   }  
 
 }
 
 
 
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
   
 
 