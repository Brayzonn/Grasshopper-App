const navMain = document.querySelector('.nav-main')
const grasshopperLogo = document.querySelector('.grasshop-logo')
const hamMenu2 =  document.querySelector('.ham-menu2')

//opening nav menu-----------------------------------------------------------
document.querySelector('.chkbx').addEventListener('change', checkBox=>{

    //default positions for all animated elements
    document.querySelector('.grasshop-main').style.zIndex = '1'
    document.querySelector('.grasshop-main').style.transition = 'all 1s 0s ease'

    hamMenu2.style.opacity = '0'
    hamMenu2.style.transition = 'all 0.80s 1.50s ease'

    grasshopperLogo.style.transition = 'all 1s 1s ease'
    grasshopperLogo.style.transform = 'translateX(-10rem)'
    grasshopperLogo.style.opacity = '0'

    navList1.style.transition = 'all 1s 1s ease'
    navList1.style.transform = 'translateX(150px)'
    navList1.style.opacity = '0'

    navList2.style.transition = 'all 1s 1.20s ease'
    navList2.style.transform = 'translateX(120px)'
    navList2.style.opacity = '0'

    navList3.style.transition = 'all 1s 1.40s ease'
    navList3.style.transform = 'translateX(90px)'
    navList3.style.opacity = '0'

    navList4.style.transition = 'all 1s 1.60s ease'
    navList4.style.transform = 'translateX(60px)'
    navList4.style.opacity = '0'

    navList5.style.transition = 'all 1s 1.80s ease'
    navList5.style.transform = 'translateX(30px)'
    navList5.style.opacity = '0'


    //if hamburber menu is clicked for nav menu to be displayed
    if(checkBox.target.checked){
        navMain.style.transition = 'all 0.60s 0s ease-in'
        navMain.style.transform = 'translateX(0)'
        document.querySelector(".body-main").style.overflowY = 'hidden'

        //MENU list translate x to normal on nav open
        document.querySelectorAll('.navv-list').forEach(menuList =>{
            menuList.style.opacity = '1'
            menuList.style.transform = 'translateX(0)'
        })

        //grasshopper translate-x on nav open
        grasshopperLogo.style.transform = 'translateX(0)'
        grasshopperLogo.style.opacity = '1'

        //hamburger closing menu opacity
        hamMenu2.style.opacity = '1'

        //get app btn animation
        document.querySelector('.getapp-btn').style.transition = 'all 0.90s 1.20s ease'
        document.querySelector('.getapp-btn').style.transform = 'translateX(0)'
        document.querySelector('.getapp-btn').style.opacity = '1'

    }

    else{
        document.querySelector('.nav-main').style.transform = 'translateX(-50rem)' 
        document.querySelector(".body-main").style.overflowX = 'hidden'
    }

})



//closing the nav menu--------------------------------------

const navList1 = document.getElementById('navv-list1')
const navList2 = document.getElementById('navv-list2')
const navList3 = document.getElementById('navv-list3')
const navList4 = document.getElementById('navv-list4')
const navList5 = document.getElementById('navv-list5')

hamMenu2.addEventListener('click', ()=>{

    //display main grasshopper for a few seconds when nav bar closes
    const showMainGrass = setInterval(()=>{
        document.querySelector('.grasshop-main').style.zIndex = '10'
        document.querySelector('.grasshop-main').style.transition = 'all 1s 0s ease'
    }, 1000)

    setTimeout(() => {
        clearInterval(showMainGrass); 
    }, 1500);

    //unchecks checkbox in hamburger menu after nav menu is closed
    document.querySelector('.chkbx').checked = false

    //animations for all elements involved
    navMain.style.transition = 'all 1s 1.60s ease' 
    navMain.style.transform = 'translateX(-50rem)' 

    document.querySelector(".body-main").style.overflowY = 'visible' 

    grasshopperLogo.style.transition = 'all 1s 0.20s ease'
    grasshopperLogo.style.transform = 'translateX(-10rem)'
    grasshopperLogo.style.opacity = '0'

    hamMenu2.style.opacity = '0'
    hamMenu2.style.transition = 'all 0.80s 1.20s ease'
    
    navList1.style.transition = 'all 1s 0.20s ease'
    navList1.style.transform = 'translateX(150px)'
    navList1.style.opacity = '0'

    navList2.style.transition = 'all 1s 0.40s ease'
    navList2.style.transform = 'translateX(120px)'
    navList2.style.opacity = '0'

    navList3.style.transition = 'all 1s 0.60s ease'
    navList3.style.transform = 'translateX(90px)'
    navList3.style.opacity = '0'

    navList4.style.transition = 'all 1s 0.80s ease'
    navList4.style.transform = 'translateX(60px)'
    navList4.style.opacity = '0'

    navList5.style.transition = 'all 1s 1s ease'
    navList5.style.transform = 'translateX(30px)'
    navList5.style.opacity = '0'

    document.querySelector('.getapp-btn').style.transition = 'all 1s 0.20s ease'
    document.querySelector('.getapp-btn').style.transform = 'translateX(25px)'
    document.querySelector('.getapp-btn').style.opacity = '0'
})





// const boxes = []
// boxes[0] = document.querySelector('#box1')
// boxes[1] = document.querySelector('#box2')
// boxes[2] = document.querySelector('#box3')
// boxes[3] = document.querySelector('#box4')
// boxes[4] = document.querySelector('#box5')

// var i = 0


// function slideBox(){
    
//     boxes[i].style.transform = 'translateX(15%)'

//     if(i < boxes.length - 1){
//         i++
//     }

//     else{
//         i = 0
//     }

//     setTimeout('slideBox()', 2000)
// }

// window.onload = slideBox

    // setInterval(()=>{
    // document.querySelectorAll('.story').forEach( storyCon => {
    // storyCon.style.transform = 'translateX(-100%)'
    // })
    // },2000);

    