function titleCase(x) {
  let titleText = $(x).text()
  $.ajax({
    url: 'https://titlecaser.herokuapp.com/getmsg/',
    contentType: "application/json",
    dataType: 'json',
    data: {
      text: titleText
    },
    success: function (result) {
      $(x).text(result.TITLE)
    }
  })
}

window.onload = function () {
  console.log('Title Caser is on the case!')
  let origin = window.location.origin;
  if (origin.includes('wikipedia')) {
    $('h1, .toctext, .mw-headline').each(function () { titleCase(this) })
  } else if (origin.includes('bbc')) {
    $('h1, .ssrcss-1nmw0uu-StyledHeading, .e11fj1fc10, .story-body__crosshead').each(function () { titleCase(this) })
  } else if (origin.includes('guardian')) {
    $('h1').each(function () { titleCase(this) })
  }
}