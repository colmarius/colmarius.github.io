$(function() {
  function sayMessageSentSuccessfully() {
    $('#notification').html("<div class='alert alert-success'>")
    $('#notification > .alert-success')
      .html(
        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;",
      )
      .append('</button>')
    $('#notification > .alert-success').append(
      '<strong>Your message has been sent. </strong>',
    )
    $('#notification > .alert-success').append('</div>')
  }

  $('input,textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault()
      // get values from FORM
      var name = $('input#name').val()
      var email = $('input#email').val()
      var message = $('textarea#message').val()
      var firstName = name // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name
          .split(' ')
          .slice(0, -1)
          .join(' ')
      }
      $.ajax({
        url:
          'https://happy-forwarder.herokuapp.com/user/b4db61f3-043f-42ee-b821-71e6877d8334',
        type: 'POST',
        data: {
          subject: 'Message from: ' + name,
          email: email,
          message: message,
        },
        cache: false,
        success: function() {
          sayMessageSentSuccessfully()
          clearFormFields()
        },
        error: function() {
          // Message is sent anyway. Server does not respond with 200 status code.
          sayMessageSentSuccessfully()
          clearFormFields()
        },
      })
    },
    filter: function() {
      return $(this).is(':visible')
    },
  })

  $('a[data-toggle="tab"]').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  })
})

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#notification').html('')
})
