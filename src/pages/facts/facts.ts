import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import {SciencePage} from '../science/science';

/**
 * Generated class for the FactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facts',
  templateUrl: 'facts.html',
})
export class FactsPage {


  arr =[
  

    new Quizz ("FACTS" , "The song “Eye of the Tiger” by the band Survivor was the theme song for what movie released in 1982?" ,["Rocky III","Thabo Mbeki"  ," Nelson Mandela",] ,"Rocky III") ,

      new Quizz ("FACTS" , "Professional footballer Lionel Messi was born in which country??" ,["South Africa","Ghana"  ,"Argentina",] ,"Argentina"),
      
      new Quizz ("FACTS" , "The famous American writer Samuel Langhorne Clemens is better known by what pen name??" ,["Jacob Zuma" , "Thabo Mbeki" , "Mark Twain",] ,"Mark Twain"),
      new Quizz ("FACTS" , "What is the only mammal that can truly fly??" ,["The bat" , "Goat" , "Horse",] ,"The bat"),
      new Quizz ("FACTS" , "When referring to a type of music, what does R&B stand for?" ,["The bat" , "Rhythm and blues" , "Horse",] ,"Rhythm and blues"),
        
  
  
  
  
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






  

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {
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
        subTitle: ' Level 4 Passed CONGRATULATION U PASSED',
        buttons: ['OK']
    });
    alert.present();

    this.navCtrl.push(SciencePage);
  }

  else {

    const alert = this.alertCtrl.create({
      title: 'CONFIRMATION',
     subTitle: ' unfortunately you failed',
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
  

