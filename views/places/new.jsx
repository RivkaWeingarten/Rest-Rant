const React = require("react");
const Def = require("../default");

function new_form(data) {
  console.log(data)
  let message = "";
  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }
  return (
    <Def>
      <main>
        <h1>Add a New Place </h1>
        {message}
        <div className="new-form">
          <form method="POST" action="/places">
            <div className="form-group">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                // {body.name}?defaultValue={body.name}: defaultValue=null
                defaultValue={data.body.name} 
               // {data.body.name}?`defaultValue:{data.body.name}`:placeholder: "Enter Company Name here"
                required
                placeholder="Enter Company Name here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pic">Place Picture</label>
              <input
                className="form-control"
                id="pic"
                name="pic"
                defaultValue={data.pic}
                placeholder="Enter URL for image here."
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                defaultValue={data.city}
                placeholder="Enter City here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                className="form-control"
                id="state"
                name="state"
                defaultValue={data.state}
                placeholder="Enter state here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                defaultValue={data.cuisines}
                placeholder="Enter Cuisine Here"
                required
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="founded">Founded Year</label>
              <input
                type="number"
                className="form-control"
                id="founded"
                name="founded"
                defaultValue={new Date().getFullYear()}
              />
            </div>
            <button
              className="btn btn-primary align-items-center"
              type="submit"
            >
              Add Place
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = new_form;
