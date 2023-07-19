const React = require("react");
const Def = require("../default");

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
          <h3><a href={`/places/${place.id}`}>{place.name}</a></h3>
          {place.showEstablished()}
          <p>Serving {place.cuisines}</p>
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

module.exports = index;
