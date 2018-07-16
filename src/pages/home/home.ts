import { Component, Query } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import {FirstHomePage} from '../../pages/first-home/first-home'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	
	 arr =[
                                //Political
        new Quizz("Political" ,"Who is  the  first black president in South Africa ? " ,["Jacob Zuma" , "Thabo Mbeki" ," Nelson Mandela"], " Nelson Mandela"),
        new Quizz("Political" ,"When is TRC ?" , ["16 Dec", "9 August" ,"21 March"] , "16 Dec" ),
        new Quizz("Political" ,"When was ANC formed ?" , ["1992","1912","2010"],"1912"),
        new Quizz("Political" ,"When is freedom day ? " ,["27 April", "9 August" ,"21 March"],"27 April"),
        new Quizz ("Political" ,"What does Eff stand for ?" , ["Economic freedom fight","Economical freedom figth", "Economic Figters"] ,"Economic freedom fight"),
                             
      ];  

      question =this.arr[0].questions ;
      option =this.arr[0].options;
      category =this.arr[0].category;
      CorrectAnswers =this.arr[0].answers;
  
      totalQuestions = 5;
      currentQuestion= 1;
  
      
  
      ind = 0 ;
  
  
    Score = 0 ;
    
    percentageScore=0; ;
  
    constructor(public navCtrl: NavController , public alertCtrl: AlertController) {

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
            subTitle: ' Level 1 Passed CONGRATULATION U PASSED'  + "SCORE" + this.percentageScore + "%",
            buttons: ['OK']
        });
        alert.present();
  
        this.navCtrl.push(FirstHomePage);
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
              
 

         
       


        
    
          

       
        

      
                         
            


   
	
	
	
 
                
                
        
           
        




