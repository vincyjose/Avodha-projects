

const btn = document.getElementById('calculate');
//console.log(btn);
 
btn.addEventListener('click', function(){
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
 
    //console.log(weight);
    if(weight == '' || height == '' )
    {
        alert ('Enter your correct Height and Weight');
        return;
    }
    //formula to calculate BMI = weight in kg / height in meter * height in meter.
 
    height = height / 100 //to convert it to meter.
 
    let bmi = (weight / (height * height));
    bmi = bmi.toFixed(2);
    //console.log(bmi);
     
    document.querySelector('#result').innerHTML = bmi;
 
    let status = '';
 
    if(bmi < 18.5){
        status = "Underweight";
    }
    if(bmi >= 18.5 && bmi < 25){
        status = "Healthy";
    }
    if(bmi > 25 && bmi < 30){
        status = "Overweight";
    }
    if(bmi >= 30){
        status = "Obese";
    }
 
    document.querySelector('.comment').innerHTML = `Comment : You are <span>${status}</span>`;
    
});