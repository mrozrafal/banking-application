import React from 'react'



class News extends React.Component {

    state = {
        id: this.props.id,
        header: '',
        article: '',
        author: '',
        url: "",
        error: false,

    }




    getID() {
        this.setState({ value: this.props.id })

    }

    handleLoadArticle() {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=pl&' +
            'category=business&' +
            'sortBy=popularity&' +
            'apiKey=766ac1666a23429191276a3231269f7d';

        var req = new Request(url);
        fetch(req)
            .then(function (response) {
                if (response.ok) {
                    return response
                }
                throw Error("can't load an article")
            }).then(response => response.json())
            .then(content => {
                const art = content.articles[this.state.id];
                console.log(art.title);

                this.setState(prevState =>({
                    error: false,
                    header: art.title,
                    article: art.description,
                    author: art.author,
                    url: art.url
                }))
            })

            .catch(error => {
                console.log(error);
                this.setState(prevState => ({ error: true }))
            })
    }

    componentDidMount() {
        this.handleLoadArticle();
    }
componentWillUnmount() {

}


    render() {




        return (

            <section className="news" id="news">
               


                <article className="news__container">
                    <h3 className="news__header">{this.state.header}</h3>
                    <p className="news__item">
                        {this.state.article}
                    </p>
                    <em>{this.state.author}</em>
                    <a className="button-news" href={this.state.url}>Więcej</a>
                </article>

                
            </section>

        )
    }

}


export default News;