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
            <div className="card-body im">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3 p2">
                    <img src={mData.Poster} className="card-img" />
                  </div>
                  <h1>{mData.Title}</h1>
                  <div className="row">

                  </div>
                  <p>hi</p>
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





//      <div>
//        <div className=“container”>
//          <div>
//            <h1>Movie Details</h1>
//            <Link to=‘/’ className=‘btn btn-primary’> Back to Search </Link>
//          </div>


//          <div key={movieData.imdbID} className=“card bg my-2 col-12" id=‘jumbo’>
//            <div className=“card-body”>
//              <div className=“row justify-content-center”>

//                {/* POSTER */}
//                <div className=“col-lg-3 float-left”>
//                  <img className=“text-center img-fluid max-width: 80% height: auto rounded mx-auto p-3" src={movieData.Poster} />
//                </div>

//                {/* MOVIE TEXT INFO */}
//                <div className=“col-lg-9 float-right”>
//                  <span className=“align-self-center mt-3">
//                    <h2 className=“pb-4 mb-0”> {movieData.Title} </h2> <h5>{movieData.Year} </h5> <h6>({movieData.Genre})</h6>
//                  </span>
//                  <div>
//                    <h6 className=“pb-4 mb-0">  Runtime: {movieData.Runtime} </h6>
//                  </div>
//                  <div className=“align-self-center”>
//                    <textbox>
//                      {movieData.Plot}
//                    </textbox>
//                  </div>
//                  <br />
//                  <div>
//                    <h6 className=“pb-4 mb-0"> Director: {movieData.Director} </h6>
//                  </div>

//                  <div>
//                    <h6 className=“pb-4 mb-0”> Writer(s): {movieData.Writer} </h6>
//                  </div>

//                  <div>
//                    <h6 className=“pb-4 mb-0"> imdb Rating: {movieData.imdbRating} </h6>
//                  </div>

//                  <div>
//                    <h6 className=“pb-4 mb-0”> Box Office: {movieData.BoxOffice} </h6>
//                  </div>

//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    )
//  }
// }


// export default MovieDetailContainer;










// import React from ‘react’;
// import { Link } from ‘react-router-dom’;

// class MovieDetailContainer extends React.Component {
//  constructor(props) {
//    super(props);
//  }

//  render() {
//    const index = this.props.match.params.id
//    const movieData = this.props.movieData[index]
//    console.log(this.props);
//    return (