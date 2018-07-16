import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {SoccerPage} from '../soccer/soccer';

import {SciencePage} from '../science/science';
/**
 * Generated class for the FirstHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-home',
  templateUrl: 'first-home.html',
})
export class FirstHomePage {


  arr =[
  

  new Quizz ("IT AND PROGRAMMING" , "What tag is used to create a line-break without an extra space between the text blocks?" , [
"lb ", "br" ,"break" ] , "br") ,
new Quizz ("IT AND PROGRAMMING" ,"Which two tags below make the text visually bold?" , ["sub and sup" ,"ins and del ", "B and Strong"], "B and Strong"),

new Quizz ("IT AND PROGRAMMING" , "What tag is used to create a line-break without an extra space between the text blocks?" , [
"lb ", "br" ,"break" ,"linebreak"] , "br") ,

new Quizz ("IT AND PROGRAMMING" , "What tag is used to create a line-break without an extra space between the text blocks?" , [
"lb ", "br" ,"break" ,"linebreak"] , "br") ,

new Quizz ("IT AND PROGRAMMING" , "What tag is used to create a line-break without an extra space between the text blocks?" , [
"lb ", "br" ,"break" ,"linebreak"] , "br") ,

      




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
  console.log('ionViewDidLoad FirstHomePage');
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
        subTitle: ' Level 1 Passed CONGRATULATION U PASSED'  + "SCORE" + this.percentageScore + "%",
        buttons: ['OK']
    });
    alert.present();

    this.navCtrl.push(SoccerPage);
  }

  else {

    const alert = this.alertCtrl.create({
      title: 'CONFIRMATION',
     subTitle: ' unfortunately you failed'   + "SCORE" + this.percentageScore + "%",
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
  

        

       
         
  
     
  















  
    
  
  

















  






