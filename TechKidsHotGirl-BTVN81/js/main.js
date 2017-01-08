var data = {
  "items" : [
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Dzungggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
      "posterName"    : "Sannnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Tranggggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
      "posterName"    : "Ngannnnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Dzungggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
      "posterName"    : "Sannnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Tranggggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
      "posterName"    : "Ngannnnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    }
  ]
}


$(document).ready(function(){

  var itemTemplate = Handlebars.compile($("#item-template").html());

  $.ajax({
    type  : "get",
    url   : "imagesData.json"
  }).then(function(data){
    data.items.forEach(function(item, index) {//code tham khao , k hieu muc dich
        item.index = index;
      })

    var itemHtml = itemTemplate(data);
    $("#item_list").html(itemHtml);
    $('#item_list').masonry({
      itemSelector: '.item_container',
      columnWidth: '.item_container',
      percentPosition: true
    });

    $(".popup_content").on("click", ".plus_button_popup", function(e) {
          console.log("hihi");
        })

  }).fail(function(data){
    console.log(error);
  });
});
