const CheckboxList = document.querySelectorAll('.custum-checkbox');
const inputfields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label');
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');


CheckboxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e)=>{
        const allGoalsAdded = [...inputfields].every((input)=> {
            return input.value;
        })
        if(allGoalsAdded) {
            checkbox.parentElement.classList.toggle('completed');
            progressValue.style.width = '33.33%'
        } else {
            progressBar.classList.add('show-error');
        }

    })
})
inputfields.forEach((input) => {
    input.addEventListener('focus', () =>{
        progressBar.classList.remove('show-error');
    })
    input.addEventListener('input', (e)=> {
        console.log(e.target);
    })
})