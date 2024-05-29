// document.getElementById('menuButton').addEventListener('click', function() {
//     const sideMenu = document.getElementById('sideMenu');
//     if (sideMenu.classList.contains('open')) {
//         sideMenu.classList.remove('open');
//     } else {
//         sideMenu.classList.add('open');
//     }
// });


document.getElementsByClassName('btn')[0].addEventListener('click', function() {

    const  Menu = document.getElementById('menu');
    if(Menu.classList.contains('open')){
        Menu.classList.remove('open');

    }
        else{
            Menu.classList.add('open');
        }
});

 
