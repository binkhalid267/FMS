"use strick";
class Food{
    constructor(item1,item2,item3,item4,item5){
        this.item1=item1;
        this.item2=item2;
        this.item3=item3;
        this.item4=item4;
        this.item5=item5;
    }
    getItem1(){
        return `Dear ${askForm} your ${this.item1} is ready`;
    }
    getItem2(){
        return `Dear ${askForm} your ${this.item2} is ready`;
    }
    getItem3(){
        return `Dear ${askForm} your ${this.item3} is ready`;
    }
    getItem4(){
        return `Dear ${askForm} your ${this.item4} is ready`;
    }
    getItem5(){
        return `Dear ${askForm} your ${this.item5} is ready`;
    }
    getError(){
        return `Unfound input`;
    }
    invalidError(){
        return `Empty input..please enter an input for your offer`;
    }
}


let foodStocks,askForm,foodAmounts;
foodStocks=new Food('rice','beans','dodo','pap','meats');

//name function script code
function setName(){
    askForm=prompt('Enter your name here..','');
}
setTimeout(setName,3000);
//function for popup page 
function myFromPopUp(){
    let myHeader,myPopUp;
    myPopUp=document.getElementById('info');
    myHeader=document.querySelector('header');
    myPopUp.style.display='block';
    myHeader.style.display='none';    
}
//function for oder page
function myListItems(){
    let myForm,myPopUp2,myPopUp3,myButton;
    myForm=document.forms['FMS']['offer'].value;
    myPopUp2=document.getElementById('box');
    myPopUp3=document.getElementById('info');
    if(myForm == 1){
        myPopUp2.style.display='block';
        myPopUp3.style.display='none';
        myPopUp2.innerHTML=`${foodStocks.getItem1()}`;
        myPopUp2.style.backgroundColor='green';
        myPopUp2.style.textAlign='center';
        myPopUp2.style.fontSize='large';
        myPopUp2.style.textTransform='uppercase';
        myPopUp2.style.color='#fff';
        return true;
    } else if(myForm == 2){
        myPopUp2.style.display='block';
        myPopUp3.style.display='none';
        myPopUp2.innerHTML=`${foodStocks.getItem2()}`;
        myPopUp2.style.backgroundColor='green';
        myPopUp2.style.textAlign='center';
        myPopUp2.style.fontSize='large';
        myPopUp2.style.textTransform='uppercase';
        myPopUp2.style.color='#fff';
        return true;
    } else if(myForm == 3){
        myPopUp2.style.display='block';
        myPopUp3.style.display='none';
        myPopUp2.innerHTML=`${foodStocks.getItem3()}`;
        myPopUp2.style.backgroundColor='green';
        myPopUp2.style.textAlign='center';
        myPopUp2.style.fontSize='large';
        myPopUp2.style.textTransform='uppercase';
        myPopUp2.style.color='#fff';
        return true;
    } else if(myForm == 4){
        myPopUp2.style.display='block';
        myPopUp3.style.display='none';
        myPopUp2.innerHTML=`${foodStocks.getItem4()}`;
        myPopUp2.style.backgroundColor='green';
        myPopUp2.style.textAlign='center';
        myPopUp2.style.fontSize='large';
        myPopUp2.style.textTransform='uppercase';
        myPopUp2.style.color='#fff';
        return true;
    } else if(myForm == 5){
        myPopUp2.style.display='block';
        myPopUp3.style.display='none';
        myPopUp2.innerHTML=`${foodStocks.getItem5()}`;
        myPopUp2.style.backgroundColor='green';
        myPopUp2.style.textAlign='center';
        myPopUp2.style.fontSize='large';
        myPopUp2.style.textTransform='uppercase';
        myPopUp2.style.color='#fff';
        return true;
    } else if(myForm == ''){
        myPopUp2.style.display='block';
        myPopUp3.style.display='none';
        myPopUp2.innerHTML=`${foodStocks.invalidError()}`;
        myPopUp2.style.backgroundColor='yellow';
        myPopUp2.style.textAlign='center';
        myPopUp2.style.fontSize='large';
        myPopUp2.style.textTransform='uppercase';
        myPopUp2.style.color='#fff';
        return false;
    } else {
        myPopUp2.style.display='block';
        myPopUp3.style.display='none';
        myPopUp2.innerHTML=`${foodStocks.getError()}`;
        myPopUp2.style.backgroundColor='red';
        myPopUp2.style.textAlign='center';
        myPopUp2.style.fontSize='large';
        myPopUp2.style.textTransform='uppercase';
        myPopUp2.style.color='#fff';
        return false
    }
}