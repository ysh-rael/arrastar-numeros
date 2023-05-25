const boxs = $(".box"),
  cards = $(".card");
let cardDragged = false;

cards.on("dragstart", function (event) {
  cardDragged = event.target;
});

cards.on("dragend", function (event) {
  cardDragged = false;
});

boxs.on("dragover", function (event) {
  event.preventDefault();
  const esse = $(event.target),
    pai = esse.parent();

  if (esse.hasClass("card")) pai.addClass("destaque");
  else esse.addClass("destaque");
});

boxs.on("dragenter", function (event) {
  const esse = $(event.target),
    pai = esse.parent();

  if (esse.hasClass("card")) pai.addClass("destaque");
  else esse.addClass("destaque");
});

boxs.on("dragleave", function (event) {
  const esse = $(event.target),
    pai = esse.parent();

  if (esse.hasClass("card")) pai.removeClass("destaque");
  else esse.removeClass("destaque");
});

boxs.on("drop", function (event) {
  const esse = $(event.target),
    pai = esse.parent();

  if (esse.hasClass("card")) {
    pai.append(cardDragged);
    pai.removeClass("destaque");
  } else {
    esse.append(cardDragged);
    esse.removeClass("destaque");
  }
});
