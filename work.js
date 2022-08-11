var idx = 0;
$("#getdata").click(function () {
  fetchimages(1);
});

// $("#increment").click(function(){

//     fetchimages(1);
// })

const fetchimages = (id) => {
  $(".album_id").html(`<span>Album: ${id}</span`);
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
    type: "GET",
    crossDomain: true,
    cors: true,

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    success: function (response) {
      //    response = JSON.parse(response);

      // response = $.parseJSON(response);
      var html = "";
      if (response.length == 0) {
        html += `<div class="error_message">No record found</div>`;
        return;
      }
      $.each(response, (i, d) => {
        html += `<div class="image_data"><img src=${d.url} alt="vihaan">  <div class="title"><span class="image_id">${d.id}.</span>${d.title}</div></div>`;
      });

      $(".data").html(html);
    },
    error: function (xhr, status) {
      console.log("error");
    },
  });
};