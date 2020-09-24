import React, { useEffect, useState } from 'react';
import { Layout } from 'antd'
import axios from 'axios'
import './App.css';
import NavBar from './components/Navbar';
import Spinner from './components/Spinner/Spinner';
import Main from './components/Main';

function App() {
  const [state, setState] = useState({
    movies: [],
    page: 0,
    start: 0,
    loading: true,
    search: '',
  })
  const pageSize = 50;

  useEffect(() => {
    const getMovies = async () => {
      const result = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_x5AX4Lux');
      let movies = [];
      for (let b of result.data.items) {
        movies = movies.concat(b);
      }
      setState({ ...state, movies: movies, loading: false })
    }
    getMovies();
    // eslint-disable-next-line
  }, [])
  const onChange = (page) => {
    setState({ ...state, page: page, start: pageSize * (page - 1) })
  }
  const change = (e) => {
    setState({ ...state, search: e.target.value })
  }
  const serchRegx = new RegExp(state.search, 'i');
  const movies = state.search !== '' ? state.movies.filter(item => serchRegx.test(item.title)) : state.movies.slice(state.start, state.start + pageSize);
  return (
    <Layout className="layout">
      <NavBar search={state.search} change={change} />
      {state.loading ? <Spinner /> : <Main onChange={onChange} current={state.page} total={Math.ceil(movies.length * 1.0 / pageSize * 1.0)} movies={movies} />}

    </Layout>
  );
}

export default App;
