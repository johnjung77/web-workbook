'use strict';

let data = {
  totalRevs: 360,
  totalCurrent: 0,
  totalRPS: 0
};

setInterval(goGo, 1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#bitcoin").css({
    'transform': 'rotate(' + data.totalRevs + 'deg)'
  });
  updateReport();
}

function updateReport() {
  $("#current-total").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS / 70.4).toFixed(3));
}

$("#bitcoin").click(function() {
  data.totalRevs++;
  data.totalCurrent++;
  updateReport();
})

$(".button").click(function() {
  let addVal = $(this).data("cost");
  if ($(this).data("cost") < data.totalCurrent) {
    data.totalCurrent -= parseFloat($(this).data("cost").toPrecision(2));
    data.totalRPS += parseFloat($(this).data("val"));
    $(this).children("span").html(parseInt($(this).children("span").html() * 1.15));
    $(this).data("cost", parseInt($(this).data("cost") * 1.15));
  }
  updateReport();
})
