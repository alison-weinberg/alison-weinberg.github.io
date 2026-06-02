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

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script2 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script3 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script4 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script5 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script6 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script7 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script8 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

window.Script9 = function()
{
  var player = GetPlayer();

// Update this box's variable first
var boxes = ["CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB8","CB9"];

// Count how many are currently true
var count = 0;
boxes.forEach(function(b) {
    if (player.GetVar(b) === true) {
        count++;
    }
});

// Update ClickCountr to actual selected count
player.SetVar("ClickCountr", count);
}

};
