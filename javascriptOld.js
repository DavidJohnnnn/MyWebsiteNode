

function PurposeText() {
  document.querySelector(".card.PurposeText").addEventListener("click", function () {
    document.querySelector(".card.PurposeText").setAttribute("class", "card PurposeTextExpand");
    PurposeTextExpand();
  }
  );
}

function PurposeTextExpand() {
  document.querySelector(".card.PurposeTextExpand").addEventListener("click", function () {
    document.querySelector(".card.PurposeTextExpand").setAttribute("class", "card PurposeText");
    PurposeText();
  }
  );
}

PurposeText();














/**/
