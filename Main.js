let principal = document.querySelector('#input1');
let time = document.querySelector('#input2');
let rate = document.querySelector('#input3');
let interest = document.querySelector('#span');
let calculate = document.querySelector('#calculate')
let solutionField = document.querySelector('.solutionField');

let inputFields = [principal, time, rate];

calculate.addEventListener('click', function(){
    for(let i=0; i<inputFields.length; i++){
        if(inputFields[i].value < 1){
            inputFields[i].style.border = '2px solid red';
            interest.innerHTML = '';
            solutionField.style.display = 'none';

            // Sweet Alert pop-up
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter a valid Input!',
            })

        } else if((inputFields[i].value > 1)){
        let solution = `N${(principal.value * time.value * rate.value)/100}`;
        interest.innerHTML = solution;
        inputFields[i].style.border = '';
        solutionField.style.display = 'initial';
        }
    }
})