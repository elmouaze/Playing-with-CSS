
const myDiv = document.getElementById('center');
const children = myDiv.children;

let active = 0;

myDiv.addEventListener('click', function () {

    if (active == 0)
    {
        children[0].classList.add('one');
        children[1].classList.add('two');
        children[2].classList.add('three');
        active = 1;
    }else{
        
        children[0].classList.remove('one');
        children[1].classList.remove('two');
        children[2].classList.remove('three');
        active = 0;
    }
});
