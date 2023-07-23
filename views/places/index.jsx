const React = require("react");
const Def = require("../default");
const Show = require("./show");
function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      // <div className="col-sm-6">
      //   <h2>
      //     <a href={`/places/${place.id}`}>{place.name}</a>
      //   </h2>
      //   <p className="text-center">{place.cuisines}</p>
      //   <img src={place.pic} alt={place.name} />
      //   <p className="text-center">
      //     Located in {place.city}, {place.state}
      //   </p>
      // </div>

      <div className="show-places">
        <img src={place.pic} alt={place.name} />

        <div className="place-info">
          <h3>
            <a href={`/places/${place.id}`}>{place.name}</a>{" "}
          </h3>

          <p>
            Located in {place.city}, {place.state}
          </p>
        </div>

        <div className="description-show">
          <h3>
            <a href={`/places/${place.id}`}>{place.name}</a>
          </h3>
          {place.showEstablished()}
          <p>Serving {place.cuisines}</p>
          {starsAverage(place)}
        </div>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <h1>PLACES TO RAVE ABOUT</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

function starsAverage(place) {
  console.log(place)
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not Rated Yet!</h3>;
  if (place.comments.length) {
    let sumRatings = place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐";
    }
    return <h3>{stars} stars</h3>;
  }
}

module.exports = index;
