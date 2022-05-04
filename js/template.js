class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul.menu {
        display: inline-block;
        list-style-type: none;
    }
    li.menu_list {
        height: 100px;
        width: 100px;
        position: relative;
    }
    li.menu_list .front,
    a.side {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 30px;
        position: absolute;
        top: 0;
        left: 0;
        text-decoration: none;
        
        transition: all .5s ease-out;
        cursor: pointer;
    }
    li.menu_list .front {
        background-color: #f0e3d5;
        transform-origin: 0 0;
    }
    a.side {
        background-color:#053852;
        color: #f0e3d5;
        transform-origin: 0 0 85px;
        transform: rotateY(-90deg);
    }
    li.menu_list:hover a.side {
        transform: rotateY(0deg);
    }
    li.menu_list:hover .front {
        transform: rotateY(90deg);
    }  </style>
  <ul class="menu">
  <li class="menu_list">
      <img class="front" src="images/SDG1.png">
      <a href="#" class="side">No Poverty</a>
  </li>
  <li class="menu_list">
  <img class="front" src="images/SDG2.png">
      <a href="#" class="side">Zero Hunger</a>
  </li>
  <li class="menu_list">
  <img class="front" src="images/SDG3.png">
      <a href="#" class="side"> Health</a>
  </li>
  <li class="menu_list">
  <img class="front" src="images/SDG4.png">
      <a href="#" class="side">Education</a>
  </li>
</ul>`;
    }
  }
  
  customElements.define('my-menu', MyComponent);