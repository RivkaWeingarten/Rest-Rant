const React = require("react");
const Def = require("../default");
// { place: places[id], id });
function show(data) {
  return (
    <Def>
      <main>
        <div>
          <h1>{data.place.name}</h1>
          <h2>Rating</h2>
          <p>Not Rated</p>
          <h2>Description</h2>
          <p>
            Located in {data.place.city}, {data.place.state} and serving{" "}
            {data.place.cuisines}
          </p>
          <p className="text-center">{data.place.cuisines}</p>
          <img src={data.place.pic} alt={data.place.name} />
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
        <div>
          <h2>Comments</h2>
          <p>No Comments yet </p>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
