var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var btnmais = document.getElementById('somar');
var btnmenos = document.getElementById('subtrair');

btnmais.addEventListener("click", increment);
btnmenos.addEventListener("click", decrement);

function increment()
{
    if(currentNumber < -1){
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'blue';
    }

    if(currentNumber < 10)
    {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentNumber = currentNumber;
    }
}

function decrement()
{
    if(currentNumber <= 0){
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'blue';
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}