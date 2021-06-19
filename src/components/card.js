import React from 'react'
import image1 from '../assets/image1.jpg'

function Card() {
    return (
        <div className="card">
        <img src={image1} alt=""/>
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text text-secondary">
                ..And I am whatever you say I am. If I wasn't, then why would I say I am?. In the paper, the news, every day I am. Radio won't even play my jam. ‘Cause I am whatever you say I am. If I wasn't, then why would I say I am?. In the paper, the news, every day I am. I don't know, it's just the way I am.
                </p>

            </div>
        </div>
    )
}

export default Card
