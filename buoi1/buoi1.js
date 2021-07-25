const yes = document.getElementById('yes');
const no = document.getElementById('no');
const answers = document.getElementById('answers');
var flexType = 1;
var count = 0;
yes.addEventListener('click', () => {

})
no.addEventListener('mouseover', () => {
    answers.classList.toggle('reverse')
    count += 1;
    if(count >= 15){
        no.remove();
    }
})

