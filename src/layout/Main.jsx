import React, { Component } from 'react';
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Preloader } from '../components/preloader';
import { ErrorMessage } from '../components/ErrorMessage';
import { EmptyResult } from '../components/EmptyResult';
import { startTransition } from 'react';

class Main extends Component {
    state = {
        movies: [],
        loading: false,
        error: null,
        searchTerm: 'spider-man',
        searchType: ''
    };

    componentDidMount() {
        this.searchMovies('movie', 'movie');
    }

    searchMovies = (search = 'spider-man', type = '') => {
        this.setState({ loading: true, error: null });

        let url = `http://www.omdbapi.com/?apikey=c0924e76&s=${search || 'movie'}`;
        if (type) url += `&type=${type}`;

        fetch(url)
            .then((response) => {
                if(!response.ok) throw new Error('Ошибка сети');
                return response.json();
            })
            .then((data) => {
                if(data.Response === 'False') throw new Error(data.Error);
                this.setState({ 
                    movies: data.Search || [],
                    loading: false,
                    searchTerm: search,
                    searchType: type
                });
            })
            .catch((error) => {
                this.setState({ 
                    loading: false,
                    error: error.message,
                    movies: [] 
                });
            });
    }

    render() {
        const { movies, loading, error } = this.state;

        return <main className='container content'>
            <Search searchMovies={this.searchMovies} />
            {loading ? <Preloader /> : (
                <>
                    {error && <ErrorMessage message={error} />}
                    {!error && movies.length ? <Movies movies={movies} /> : null}
                    {!error && !movies.length && <EmptyResult />}
                </>
            )}
        </main>
    }
}

export { Main };