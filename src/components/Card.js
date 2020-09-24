import React from 'react'
import { Card, Col } from 'antd'
const MovieCard = ({ movie }) => {
    return (
        <Col sm={24} md={12} lg={6} style={{ margin: '20px' }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="movie" src={movie.image} />}
            >
                <Card.Meta title={movie.title} description={`Rank :${movie.rank}`} />
            </Card>
        </Col>

    );
}

export default MovieCard;