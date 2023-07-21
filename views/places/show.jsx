const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }

  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form
              method="POST"
              action={`/places/${data.place.id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
          <hr />
        </div>
        <div className="align-items-center">
          <h2>Comments</h2>
          <p>{comments} </p>
        </div>

        <h2>Got Your Own Rant or Rave? </h2>
        <form action={`/places/${data.place.id}/comment`} method="POST">
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input
              className="form-control"
              id="content"
              name="content"
              placeholder="Enter your Content here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              className="form-control"
              id="author"
              name="author"
              placeholder="Enter Your Name here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="stars" className="form-label">
              Star Rating
            </label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="0.5"
              id="stars"
              name="stars"
            />
          </div>

          <div className="col-sm-6">
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value='rant'
                id="rant"
                name="rant"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Rant?
              </label>
            </div>
          </div>
          <button className="btn btn-primary align-items-center" type="submit">
            Add Comment
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
