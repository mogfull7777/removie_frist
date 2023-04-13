import React, {useEffect, useState} from 'react';
import axios from "axios";

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
        <div>
            <h1>{movies.length}</h1>
            {movies && movies.map(m => (
                <div>
                    <h2>{m.title}</h2>
                    <h3>출시일 : {m.release_date}</h3>
                    <h4>평점 : {m.vote_average}</h4>
                </div>
            ))}
        </div>
    );
};

export default App;