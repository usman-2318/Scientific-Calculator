// =================================================
// =============== BASIC SCREEN ====================
// =================================================

let basicScreen =
document.getElementById("basicScreen");

let openScientific =
document.getElementById("openScientific");



// =================================================
// ============ SCIENTIFIC SCREEN ==================
// =================================================

let scientificScreen =
document.getElementById("scientificScreen");

let backToBasic =
document.getElementById("backToBasic");

let openInverse =
document.getElementById("openInverse");



// =================================================
// ============== INVERSE SCREEN ===================
// =================================================

let inverseScreen =
document.getElementById("inverseScreen");

let backToScientific =
document.getElementById("backToScientific");

let backToBasicFromInverse =
document.getElementById("backToBasicFromInverse");





// =================================================
// ================= NAVIGATION ====================
// =================================================

// Open Scientific Screen

openScientific.onclick = function(){

   basicScreen.style.display = "none";

   scientificScreen.style.display = "block";

};



// Back To Basic From Scientific

backToBasic.onclick = function(){

   scientificScreen.style.display = "none";

   basicScreen.style.display = "block";

};



// Open Inverse Screen

openInverse.onclick = function(){

   scientificScreen.style.display = "none";

   inverseScreen.style.display = "block";

};



// Back To Scientific

backToScientific.onclick = function(){

   inverseScreen.style.display = "none";

   scientificScreen.style.display = "block";

};



// Back To Basic From Inverse

backToBasicFromInverse.onclick = function(){

   inverseScreen.style.display = "none";

   basicScreen.style.display = "block";

};





// =================================================
// ============= BASIC CALCULATOR ==================
// =================================================

// Main display

let display =
document.getElementById("display");



// All calculator buttons

let buttons =
document.querySelectorAll(".btn");





// =================================================
// ================ BUTTON EVENTS ==================
// =================================================

buttons.forEach(function(button){

   button.onclick = function(){

      // Button text

      let value =
      button.innerText;





      // ================= AC =================

      if(value == "AC"){

         display.value = "";

      }





      // ================= DEL =================

      else if(value == "DEL"){

         display.value =
         display.value.slice(0,-1);

      }





      // ================= EQUAL =================

      else if(value == "="){

         try{

            display.value =
            eval(display.value);

         }

         catch{

            display.value = "Error";

         }

      }





      // ================= NORMAL BUTTONS =================

      else{

         display.value += value;

      }

   };

});






// =================================================
// ============== SCIENTIFIC DISPLAY ===============
// =================================================

let scientificDisplay =
document.getElementById("scientificDisplay");



// =================================================
// =========== SCIENTIFIC BUTTONS ==================
// =================================================

let scientificButtons =
scientificScreen.querySelectorAll(".btn");





// =================================================
// =========== SCIENTIFIC BUTTON EVENTS ============
// =================================================

scientificButtons.forEach(function(button){

   button.onclick = function(){

      // Button Value

      let value =
      button.innerText;





      // ================= AC =================

      if(value == "AC"){

         scientificDisplay.value = "";

      }





      // ================= DEL =================

      else if(value == "DEL"){

         scientificDisplay.value =
         scientificDisplay.value.slice(0,-1);

      }





     // ================= EQUAL =================

else if(value == "="){

   try{

      let expression =
      scientificDisplay.value;



      // ================= SYMBOLS =================

      expression =
      expression.replaceAll("π", Math.PI);

      expression =
      expression.replaceAll("e", Math.E);

      expression =
      expression.replaceAll("^", "**");



      // ================= SCIENTIFIC FUNCTIONS =================

      expression =
      expression.replaceAll(
      "sin(",
      "Math.sin("
      );



      expression =
      expression.replaceAll(
      "cos(",
      "Math.cos("
      );



      expression =
      expression.replaceAll(
      "tan(",
      "Math.tan("
      );



      expression =
      expression.replaceAll(
      "log(",
      "Math.log10("
      );



      expression =
      expression.replaceAll(
      "ln(",
      "Math.log("
      );



      expression =
      expression.replaceAll(
      "√(",
      "Math.sqrt("
      );



      // ================= FINAL RESULT =================


      // Auto close brackets

let openBrackets =
(expression.match(/\(/g) || []).length;

let closeBrackets =
(expression.match(/\)/g) || []).length;



while(closeBrackets < openBrackets){

   expression += ")";

   closeBrackets++;

}

      scientificDisplay.value =
      eval(expression);

   }

   catch{

      scientificDisplay.value = "Error";

   }

}





// ================= SIN =================

else if(value == "sin"){

   scientificDisplay.value += "sin(";

}





// ================= COS =================

else if(value == "cos"){

   scientificDisplay.value += "cos(";

}





// ================= TAN =================

else if(value == "tan"){

   scientificDisplay.value += "tan(";

}





// ================= LN =================

else if(value == "ln"){

   scientificDisplay.value += "ln(";

}





// ================= LOG =================

else if(value == "log"){

   scientificDisplay.value += "log(";

}





// ================= SQRT =================

else if(value == "√"){

   scientificDisplay.value += "√(";

}





// ================= PI =================

else if(value == "π"){

   scientificDisplay.value += "π";

}





// ================= E =================

else if(value == "e"){

   scientificDisplay.value += "e";

}





// ================= POWER =================

else if(value == "^"){

   scientificDisplay.value += "^";

}





// ================= NORMAL BUTTONS =================

else{

   scientificDisplay.value += value;

} 
};

});




// =================================================
// ============== INVERSE DISPLAY ==================
// =================================================

let inverseDisplay =
document.getElementById("inverseDisplay");



// =================================================
// ============= INVERSE BUTTONS ===================
// =================================================

let inverseButtons =
inverseScreen.querySelectorAll(".btn");





// =================================================
// ============ INVERSE BUTTON EVENTS ==============
// =================================================

inverseButtons.forEach(function(button){

   button.onclick = function(){

      // Button value

      let value =
      button.innerText;





      // ================= AC =================

      if(value == "AC"){

         inverseDisplay.value = "";

      }





      // ================= DEL =================

      else if(value == "DEL"){

         inverseDisplay.value =
         inverseDisplay.value.slice(0,-1);

      }





      // ================= EQUAL =================

      else if(value == "="){

         try{

            let expression =
            inverseDisplay.value;



            // Replace symbols

            expression =
            expression.replaceAll("^", "**");



            // ================= INVERSE FUNCTIONS =================

            expression =
            expression.replaceAll(
            "sin⁻¹(",
            "Math.asin("
            );



            expression =
            expression.replaceAll(
            "cos⁻¹(",
            "Math.acos("
            );



            expression =
            expression.replaceAll(
            "tan⁻¹(",
            "Math.atan("
            );



            // ================= AUTO CLOSE BRACKETS =================

            let openBrackets =
            (expression.match(/\(/g) || []).length;

            let closeBrackets =
            (expression.match(/\)/g) || []).length;



            while(closeBrackets < openBrackets){

               expression += ")";

               closeBrackets++;

            }



            // ================= FINAL RESULT =================

            inverseDisplay.value =
            eval(expression);

         }

         catch{

            inverseDisplay.value = "Error";

         }

      }





      // ================= SIN INVERSE =================

      else if(value == "sin⁻¹"){

         inverseDisplay.value += "sin⁻¹(";

      }





      // ================= COS INVERSE =================

      else if(value == "cos⁻¹"){

         inverseDisplay.value += "cos⁻¹(";

      }





      // ================= TAN INVERSE =================

      else if(value == "tan⁻¹"){

         inverseDisplay.value += "tan⁻¹(";

      }





      // ================= EX =================

      else if(value == "eˣ"){

         inverseDisplay.value += "Math.exp(";

      }





      // ================= 10 POWER X =================

      else if(value == "10ˣ"){

         inverseDisplay.value += "10**";

      }





      // ================= X SQUARE =================

      else if(value == "x²"){

         inverseDisplay.value += "**2";

      }





      // ================= X CUBE =================

      else if(value == "x³"){

         inverseDisplay.value += "**3";

      }





      // ================= 1/X =================

      else if(value == "1/x"){

         inverseDisplay.value =
         1 / inverseDisplay.value;

      }





      // ================= FACTORIAL =================

      else if(value == "x!"){

         let num =
         parseInt(inverseDisplay.value);

         let fact = 1;

         for(let i = 1; i <= num; i++){

            fact *= i;

         }

         inverseDisplay.value = fact;

      }



      // ================= NORMAL BUTTONS =================

      else{
         inverseDisplay.value += value;
      }

   };

});