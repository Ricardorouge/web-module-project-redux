import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteMovie} from '../actions/movieActions'
import { addFavorite } from '../actions/favoritesActions';
const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const {movies} = props;
    const movie = movies.find(movie=>movie.id===Number(id));
    const removeMovie = (id)=>{
        props.deleteMovie(id)
        push('/movies')
    }
    const handleFavorite =()=>{
        props.addFavorite(movie)
    }
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {props.displayFavorites&&<span className="m-2 btn btn-dark" onClick={handleFavorite} >Favorite</span>}
                            <span className="delete"><input onClick={()=>removeMovie(movie.id)} type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
const mapState =state=>{
    return{
        movies:state.movieReducer.movies,
        displayFavorites:state.favoriteReducer.displayFavorites,
    }
}
export default connect(mapState,{deleteMovie,addFavorite})(Movie);