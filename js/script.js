const white = document.querySelector('.bigger'),
    m = document.querySelector('.mobile_part'),
    button = document.querySelectorAll('button'),
    number = document.querySelector('.number_of'),
    pros = document.querySelector('.pros'),
    cons = document.querySelector('.cons'),
    number1 = document.querySelector('.number_of1'),
    pros1 = document.querySelector('.pros1'),
    cons1 = document.querySelector('.cons1'),
    number2 = document.querySelector('.number_of2'),
    pros2 = document.querySelector('.pros2'),
    cons2 = document.querySelector('.cons2'),
    number3 = document.querySelector('.number_of3'),
    pros3 = document.querySelector('.pros3'),
    cons3 = document.querySelector('.cons3'),
    number4 = document.querySelector('.number_of4'),
    pros4 = document.querySelector('.pros4'),
    cons4 = document.querySelector('.cons4'),
    modal = document.querySelector('.modal'),
    x = document.querySelector('.x'),
    center = document.querySelector('.center_buy'),
    thanks = document.querySelector('.thanks'),
    first = document.querySelectorAll('.first');
let t = 2,
    t1 = 1,
    t2 = 1,
    t3 = 1,
    t4 = 1;
white.addEventListener('click', () => {
    m.classList.toggle('none');
})


button.forEach(e => {
    e.addEventListener('click', () => {
        modal.classList.toggle('none');
        // document.body.style.overflow = 'hidden';
    })
});
x.addEventListener('click', () => {
    modal.classList.toggle('none');
    // document.body.style.overflow = '';

});

function add(a, b, c, t) {
    a.addEventListener('click', () => {
        b.innerHTML = t++;
    });

    c.addEventListener('click', () => {
        if (t < 0) {
            b.innerHTML = 0;
        } else {
            b.innerHTML = t--;
        }
    });
}

function openm() {
    thanks.classList.remove('none');
    document.body.style.overflow = '';

}

function close(thanks) {
    thanks.classList.remove('none');
}
center.addEventListener('click', () => {
    thanks.classList.toggle('none');

    setTimeout(function() {
        thanks.style.display = 'none';
    }, 3000);

});

first.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('hover');
    });
    setTimeout(function() {
        e.classList.remove('hover');
    }, 50);

});
console.log(first);
add(pros, number, cons, t);
add(pros1, number1, cons1, t1);
add(pros2, number2, cons2, t2);
add(pros3, number3, cons3, t3);
add(pros4, number4, cons4, t4);