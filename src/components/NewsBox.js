import React from 'react';
import News from './News';

const NewsBox = () => {
    return (       <section className="news__box">
    <h2 id="fetched-news-from-newsapi" className="news__big-header">Aktualności</h2>
    <News id={0} />
    <News id={1} />
    <News id={2} />
    <h6 className="source-info"> Artykuły pobrano z newsapi.org</h6>
  </section>);
}
 
export default NewsBox;