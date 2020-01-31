let principal = document.querySelector('#input1');
let time = document.querySelector('#input2');
let rate = document.querySelector('#input3');
let interest = document.querySelector('#span');
let calculate = document.querySelector('#calculate')
let solutionField = document.querySelector('#solutionField')
let inputFields = [principal, time, rate];

calculate.addEventListener('click', function(){
    for(let i=0; i<inputFields.length; i++){
        let letters = /^[a-zA-Z]+$/
        if(inputFields[i].value < 1 || inputFields[i].value.match(letters)){
            inputFields[i].style.border = '2px solid red';

            // Sweet Alert pop-up
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter a valid Input!',
            })

        } else {
            inputFields[i].style.border = '';
            solution = (principal.value * time.value * rate.value)/100;
            interest.innerHTML = solution;
        }
        if(solution <= 0){
            solutionField.style.display = 'none'
        } else {
            solutionField.style.display = 'block'
        }
    }
})



