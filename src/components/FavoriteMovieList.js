import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    const handleClick = (id)=>{
        props.removeFavorite(id)
    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick ={()=>handleClick(movie.id)}><span class="material-icons" >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapState = state=>{
    return{
        favorites:state.favoriteReducer.favorites

    }
}
export default connect(mapState,{removeFavorite})(FavoriteMovieList)