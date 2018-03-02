import React from 'react';
import { Link } from "react-router-dom";


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const index = this.props.match.params.id
    const mData = this.props.mData[index]

    return (
      <div>
        <div className="jumbotron MF">
          <h1>Movie Details</h1>
          <hr className="bg-dark" />
        </div>



        <Link to="/" className="btn btn-primary br2">Back To Movies</Link>

        <div className="container-fluid">


          <div className="card">
            <div className="card-body im p-0">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3">
                    <img src={mData.Poster} className="card-img p-2" />
                  </div>


                  <div className="row col-sm-9 p-0">
                    <div>
                      <h1 className="col">{mData.Title}</h1>
                      <div className="col row justify-content-around">
                        <div className="col text-success font-weight-bold">Released on {mData.Released}</div>
                        <div className="col text-success font-weight-bold"> RunTime {mData.Runtime}</div>
                        <div className="col text-success font-weight-bold"> Genre {mData.Genre}</div>
                        <p className= "col-12 font-weight-bold">Plot- {mData.Plot}</p>
                        <p className= "col-12 font-weight-bold">Awards- {mData.Awards}</p>
                        <p className="col-12 font-weight-bold">Metascore: {mData.Metascore}</p>
                        <p className="col font-weight-bold">IMDB: {mData.imdbRating}</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MovieDetailContainer;
