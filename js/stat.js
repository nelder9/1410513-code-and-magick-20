'use strict'
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var GAP_BIG = 50;
var MAX_HEIGHT_BAR = 150;
var GAP_UP = 80;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};



window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    } else {
      ctx.fillStyle = `hsl(240, ${Math.round(Math.random()*100)}%, 50%)`;
    }
    ctx.fillRect(CLOUD_X + GAP_BIG + (GAP_BIG + BAR_WIDTH) * i, CLOUD_Y + GAP_UP + MAX_HEIGHT_BAR, BAR_WIDTH, (((MAX_HEIGHT_BAR * times[i]) / maxTime)) * -1);
  }

  for (var i = 0; i < players.length; i++) {
    ctx.font = "16px PT Mono";
    ctx.fillStyle = 'black';
    ctx.fillText('Ура вы победили!', CLOUD_X + 40, CLOUD_Y + 25);
    ctx.fillText('Список результатов:', CLOUD_X + 40, CLOUD_Y + 45);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BIG + (GAP_BIG + BAR_WIDTH) * i, (CLOUD_Y + GAP_UP + MAX_HEIGHT_BAR) + (((MAX_HEIGHT_BAR * times[i]) / maxTime + GAP)) * -1);
    ctx.fillText(players[i], CLOUD_X + GAP_BIG + (GAP_BIG + BAR_WIDTH) * i, CLOUD_Y + GAP_UP + MAX_HEIGHT_BAR + GAP + GAP);

  }

};
