import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const RepoItem = (props) => {
    const {title, description, url, urlToImage} = props.article

    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{height: '100px'}} src={urlToImage}/>
            <p>{description}</p>
        </div>
    )
}

const Search = ({onSubmit}) => {
    const {input, setInput} = useState('')

    return (
        <div>
            <input type="text"
            onChange={e => setInput(e.target.value)}
            value={input}/>
            <button onClick={e => {
                if(input.trim().length!==0) onSubmit(input)
            }}>검색</button>
        </div>
    )
}

const GitHubSearchApp = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if(keyword){
        fetch('https://api.github.com/users/0pyaq0/repos', {headers: {Authorization: "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"}}, {keyword})
            .then(res => res.json())
            .then(data => {
                // 데이터 설정 및 로딩 상태 갱신
                setArticles(data.articles)
                setLoading(false)
            })
        }
        
    }, [])

    return (
        <div>
            <Search onSubmit={setKeyword}/>
            {
                articles.length === 0
                    ? loading ? <h1>깃허브 저장소를 불러오는 중입니다.</h1> : <h1>표시할 저장소가 없습니다.</h1>
                    :
                    <ul>
                        {
                            articles.map((article, idx) => {
                                return (<li key={idx}>
                                    <RepoItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

ReactDOM.render(<GitHubSearchApp />, document.getElementById("root"))