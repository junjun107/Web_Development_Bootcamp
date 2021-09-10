A dating website for dogs

### Goal:

Use Bootstrap to style the website.

### CDN

Understand use Bootstrap CSS CDN and JavaScript plugin and Popper.
Understand how to use Google Fonts
Understand how to use icons with Font Awesome CDN

### Navbar

Bootstrap nav bar. The .nav component is built with flexbox

```
<nav class="navbar bg-dark navbar-expand-lg navbar-dark">
<a class="navbar-brand" href="">Tindog</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Pricing</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Download</a>
        </li>
    </ul>
 </div>
</nav>
```

### Adding Grid Layouts to Make Website Responsive

- On large screen, make titles and buttons take up 50% of of the width on the left, and
  make the image take up 50% on the right of the width.
- on tablet and mobil size, the titles and image should each take up 100% of width.

```
 <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>Meet new and interesting dogs nearby.</h1>
            <button type="button">Download</button>
            <button type="button">Download</button>
          </div>
          <div class="col-lg-6">
            <img src="images/iphone6.png" alt="iphone-mockup" />
          </div>
        </div>
      </div>
```

## Bootstrap Containers

containers are basic building blocks of Bootstrap that contain, pad, and align your content within a given viewport.

default .container class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint.

```
<div class="container">
  <!-- Content here -->
</div>
```

Fluid containers are full width containers, spanning the entire width of the viewport

```
<div class="container-fluid">
  ...
</div>
```

## Bootstrap Buttons

```
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
```

Style the website button wiht dark and light color, also add apple ios and andriod icon to the buttons.

## updating margin and padding

```.title-image {
  width: 60%;
  transform: rotate(25deg);
}
```

## Style Features section

- Add font awesome icons and format the text and icons.
- Make the layout responsive.
  - lg screen take up 1/3 of the screen width
  - the icons should take up full width on md and sm screens.
- Make icons change color when mouse over

## Style Testimonials sections with carousel

```
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

- use button tag for the left and right arrow button will leave an white box around the div.
  replace it with a will resolve this.

## Style Pricing section with Bootstrap Cards

- use card group

```
<section id="pricing">
      <h2>A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

  <div class="row">
    <div class="pricing-colum col-lg-4">
          <div class="card">
            <div class="card-body">
              <h3>Mastiff</h3>
              <h2>$99 / mo</h2>
              <p>Pirority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button class="btn btn-dark btn-lg btn-block" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- use a ` <div class="row">` wrap around the card content so it's easier to change grid layout
- make button bigger and take take up the whole block
- add padding to the the section and around each card
- center text
- make cards same height by add h-100 to `<card>`

## Bring title image to the back of fature section using Z-index and stacking order

```
/* Title Image */
.title-image {
  width: 50%;
  transform: rotate(15deg);
  position: absolute;
  right: 30%;
}
/* Features */
#features {
  background-color: #fff;
  padding: 7% 14%;
  position: relative;
}
```

- add a white background to features
- change title image to absolute and features to relative (keep the css style)
- because features below title image in HTML flow, therefore features is on top
- now it covers a small portion of the image.

## Change the position of the image base on viewport

Goal:

- when go in tablet size or smaller, the title image need to change from absolute to static, so it take the full width of space it needs.
- also transform the tilted image back to stright and upright position.
- lastly, title text to be center alinged

```
@media (max-width: 1028px) {
  .title-image {
    position: static;
    transform: rotate(0);
  }
  #title {
    text-align: center;
  }
}
```

## Footer

- set background color, text color of Call to Action section
- style download buttons
- center text
- add icons for major social media websites
- use JavaScript to automatically update copyright year
- update href link in the navbar to direct to footer accordingly
