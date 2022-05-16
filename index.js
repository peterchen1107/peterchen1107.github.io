{\rtf1\ansi\ansicpg950\cocoartf2638
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Create a "close" button and append it to each list item\
var myNodelist = document.getElementsByTagName("LI");\
var i;\
for (i = 0; i < myNodelist.length; i++) \{\
  var span = document.createElement("SPAN");\
  var txt = document.createTextNode("\\u00D7");\
  span.className = "close";\
  span.appendChild(txt);\
  myNodelist[i].appendChild(span);\
\}\
\
// Click on a close button to hide the current list item\
var close = document.getElementsByClassName("close");\
var i;\
for (i = 0; i < close.length; i++) \{\
  close[i].onclick = function() \{\
    var div = this.parentElement;\
    div.style.display = "none";\
  \}\
\}\
\
// Add a "checked" symbol when clicking on a list item\
var list = document.querySelector('ul');\
list.addEventListener('click', function(ev) \{\
  if (ev.target.tagName === 'LI') \{\
    ev.target.classList.toggle('checked');\
  \}\
\}, false);\
\
// Create a new list item when clicking on the "Add" button\
function newElement() \{\
  var li = document.createElement("li");\
  var inputValue = document.getElementById("myInput").value;\
  var t = document.createTextNode(inputValue);\
  li.appendChild(t);\
  if (inputValue === '') \{\
    alert("You must write something!");\
  \} else \{\
    document.getElementById("myUL").appendChild(li);\
  \}\
  document.getElementById("myInput").value = "";\
\
  var span = document.createElement("SPAN");\
  var txt = document.createTextNode("\\u00D7");\
  span.className = "close";\
  span.appendChild(txt);\
  li.appendChild(span);\
\
  for (i = 0; i < close.length; i++) \{\
    close[i].onclick = function() \{\
      var div = this.parentElement;\
      div.style.display = "none";\
    \}\
  \}\
\}}