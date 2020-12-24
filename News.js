import React from 'react';
import './News.css';

function News() {
    return (
        <div className="news">
        <div className="news_header">
        LinkedIn News
        </div>
        <div className="news_bullitens">
        <div><span className="dot">.</span>Not you it's google</div>
        <div>
        <span className="dot">.</span>
        The upside to anger at work</div>
        <div><span className="dot">.</span>Not you it's google</div>
        <div><span className="dot">.</span>The upside to anger at work</div>
        </div>
        </div>
    )
}

export default News
