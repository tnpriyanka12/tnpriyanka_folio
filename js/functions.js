
$(document).ready(function() {
  let mobileEnabled=false;
  let skillClass= '#skills';

  console.log('functions.js included');

  if(window.screen.width < 480)
   {
      mobileEnabled=true;
      skillClass = skillClass+'-mobile';
   }




//Hide #projects no matter what
function hideProjects() {
    $('#projects').css({
      visibility: 'hidden',
    }); //css
    $(skillClass).removeClass('rotateInDownRight');

}

//HideskillClassno matter what
function hideSkills() {
    $(skillClass).css({
      visibility: 'hidden',
    }); //css
    $(skillClass).removeClass('rotateInDownRight');

}

//Hide #contact no matter what
function hideContact() {
    $('#contact').css({
      visibility: 'hidden',
    }); //css
    $('#contact').removeClass('rotateInDownRight');

}

//Popping up projects
$('#sec-project').click(function(){
  hideSkills();
  hideContact();

  if( $('#projects').css('visibility') === 'hidden') {
      $('#projects').css({
        visibility: 'visible'
      }); //css
  $('#projects').addClass('rotateInDownLeft');
  $(skillClass).removeClass('rotateInDownRight');

  } else {
    hideProjects(); //css
    $('#projects').removeClass('rotateInDownLeft');

  }


  //If projects is clicked when skills is already visible
  if( $(skillClass).css('visibility') === 'visible') {
    $('#projects').addClass('rotateInDownLeft');
  }
  //If contact is clicked when skills is already visible
  if( $(skillClass).css('visibility') === 'visible') {
    $('#contact').addClass('rotateInDownLeft');
  }


});//click

//Popping up projects
$('#sec-skills').click(function(){
  hideProjects();
  hideContact();
  if( $(skillClass).css('visibility') === 'hidden') {
      $(skillClass).css({
        visibility: 'visible',
      }); //css
  $(skillClass).addClass('rotateInDownRight');
  $('#projects').removeClass('rotateInDownLeft');
  } else {

    $(skillClass).css({ visibility: 'hidden'}); //css
    $(skillClass).removeClass('rotateInDownRight');


  }

});//click

//Popping up contact
$('#sec-contact').click(function(){
  hideProjects();
  hideSkills();
  if( $('#contact').css('visibility') === 'hidden') {
      $('#contact').css({
        visibility: 'visible',
      }); //css
      $(skillClass).addClass('zoomIn');

  } else {
    $('#contact').css({ visibility: 'hidden'}); //css
  }

});//click



});//ready
