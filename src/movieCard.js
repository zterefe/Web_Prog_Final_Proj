import React, {useRef, useEffect} from "react";

export default function MovieCard ({ movie }) {
  const cardComp = useRef(null);
  const cardImgComp = useRef(null);
  const cardContentComp = useRef(null);

  useEffect(() => {
      const card = cardComp.current;
      const cardImg = cardImgComp.current;
      const cardContent = cardContentComp.current;

      // Movement Animation
      card.addEventListener('mousemove', function (e) {
          let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
          let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
          card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      });

      // When the mouse Goes In
      card.addEventListener('mouseenter', function (e) {
          card.style.transition = 'none';
          // popout 
          cardImg.style.transform = "translateZ(150px)";
          cardContent.style.transform = "translateZ(150px)";
      });

      // When the mouse leaves
      card.addEventListener('mouseleave', function (e) {
          card.style.transform = `rotateY(0deg) rotateX(0deg)`;
          card.style.transition = 'all 0.5s ease';

          cardImg.style.transform = "translateZ(0px)";
          cardContent.style.transform = "translateZ(0px)";
      });
    }, []);

  return (
    <div className="card" ref = {cardComp} >
      <div ref = {cardImgComp}>
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
      </div>
      
      <div className="card--content" ref = {cardContentComp}>
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}
