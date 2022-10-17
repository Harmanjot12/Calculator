var num1,num2,opr,result;

function one(){
    var num = 1;
    document.getElementById("number").value += num;
 }
 
 function two(){
    var num = 2;
    document.getElementById("number").value += num;
 }
 
 function three(){
    var num = 3;
    document.getElementById("number").value += num;
 }
 
 function four(){
    var num = 4;
    document.getElementById("number").value += num;
 }
 
 function five(){
    var num = 5;
    document.getElementById("number").value += num;
 }
 
 function six(){
    var num = 6;
    document.getElementById("number").value += num;
 }
 
 function seven(){
    var num = 7;
    document.getElementById("number").value += num;
 }
 
 function eight(){
    var num = 8;
    document.getElementById("number").value += num;
 }
 
 function nine(){
    var num = 9;
    document.getElementById("number").value += num;
 }
 
 function zero(){
   var num = 0;
   document.getElementById("number").value += num;
}


          
 function add(){
   num1 = document.getElementById("number").value;
   opr = '+';
   document.getElementById('number').value = '';  
}    

function sub(){
   num1 = document.getElementById("number").value;
   opr = '-';
   document.getElementById('number').value = '';  
}

          
function mult(){
   num1 = document.getElementById("number").value;
   opr = '*';
   document.getElementById('number').value = '';  
}

          
function div(){
   num1 = document.getElementById("number").value;
   opr = '/';
   document.getElementById('number').value = '';  
}

function equalTo(){
   num2 = document.getElementById("number").value;

   if(opr=='+'){
      result = parseFloat(num1) + parseFloat(num2);
      document.getElementById("number").value = result;
   }
   
   else if(opr=='-'){
      result = parseFloat(num1) - parseFloat(num2);
      document.getElementById("number").value = result;
   }

   else if(opr=='*'){
      result = parseFloat(num1) * parseFloat(num2);
      document.getElementById("number").value = result;
   }

   else if(opr=='/'){
      result = parseFloat(num1) / parseFloat(num2);
      document.getElementById("number").value = result;
   }

   
}
