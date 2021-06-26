var header = document.getElementsByClassName("header") [0] ;
var nav = document.createElement("nav") ;

nav.classList.add("navbar")
header.insertAdjacentElement("beforeend", nav)

var logo = document.createElement("div")
logo.classList.add("logo")
nav.insertAdjacentElement("afterbegin", logo)

var logoimg = document.createElement("img")
logoimg.src = "img/PMS.png"
logo.insertAdjacentElement("beforeend", logoimg)

var ul = document.createElement("ul")
ul.classList.add("nav_items")
nav.insertAdjacentElement("beforeend", ul)

var item1 = '<li><a href = "index.html"><i class="fa fa-home mr-2" aria-hidden="true"></i>home</a></li>'
var item2 = '<li><a href = "about.html">About Us</a></li>'
var item3 = '<li><a href = "products.html">Products List<i class="fas fa-caret-down ml-3"></i></a></li>'
var item4 = '<li><a href = "brochure.html"><i class="fas fa-book-open mr-3"></i>Brochure</a></li>'
var item5 = '<li><a href = "contact.html">Contact Us</a></li>'


ul.insertAdjacentHTML("beforeend", item1)
ul.insertAdjacentHTML("beforeend", item2)
ul.insertAdjacentHTML("beforeend", item3)
ul.insertAdjacentHTML("beforeend", item4)
ul.insertAdjacentHTML("beforeend", item5)
//------------------------------------------------------------------------------------------------------------------------------

var black =  '<label class="black" for="chk"></label>'
header.insertAdjacentHTML("beforeend", black)

//-----------------------------------------------------------------------------------------------------------------------------

var sidebar = document.createElement("div")
sidebar.classList.add("sidebar")
header.insertAdjacentElement("beforeend" , sidebar)

var sidebar_items = document.createElement("div")
sidebar_items.classList.add("sidebar_items")
sidebar.insertAdjacentElement("afterbegin" , sidebar_items)

var  sidebar_item1 = '<li><a href = "index.html"><i class="fas fa-home mx-3"></i>home</a></li>'
var sidebar_item2 = '<li><a href = "about.html"><i class="fas fa-align-right mx-3"></i>About Us</a></li>'
var sidebar_item3 = '<li><a href = "products.html"><i class="fas fa-caret-down mx-3"></i>Products</a></li>'
var sidebar_item4 = '<li><a href = "brochure.html"><i class="fas fa-book-open mr-3"></i>Brochure</a></li>'
var sidebar_item5 = '<li><a href = "contact.html"><i class="fas fa-id-badge mx-3"></i>Contact Us</a></li>'

sidebar_items.insertAdjacentHTML("beforeend", sidebar_item1)
sidebar_items.insertAdjacentHTML("beforeend", sidebar_item2)
sidebar_items.insertAdjacentHTML("beforeend", sidebar_item3)
sidebar_items.insertAdjacentHTML("beforeend", sidebar_item4)
sidebar_items.insertAdjacentHTML("beforeend", sidebar_item5)


//-----------------------------------------------------------------------------------------------------------

var margin = document.createElement("div")
margin.classList.add("margin")
header.insertAdjacentElement("afterend", margin)

//-----------------------------------------------------------------------------------------------------------------
var footer = document.getElementsByTagName("footer")[0];
var footer_content = document.getElementsByClassName("footer_content")[0];

footer_content.innerHTML = "<center><p>@pharmamachinery&spares all right resereved @2021</p></center>"



//-----------------------------------------------------------------------------------------------------------------

var label = '<label id="chk_btn" for="chk"><i class="fas fa-bars"></i></label>'
var chk = '<input type="checkbox"  id="chk">'

header.insertAdjacentHTML("afterbegin", label)
header.insertAdjacentHTML("afterbegin", chk)












var title = document.getElementsByTagName("title")[0];
var favicon = ' <link rel="shortcut icon" href="img/favicon/PMS.png" type="image/x-icon">'
title.insertAdjacentHTML('afterend', favicon)