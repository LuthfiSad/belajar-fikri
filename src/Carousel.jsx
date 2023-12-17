import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
function Carousel() {
  return (
    <div className="w-[44   0px] carousel rounded-box">
      <div className="carousel-item w-full">
        <img
          src={image1}
          className="w-full object-cover"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={image2}
          className="w-full object-cover"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={image3}
          className="w-full object-cover"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      
    </div>
  );
}

export default Carousel;
