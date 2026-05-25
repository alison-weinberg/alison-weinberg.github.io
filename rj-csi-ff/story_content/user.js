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
window.Script2 = function()
{
  var player = GetPlayer();
var bools = [
  'Inbox_Coroner_Paris','Inbox_Coroner_Romeo','Inbox_Coroner_Juliet',
  'Inbox_Coroner_Mercutio','Inbox_Coroner_Tybalt',
  'Inbox_Lab_Vial_R','Inbox_Lab_Dagger','Inbox_Lab_Longsword','Inbox_Lab_Crowbar',
  'Inbox_Lab_Vial_J','Inbox_Lab_Ladder','Inbox_Lab_Diary_J','Inbox_Lab_Diary_R',
  'Inbox_Lab_Key','Inbox_Lab_Ring','Inbox_Lab_Invitation',
  'Inbox_Lab_Herbs','Inbox_Lab_Vial_F','Inbox_Lab_Book_F',
  'Inbox_Lab_Friar_Prints',
  'Inbox_Prince_Summons','ModernText'
];
bools.forEach(function(v) {
  localStorage.setItem('sl_' + v, player.GetVar(v) ? 'true' : 'false');
});
localStorage.setItem('sl_Detective_Name', player.GetVar('Detective_Name') || '');
}

};
