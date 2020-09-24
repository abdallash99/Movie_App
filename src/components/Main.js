import { Row } from 'antd'
import React from 'react'
import MovieCard from './Card'
import Page from './Pagination'
const Main = ({ movies, total, current, onChange }) => {
    return (
        <div className="container">
            <Row>
                {
                    movies.map(item => <MovieCard key={item.id} movie={item} />)
                }
            </Row>
            <Page total={total * 10} current={current} onChange={onChange} />
        </div>
    );
}

export default Main;