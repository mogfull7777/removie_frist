import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const App = () => {

    //1. 영화 데이터를 담는 그릇을 설정.

    const [movies, setMovies] = useState([])

    //2. 영화 정보를 가져오는 함수를 선언. async - await 는 짝.
    // axios로 외부 api데이터 가져올 수 있음. (터미널에서 npm install axios 로 실헹 가능)

    const getMovies = async  () => {
        const add = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1";

        try {
            const res = await axios.get(add)

            console.log("++++++++", res.data.results)
            setMovies(res.data.results)
        } catch (err) {
            console.log(err)
        }

    }

    //3. useEffect로 즉시 실행.

    useEffect(() => {
        getMovies()
    }, [])

    //map은 Araay일때만 사용 가능.

    return (
        // <div>
        //     <h1>{movies.length}</h1>
        //     {movies && movies.map(m => (
        //         <div>
        //             <h2>{m.title}</h2>
        //             <h3>출시일 : {m.release_date}</h3>
        //             <h4>평점 : {m.vote_average}</h4>
        //         </div>
        //     ))}
        // </div>
        <Container>
            <Row>
                {movies && movies.map(m => (
                    <Col className={"mt-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + m.poster_path} />
                            <Card.Body>
                                <Card.Title>{m.title.slice(0, 15)}</Card.Title>
                                <Card.Text>
                                    {m.overview.slice(0, 90)}
                                </Card.Text>
                                <Card.Text>
                                    출시일 : {m.release_date.slice(0, 90)}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}

            </Row>
        </Container>
    );
};

export default App;