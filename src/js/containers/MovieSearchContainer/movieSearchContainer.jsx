import React from 'react';
import { theFilms } from "./searchActions";
import { Link } from 'react-router-dom'



export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }

  handleMovieSearch() {
    var movie = document.getElementById("movieSearch").value;
    const { dispatch } = this.props
    dispatch(theFilms(movie));

  }

  render() {

    const { mData } = this.props
    console.log("ICE CREAM ", mData)
    return (
      <div>
        <div className="jumbotron MF">
          <h1>Movie Finder</h1>
          <hr className="bg-dark" />
        </div>

        <form>
          <div className="form-row">
            <div className="col">
              <div className="input-group">
                <input type="text" className="form-control" placeholder=" Enter In A Movie Title" aria-label="search for" id="movieSearch" />
                <span className="input-group=btn">
                  <button className="btn btn-primary" type="button" onClick={this.handleMovieSearch}>FIND!</button>
                </span>
              </div>
            </div>
          </div>
        </form>

        <div className="container-fluid">
          <br />
          {
            mData.length > 0 && mData.map((mDataItem, index) => {
              return (
                <div key={mDataItem.imdbID} className="card">

                  <div className="card-body im" >

                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-3 p-2">
                          <img src={mDataItem.Poster} className="card-img" />
                        </div>

                        <div className="col-sm-9">
                          <h4 className="card-text tColor">{mDataItem.Title}</h4>
                          <p className="card-text tColor" >{mDataItem.Year}</p>
                          <p className="card-text tColor">{mDataItem.Plot}</p>
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-sm-10"></div>
                        <div className="col-sm-2">
                          <Link to={`/movie/${index}`} className="btn btn-primary br">more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>               
              )
            })
          }
        </div>
      </div>
    )
  }
}
