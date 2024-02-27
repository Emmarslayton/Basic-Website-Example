const template = document.createElement('template')

template.innerHTML=`
<header>
<div class="headerlayout">
  <div class="leftcoffeebean"><img src="/Basic-Website-Example/images/coffeebean_2.png" alt="Coffee Beans" width="250 px" height="150px"></div>
  <div class="centerlogo"><a href="/Basic-Website-Example/html/homepage.html"><img src="/Basic-Website-Example/images/press+pour.png" alt="PRESS + POUR coffeehouse" width="300" height="150"></a></div>
  <div class="rightcoffeebean"><img src="/Basic-Website-Example/images/coffeebean_1.png" alt="Coffee Beans" width="250px" height="150px"></div>
</div>
<nav>
  <ul>
    <li><a href="/Basic-Website-Example/html/about.html">About Us</a></li>
    <li><a href="/Basic-Website-Example/html/menu.html">Menu</a></li>
    <li><div class="dropdown">  
        <a href="/Basic-Website-Example/html/shop.html"> SHOP</a>
        <div class="dropdown-content">  
        <a href="/Basic-Website-Example/html/shop-coffee.html"> Coffee Beans </a>  
        <a href="/Basic-Website-Example/html/shop-mugs.html"> Mugs </a> 
        </div>  
      </div>  </li>
    <li><a href="/Basic-Website-Example/html/contact.html">Contact Us</a></li>
    <li><a href="/Basic-Website-Example/html/cart.html"><img src="/Basic-Website-Example/images/cart.png" alt="CheckOut logo" width="25" height="25"></a></li>
  </ul>
</nav>
</header>
`

document.body.appendChild(template.content)