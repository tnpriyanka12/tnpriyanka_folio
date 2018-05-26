
$(document).ready(function() {
  console.log('functions.js included');


//Hide #projects no matter what
function hideProjects() {
    $('#projects').css({
      visibility: 'hidden',
    }); //css
    $('#skills').removeClass('rotateInDownRight');

}

//Hide #skills no matter what
function hideSkills() {
    $('#skills').css({
      visibility: 'hidden',
    }); //css
    $('#skills').removeClass('rotateInDownRight');

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
  $('#skills').removeClass('rotateInDownRight');

  } else {
    hideProjects(); //css
    $('#projects').removeClass('rotateInDownLeft');

  }


  //If projects is clicked when skills is already visible
  if( $('#skills').css('visibility') === 'visible') {
    $('#projects').addClass('rotateInDownLeft');
  }
  //If contact is clicked when skills is already visible
  if( $('#skills').css('visibility') === 'visible') {
    $('#contact').addClass('rotateInDownLeft');
  }


});//click

//Popping up projects
$('#sec-skills').click(function(){
  hideProjects();
  hideContact();
  if( $('#skills').css('visibility') === 'hidden') {
      $('#skills').css({
        visibility: 'visible',
      }); //css
  $('#skills').addClass('rotateInDownRight');
  $('#projects').removeClass('rotateInDownLeft');
  } else {

    $('#skills').css({ visibility: 'hidden'}); //css
    $('#skills').removeClass('rotateInDownRight');


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
      $('#skills').addClass('zoomIn');

  } else {
    $('#contact').css({ visibility: 'hidden'}); //css
  }

});//click



});//ready
