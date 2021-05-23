import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movie: getMovies(),
  };

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movie.filter((m) => m._id !== movie._id);
    this.setState({ movie: movies });
  };

  render() {
    const { length: movieCount } = this.state.movie;
    if (movieCount === 0) return <p>There are no movies in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {movieCount} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movie.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(movie);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
