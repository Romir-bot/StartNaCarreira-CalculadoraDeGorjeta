function calculateTip(event) {
   event.preventDefault();
   let Romir = document.getElementById('Romir').value; 
   let serviceQual = document.getElementById('serviceQual').value;
   let numOfPeople = document.getElementById('people').value;

   if (Romir == '' | serviceQual == 0) {
    alert("Por favor, preencha os valores")
    return; 
   }

   if (numOfPeople == "" | numOfPeople <= 1) {
       numOfPeople = 1;
       document.getElementById('each').style.display = "none";
   } 
   else {  
    document.getElementById('each').style.display = "block";
   }
   let total = (Romir * serviceQual) / numOfPeople;
   total = total.toFixed(2);
   document.getElementById("tip").innerHTML = total;
   document.getElementById("totalTip").style.display = "block";
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "block";

document.getElementById('tipsForm').addEventListener ('submit', calculateTip);