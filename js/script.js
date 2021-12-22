window.addEventListener('load',function(){
    let tog = document.querySelector('.toggle');
    let sidebar = document.querySelector('.sidebar');
    let menu = document.querySelector('.sidebar .menu');
    let banner = document.querySelector('.banner');
    let logo = document.querySelector('.logoText');
    let ky = document.querySelector('.ky');
    let sci = document.querySelector('.sci');
    let cont = document.querySelector('.container');
    let ser = document.querySelector('.services');
    let serBx = document.querySelectorAll('.servicesBx')
    let dark = document.querySelector('.darkMode');
    let title = document.querySelectorAll('.title');
    let about = document.querySelector('.about');
    let work = document.querySelector('.work');
    let contact = document.querySelector('.contact');
    let copyright = document.querySelector('.copyright');

    for(let i = 0; i < serBx.length;i++){
        dark.addEventListener('click',function(){
            serBx[i].classList.toggle('dark');
            title[i].classList.toggle('white');
        })
    }
    dark.addEventListener('click',function(){
        dark.classList.toggle('active')
        banner.classList.toggle('dark');
        logo.classList.toggle('dark');
        ky.classList.toggle('dark');
        cont.classList.toggle('dark');
        sci.classList.toggle('dark');
        ser.classList.toggle('dark');
        about.classList.toggle('dark');
        work.classList.toggle('dark');
        contact.classList.toggle('dark');
        copyright.classList.toggle('dark');
        // serBx.classList.toggle('dark');
        // title.classList.toggle('white');
        
    })

    tog.addEventListener('click', function(){
        tog.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
    menu.addEventListener('click',function() {
        tog.classList.remove('active');
        sidebar.classList.remove('active');
    });
});
