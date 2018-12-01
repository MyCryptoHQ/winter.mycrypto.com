Zepto(function($){

  $(".day-1 #group-1").click(function()   {   openModal('1')    })
  $(".day-2 #group-2").click(function()   {   openModal('2')    })
  $(".day-3 #group-3").click(function()   {   openModal('3')    })
  $(".day-4 #group-4").click(function()   {   openModal('4')    })
  $(".day-5 #group-5").click(function()   {   openModal('5')    })
  $(".day-6 #group-6").click(function()   {   openModal('6')    })
  $(".day-7 #group-7").click(function()   {   openModal('7')    })
  $(".day-8 #group-8").click(function()   {   openModal('8')    })
  $(".day-9 #group-9").click(function()   {   openModal('9')    })
  $(".day-10 #group-10").click(function() {   openModal('10')   })
  $(".day-11 #group-11").click(function() {   openModal('11')   })
  $(".day-12 #group-12").click(function() {   openModal('12')   })
  $(".day-13 #group-13").click(function() {   openModal('13')   })
  $(".day-14 #group-14").click(function() {   openModal('14')   })
  $(".day-15 #group-15").click(function() {   openModal('15')   })
  $(".day-16 #group-16").click(function() {   openModal('16')   })
  $(".day-17 #group-17").click(function() {   openModal('17')   })
  $(".day-18 #group-18").click(function() {   openModal('18')   })
  $(".day-19 #group-19").click(function() {   openModal('19')   })
  $(".day-20 #group-20").click(function() {   openModal('20')   })
  $(".day-21 #group-21").click(function() {   openModal('21')   })
  $(".day-22 #group-22").click(function() {   openModal('22')   })
  $(".day-23 #group-23").click(function() {   openModal('23')   })
  $(".day-24 #group-24").click(function() {   openModal('24')   })
  $(".day-25 #group-25").click(function() {   openModal('25')   })


  $("#peel-1").click(function()  {   openModal('1')    })
  $("#peel-2").click(function()  {   openModal('2')    })
  $("#peel-3").click(function()  {   openModal('3')    })
  $("#peel-4").click(function()  {   openModal('4')    })
  $("#peel-5").click(function()  {   openModal('5')    })
  $("#peel-6").click(function()  {   openModal('6')    })
  $("#peel-7").click(function()  {   openModal('7')    })
  $("#peel-8").click(function()  {   openModal('8')    })
  $("#peel-9").click(function()  {   openModal('9')    })
  $("#peel-10").click(function() {   openModal('10')   })
  $("#peel-11").click(function() {   openModal('11')   })
  $("#peel-12").click(function() {   openModal('12')   })
  $("#peel-13").click(function() {   openModal('13')   })
  $("#peel-14").click(function() {   openModal('14')   })
  $("#peel-15").click(function() {   openModal('15')   })
  $("#peel-16").click(function() {   openModal('16')   })
  $("#peel-17").click(function() {   openModal('17')   })
  $("#peel-18").click(function() {   openModal('18')   })
  $("#peel-19").click(function() {   openModal('19')   })
  $("#peel-20").click(function() {   openModal('20')   })
  $("#peel-21").click(function() {   openModal('21')   })
  $("#peel-22").click(function() {   openModal('22')   })
  $("#peel-23").click(function() {   openModal('23')   })
  $("#peel-24").click(function() {   openModal('24')   })
  $("#peel-25").click(function() {   openModal('25')   })



  $('.day__close').click(function() {
    closeModal()
  })

  $('.day__wrapper').click(function(e) {
    if(e.target.className == 'day__wrapper') {
      closeModal()
    }
  });

  if ( $(window).height() < 600 ) {
    $( '.day__content' ).css({
      'max-height': '100vh',
      'overflow': 'scroll'
    })
  }

  window.onhashchange = locationHashChanged;

})

function openModal( day ) {
  $( '#modal-' + day ).css('display', 'flex')
  $( 'body' ).addClass( 'modal-open')
  window.location.hash = "#" + day
}

function closeModal( ) {
  $( '.day__wrapper' ).css('display', 'none')
  $( 'body' ).removeClass( 'modal-open')
  window.location.hash = ""
}

function locationHashChanged() {
  if (location.hash === "") {
    closeModal()
  }
}
