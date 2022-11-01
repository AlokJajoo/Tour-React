export default function Slider() {
    return (
        <div class="a">
			<br/><br/><br/><br/><br/><br/>

			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.newskart.com/wp-content/uploads/2017/04/Top-12-Must-Visit-Tourist-Destinations-in-India.png" class="d-block w-100" alt="..." width="100%" height="600px"/>
    </div>
    <div class="carousel-item">
      <img src="https://travellerhunt.com/wp-content/uploads/2020/10/63-Best-Tourist-Places-To-Visit-In-India-For-A-Perfect-Holiday-In-2020-1384x752.jpg" class="d-block w-100" alt="..."  width="100%" height="600px"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.recruitment.guru/wp-content/uploads/2017/02/india.jpg" class="d-block w-100" alt="..."  width="100%" height="600px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
    );
  }