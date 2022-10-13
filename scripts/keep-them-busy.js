//  Authors: Quyhn Ly Do
//           Marcelo Di Liscia
//           Xuan Wang
//           Vivien Yep
//  Date:    27-Feb-2022

window.addEventListener("load", startup, false);

var timeoutHandle = -1;
var imageTimoutHandle = -1;
// scroll to top
var scrollToTop = document.getElementById("scroll-top");
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50){
            $('#scroll-top').fadeIn();
        }
        else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
});

/* ***** Carousel ***** */
// Slide number
var slideNumber = 0;
// array of multiple slides
var slides = document.getElementsByClassName("slides");
// array of multiple dots
var dots = document.getElementsByClassName("dot");

/* ***** Random images and colors in the gallery section ***** */
var randomImg = 0;
var imageColor = 'image'; //to swap between picture and title
var galleryImages = document.getElementsByClassName('gallery-img');
var galleryLinks = document.getElementsByClassName('gallery-link');
var galleryColors = document.getElementsByClassName('gallery-color');
var galleryTexts = document.getElementsByClassName('gallery-text');

/* *****  Filter activities ***** */
var filterType = -1;
var filterAge = -1;
var typeActivities = document.getElementsByClassName("typeFilter");
var ageActivities = document.getElementsByClassName("ageFilter");

/**
 * Load these functions at startup
 */
function startup(){
    
    // carousel 
    showSlide(slideNumber);
    
    // load 6 activities for the gallery
    loadActivities();
    // swap randomly picture with random color background
    setInterval(function(){
        if (imageColor == 'image')
        {
            randomImg = Math.ceil(Math.random()*6);
        }
        swappingImageColor(randomImg);
    }, 2500, false);
    
    // Add listener to activity type filters
    for (let i = 0; i < typeActivities.length; i++)
    {
        typeActivities[i].addEventListener('click', function(){
            if (i < activityType.outdoorArtsCrafts){
                filterType = i + 1;
            }
            else {
                filterType = -1;
            }
            
            highlightButton(typeActivities, i);
            filterActivities(filterType, filterAge)
        });
    }
    // Add listener to age group filters
    for (let i = 0; i < ageActivities.length; i++)
    {
        ageActivities[i].addEventListener('click', function(){
            if (i < ageGroup.Grade6plus){
                filterAge = i + 1;
            }
            else {
                filterAge = -1
            }
            highlightButton(ageActivities, i);
            filterActivities(filterType, filterAge)
        });
    }

    // load all activities in the filter area
    loadAllActivities();
}

// Scroll to top button
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* ********** Carousel ********** */

/**
 * Function: Go to next slide in carousel when clicking on right arrow
 */
function nextSlide() {
    if (timeoutHandle != -1)
    {
        clearTimeout(timeoutHandle);
    }

    showSlide(slideNumber);
}

/**
 * Function: Go to previous slide in carousel when clicking on left arrow
 */ 
  
function previousSlide() {
    if (timeoutHandle != -1)
    {
        clearTimeout(timeoutHandle);
    }

    //alert('before ' + slideNumber);
    if (slideNumber == 0) {
        slideNumber = slides.length - 2;
    }
    else if (slideNumber == 1) {
        slideNumber = slides.length - 1;
    }
    else {
        slideNumber -= 2;
    }
    //alert('after ' + slideNumber);
    showSlide(slideNumber);
}


/**
 * Function: Show slide with slide number
 * @param {*} slideNb 
 */
function showSlide(slideNb) {
    if (timeoutHandle != -1)
    {
        clearTimeout(timeoutHandle);
    }

    slideNumber = slideNb;

    // to hide the inactive slides & change buttons look
    for (let i = 0; i < slides.length; i++)
    {
       slides[i].style.display = "none";
       dots[i].className = "dot"
    }

    slides[slideNb].style.display = "block";
    dots[slideNb].className = "dot active-slide";

    if(slideNumber <= slides.length - 2){
        slideNumber++;
    }
    else {
        slideNumber = 0;
    }

    timeoutHandle = setTimeout(function(){showSlide(slideNumber);}, 3000);
}

/* ********** Front page gallery section ******** */

/**
 * Function: Load randomly 6 activities on front page gallery section
 */
function loadActivities() {
    let frontPageActivities = new Array(6);
    
    let nbActivity = 0

    while (nbActivity < 6)
    {
        let rdmActivity = Math.ceil(Math.random()*15);
        if (!frontPageActivities.includes(rdmActivity)) {
            frontPageActivities[nbActivity] = rdmActivity;
            nbActivity++;
        }
    }
    
    for (let i = 0; i < frontPageActivities.length; i++) {

        galleryImages[i].src = activities[frontPageActivities[i]].imageSmLnk;
        galleryImages[i].setAttribute("alt", activities[frontPageActivities[i]].alt)
        galleryLinks[i].href = activities[frontPageActivities[i]].activityLink;
        galleryTexts[i].innerHTML = activities[frontPageActivities[i]].title;
        galleryTexts[i].style.display = "none";
        
    }
}


/**
 * Function:  Change from image <-> color 
 * @param {*} imageNb 
 */

function swappingImageColor(imageNb)
{
    if (imageTimoutHandle != -1)
    {
        clearTimeout(imageTimoutHandle);
    }

    let color = Math.ceil(Math.random()*8);
    let colorJPG = 'images/color-' + color + '.jpg'
    if (imageColor == 'image')
    {    
        galleryImages[imageNb].style.display = "none";

        galleryColors[imageNb].src = colorJPG;
        galleryColors[imageNb].style.display = "block";

        galleryTexts[imageNb].style.display = "block"

        imageColor = 'color';
    }
    else {
        galleryImages[imageNb].style.display = "block";
        galleryColors[imageNb].style.display = "none";
        galleryTexts[imageNb].style.display = "none"
        imageColor = 'image';
    }   
}

/* ********* validates user data entry in Contact_us.html ********* */
/**
 * Function: validate info in contact us page
 * @returns 
 */
 function validateContact() {
    // declare variables
    let selectedName = document.getElementById('name');
    let selectedEmail = document.getElementById('email');
    let selectedReason = document.getElementById('reason');
    let selectedMessage = document.getElementById('message');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // validate name
    if (selectedName.value === "") {
        window.alert('You must write a Name');
        selectedProduct.focus();
        return false;
    } // end if
    else 
    // validate email format
    if (!selectedEmail.value.match(mailformat))
    {
        window.alert('You must write a valid email (use "@" and ".")');
        selectedEmail.focus();
        return false;
    } else
    // validate reason
    if (selectedReason.selectedIndex === 0) {
        window.alert('You must select a reason');
        selectedReason.focus();
        return false;
    } // end if 
    else
    // validate message
    if (selectedMessage.value === '') {
        window.alert('You must write a message');
        selectedMessage.focus();
        return false;
    } // end if 
    else {
        return true;
    }
}

/* ********* Filter area ********* */

/**
 * Function: load all activities in the filter area 
 */
function loadAllActivities() {
    
    let showArea = document.getElementById('filterArea');
    let activityPage = null;
    let imageLink = null;
    let imageAlt = "";
    let activityTitle = "";
    let temp;


    let i = 0;
    temp = '<div class = "row">'

    for (let i=0; i < activities.length; i ++) {
        activityPage = activities[i].activityLink;
        imageLink = activities[i].imageSmLnk;
        imageAlt = activities[i].alt;
        activityTitle = activities[i].title;
        activityID = 'activity' + i;

        temp += 
        `<div class="col-xl-2 col-4 g-2 position-relative border" id="${activityID}">
            <a href="${activityPage}" class="filter-link">
                <img src= "${imageLink}" alt="${imageAlt}" class="p-3 filter-img">
                <div class="text-center p-2">${activityTitle}</div>
            </a>
        </div>`;   
    }
    temp += '</div>';  //row  

    showArea.innerHTML = temp;

}

/**
 * Function: Filter activities by type AND age
 * @param {*} type 
 * @param {*} age 
 */
function filterActivities(type, age){
    // go through all the activities defined in the array,
    // hide or display them depending on the filters
    for (let i = 0; i < activities.length; i++){
        if ((activities[i].activityType == type || type == -1) 
            && (activities[i].ageGroup == age || age == -1)) {
             document.getElementById("activity" + i).style.display = "block";
            
        }
        else {
            document.getElementById("activity" + i).style.display = "none";
        }

    }
}

/**
 * Function: Highlight button of the filters
 * @param {*} buttonList 
 * @param {*} index 
 */
function highlightButton(buttonList, index) {
    for (let i = 0; i < buttonList.length; i ++) {
        if (i == index)
        {
            buttonList[i].style.borderWidth = "3px";
        }
        else {
            buttonList[i].style.borderWidth = "";
        }
    }

    
}


// Function: validate info in french contact us page
function validateContactFr() {
    // declare variables
    let selectedName = document.getElementById('name');
    let selectedEmail = document.getElementById('email');
    let selectedReason = document.getElementById('reason');
    let selectedMessage = document.getElementById('message');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // validate name
    if (selectedName.value === "") {
        window.alert('Vous devez écrire un nom');
        selectedProduct.focus();
        return false;
    } // end if
    else 
    // validate email format
    if (!selectedEmail.value.match(mailformat))
    {
        window.alert('Vous devez écrire un email valide (utilisez "@" et ".")');
        selectedEmail.focus();
        return false;
    } else
    // validate reason
    if (selectedReason.selectedIndex === 0) {
        window.alert('Vous devez sélectionner une raison');
        selectedReason.focus();
        return false;
    } // end if 
    else
    // validate message
    if (selectedMessage.value === '') {
        window.alert('Vous devez écrire un message');
        selectedMessage.focus();
        return false;
    } // end if 
    else {
        return true;
    }
}

/********* function for Ajax in Conntact_us.html *****/
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("reviews").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "reviews.txt", true);
    xhttp.send();
}


/*** validates email data entry in modal */
function validateEmail() {
    // declare variables
    let selectedEmail = document.getElementById('email');

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // validate email format
    if (!selectedEmail.value.match(mailformat))
    {
        window.alert('You must write a valid email (use "@" and ".")');
        selectedEmail.focus();
        return false;
    } else {
        return true;
    }
}