const cmInput = document.querySelector('#cm')
const kgInput = document.querySelector('#kg')
const form = document.querySelector('form')



form.onsubmit = (e)=>{
    e.preventDefault();
    const height = parseInt(cmInput.value);
    const weight = parseInt(kgInput.value);
    const result = document.querySelector('.result');

    if(height === '' || height <= 0 || (isNaN(height))){
        result.innerHTML = 'please provide a valid height!!';
        result.style.color = 'red';
    }
   else if(weight === '' || weight <= 0 || (isNaN(weight))){
        result.innerHTML = 'please provide a valid weight!!';
        result.style.color = 'red';
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `your BMI ${bmi}`;
    }
}