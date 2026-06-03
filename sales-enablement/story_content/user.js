window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB9");
player.SetVar("CB9", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script2 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB8");
player.SetVar("CB8", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script3 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB7");
player.SetVar("CB7", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script4 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB6");
player.SetVar("CB6", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script5 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB5");
player.SetVar("CB5", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script6 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB4");
player.SetVar("CB4", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script7 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB3");
player.SetVar("CB3", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script8 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB2");
player.SetVar("CB2", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

window.Script9 = function()
{
  var player = GetPlayer();
var current = player.GetVar("CB1");
player.SetVar("CB1", !current);

var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});
player.SetVar("ClickCountr", count);
}

};
