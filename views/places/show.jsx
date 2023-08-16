const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive addComment">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not Rated Yet!</h3>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐";
    }
    rating = <h3>{stars} stars</h3>;

    comments = data.place.comments.map((c) => {
      return (
        <div className="border comments">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! ❤️"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form
            style={{ margin: 2 }}
            action={`/places/${data.place.id}/rant/${c.id}?_method=DELETE`}
            method="POST"
          >
            <button className="deleteCommentBtn" type="submit">
              &#10060;
            </button>
          </form>
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
          <div className="col-sm-4">
            <h1>{data.place.name}</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
              <div className="col-sm-24">
              <button type="submit" className="btnEditDelete">
              &#128465;
              </button>
             
            
              <a
                href={`/places/${data.place.id}/edit`}
                className="btnEditDelete"
              >
               &#9999;&#65039;
              </a>
              </div>
            </form>
            <h2>Rating</h2>
            {rating}

            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>

          
          </div>
          <hr />
        </div>
        <div className="align-items-center">
          <h2>Comments</h2>
          <div className="row">{comments}</div>
        </div>

        <h2 className="wantToRant">Got Your Own Rant or Rave? </h2>

        <form action={`/places/${data.place.id}/comment`} method="POST">
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="content">Content</label>
              <input
                className="form-control"
                id="content"
                name="content"
                placeholder="Enter your Content here"
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="author">Author</label>
              <input
                className="form-control"
                id="author"
                name="author"
                placeholder="Enter Your Name here"
              />
            </div>
            <div className="form-group col-sm-8">
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

            <div className="form-check col-sm-8">
              <input
                className="form-check-input"
                type="checkbox"
                id="rant"
                name="rant"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Rant?
              </label>
            </div>
            <div className="col-sm-12">
              <button
                className="btn btn-primary align-items-center"
                type="submit"
              >
                Add Comment
              </button>
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
