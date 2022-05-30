const navMain = document.querySelector(".nav-main");
const grasshopperLogo = document.querySelector(".grasshop-logo");
const hamMenu2 = document.querySelector(".ham-menu2");

//opening nav menu---------------------------------------------------------------------------------------------------------------------------->
document.querySelector(".chkbx").addEventListener("change", (checkBox) => {
  //default positions for all animated elements
  document.querySelector(".grasshop-main").style.zIndex = "1";
  document.querySelector(".grasshop-main").style.transition = "all 1s 0s ease";

  hamMenu2.style.opacity = "0";
  hamMenu2.style.transition = "all 0.80s 1.50s ease";

  grasshopperLogo.style.transition = "all 1s 1s ease";
  grasshopperLogo.style.transform = "translateX(-10rem)";
  grasshopperLogo.style.opacity = "0";

  navList1.style.transition = "all 1s 1s ease";
  navList1.style.transform = "translateX(150px)";
  navList1.style.opacity = "0";

  navList2.style.transition = "all 1s 1.20s ease";
  navList2.style.transform = "translateX(120px)";
  navList2.style.opacity = "0";

  navList3.style.transition = "all 1s 1.40s ease";
  navList3.style.transform = "translateX(90px)";
  navList3.style.opacity = "0";

  navList4.style.transition = "all 1s 1.60s ease";
  navList4.style.transform = "translateX(60px)";
  navList4.style.opacity = "0";

  navList5.style.transition = "all 1s 1.80s ease";
  navList5.style.transform = "translateX(30px)";
  navList5.style.opacity = "0";

  //if hamburber menu is clicked for nav menu to be displayed
  if(checkBox.target.checked) {
    navMain.style.transition = "all 0.60s 0s ease-in";
    navMain.style.transform = "translateX(0)";
    document.querySelector(".body-main").style.overflowY = "hidden";

    //MENU list translate x to normal on nav open
    document.querySelectorAll(".navv-list").forEach((menuList) => {
      menuList.style.opacity = "1";
      menuList.style.transform = "translateX(0)";
    });

    //grasshopper translate-x on nav open
    grasshopperLogo.style.transform = "translateX(0)";
    grasshopperLogo.style.opacity = "1";

    //hamburger closing menu opacity
    hamMenu2.style.opacity = "1";

    //get app btn animation
    document.querySelector(".getapp-btn").style.transition = "all 0.90s 1.20s ease";
    document.querySelector(".getapp-btn").style.transform = "translateX(0)";
    document.querySelector(".getapp-btn").style.opacity = "1";
  } else {
    document.querySelector(".nav-main").style.transform = "translateX(-50rem)";
    document.querySelector(".body-main").style.overflowX = "hidden";
  }
});

//closing the nav menu--------------------------------------

const navList1 = document.getElementById("navv-list1");
const navList2 = document.getElementById("navv-list2");
const navList3 = document.getElementById("navv-list3");
const navList4 = document.getElementById("navv-list4");
const navList5 = document.getElementById("navv-list5");

hamMenu2.addEventListener("click", () => {
  //display main grasshopper for a few seconds when nav bar closes
  const showMainGrass = setInterval(() => {
    document.querySelector(".grasshop-main").style.zIndex = "10";
    document.querySelector(".grasshop-main").style.transition =
      "all 1s 0s ease";
  }, 1000);

  setTimeout(() => {
    clearInterval(showMainGrass);
  }, 1500);

  //unchecks checkbox in hamburger menu after nav menu is closed
  document.querySelector(".chkbx").checked = false;

  //animations for all elements involved
  navMain.style.transition = "all 1s 1.60s ease";
  navMain.style.transform = "translateX(-90rem)";

  document.querySelector(".body-main").style.overflowY = "visible";

  grasshopperLogo.style.transition = "all 1s 0.20s ease";
  grasshopperLogo.style.transform = "translateX(-10rem)";
  grasshopperLogo.style.opacity = "0";

  hamMenu2.style.opacity = "0";
  hamMenu2.style.transition = "all 0.80s 1.20s ease";

  navList1.style.transition = "all 1s 0.20s ease";
  navList1.style.transform = "translateX(150px)";
  navList1.style.opacity = "0";

  navList2.style.transition = "all 1s 0.40s ease";
  navList2.style.transform = "translateX(120px)";
  navList2.style.opacity = "0";

  navList3.style.transition = "all 1s 0.60s ease";
  navList3.style.transform = "translateX(90px)";
  navList3.style.opacity = "0";

  navList4.style.transition = "all 1s 0.80s ease";
  navList4.style.transform = "translateX(60px)";
  navList4.style.opacity = "0";

  navList5.style.transition = "all 1s 1s ease";
  navList5.style.transform = "translateX(30px)";
  navList5.style.opacity = "0";

  document.querySelector(".getapp-btn").style.transition = "all 1s 0.20s ease";
  document.querySelector(".getapp-btn").style.transform = "translateX(25px)";
  document.querySelector(".getapp-btn").style.opacity = "0";
});


// showcase animations------------------------------------------------------------------------------------------------------------------------->
//still havent figured how to move objects on cursor movement.. Help would be very much appreciated
let wholeShowcase = document.querySelector('.showcase');

  function doAnimation(e){
    let x = e.clientX
    let y = e.clientY
 
    document.querySelectorAll('.img-anime').forEach(imageIn =>{

      if(`${x++}`){
      imageIn.style.transform = 'translateX(20px)'
      }else{
        return
      }
      if(`${x--}`){
      imageIn.style.transform = 'translateX(-20px)'
      }else{
        return
      }
      if(`${y--}`){
      imageIn.style.transform = 'translateY(-20px)'
      }else{
        return
      }
      if(`${y++}`){
      imageIn.style.transform = 'translateY(20px)'
      }
      else{
        return   
      }
    })
    }


     // When the user scrolls down, the navbar is displayed--------------------------------------------------------------------------->

      window.onscroll = function() {
          scroll()
        };

      function scroll() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
              document.querySelector(".fixed-menu-largescreen").style.top = "0";
          }
          else {
              document.querySelector(".fixed-menu-largescreen").style.top = "-8rem";
          }
      }


      //features slideshow section------------------------------------------------------------------------------------------------------>

      let featuresAll = document.querySelector('.features-all')
 
      //create features-inner div 
      let featureInner = document.createElement('div')
      featureInner.className = 'feature-inner'

      //append inner to features all
      featuresAll.appendChild(featureInner)

       //create hld div
       let hld = document.createElement('div')
       hld.className = 'hld'

      //append hld to inner feature
      featureInner.appendChild(hld)

      //create icon image
      let iconImgg = document.createElement('img')
      iconImgg.alt = 'logo-img'
      iconImgg.className = 'logo-img'
    
      //create icon text 
      let iconTxtElement = document.createElement('p')
      iconTxtElement.className = 'logo-p'

      //create radio div
      let radioAll = document.createElement('div')
      radioAll.classList = 'dot-holder'

      //create radio elements
      let radioInner1 = document.createElement('span')
      radioInner1.className = 'dot'
      let radioInner2 = document.createElement('span')
      radioInner2.className = 'dot'
      let radioInner3 = document.createElement('span')
      radioInner3.className = 'dot'
      let radioInner4 = document.createElement('span')
      radioInner4.className = 'dot'


      //append radio elements to radio div
      radioAll.appendChild(radioInner1)
      radioAll.appendChild(radioInner2)
      radioAll.appendChild(radioInner3)
      radioAll.appendChild(radioInner4)
      

      //append icon image and icon text to hld class
      hld.appendChild(iconImgg)
      hld.appendChild(iconTxtElement)
      hld.appendChild(radioAll)
     
      //create display image
      let dispImg = document.createElement('img')
      dispImg.alt = 'disp-img'
      dispImg.className = 'disp-img'

      //append icon image and icon text to hld class
      featureInner.appendChild(dispImg)


      //array of features content
      let allDispImgs = []
      allDispImgs[0] = 'https://grasshopper.app/assets/static/images/common/feature-carousel/slide__device-screen-1.png'
      allDispImgs[1] = 'https://grasshopper.app/assets/static/images/common/feature-carousel/slide__device-screen-2.png'
      allDispImgs[2] = 'https://grasshopper.app/assets/static/images/common/feature-carousel/slide__device-screen-3.png'
      allDispImgs[3] = 'https://grasshopper.app/assets/static/images/common/feature-carousel/slide__device-screen-4.png'

      let allIconsImages = []
      allIconsImages[0] = 'https://grasshopper.app/assets/static/images/common/icon1_visual_puzzles.png'
      allIconsImages[1] = 'https://grasshopper.app/assets/static/images/common/icon2_industry_standard.png'
      allIconsImages[2] = 'https://grasshopper.app/assets/static/images/common/icon3_feedback.png'
      allIconsImages[3] = 'https://grasshopper.app/assets/static/images/common/icon4_achievements.png'

      let allTextInner = []
      allTextInner[0] = 'Visual puzzles develop your problem-solving skills and solidify coding concepts.'
      allTextInner[1] = 'Use industry-standard JavaScript with just a few taps on your phone.'
      allTextInner[2] = 'Real-time feedback guides you like a teacher.'
      allTextInner[3] = 'Collect achievements as you learn new skills.'

      let count = 0

      //get dot class from DOM
      let allDots = document.querySelectorAll('.dot')

      //create array from dot class
      let allDotsArray = Array.from(allDots)

      //image, icon and text change
      setInterval(()=>{

        allDotsArray[count].style.backgroundColor = '#00324b'
        iconImgg.src = allIconsImages[count]
        dispImg.src  = allDispImgs[count]
        iconTxtElement.textContent = allTextInner[count]

        if(count < allDispImgs.length - 1){
          count++
        }else{
          count = 0
        }
      },3000)

      //changing dot buttons(not buttons sha. diddnt add eventlisterner, so clicking them does nothing) 
      //This took me a surprising amount of time to figure out. a whole day if we are being completly honest
      let count2 = -1

      setInterval(()=>{
        if(count2 == -1){
           console.log('hold, thank you!')
        }else{
          allDotsArray[`${count2}`].style.backgroundColor = '#bbb'
        }

        if(count2 < allDispImgs.length - 1){
          count2++
        }else{
          count2 = 0
        }
      },3000)



      //final note: I hope to revisit this soon when I get more knowlege. Probably focus on performance and shorten the insane amount of codes. Thank you for viewing my first project and I'm open to mentorship. Gracias!!!!!


    

        
      
  

  
    



     