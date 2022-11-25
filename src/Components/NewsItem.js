import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
            <span className="badge rounded-pill bg-danger">
              {source}

            </span>
          </div>


          <img src={imageUrl ? imageUrl : "https://www.gannett-cdn.com/presto/2022/06/26/NOKL/e45be14b-e0f9-4af3-81d2-6db586a55704-AP22177116191249.jpg?auto=webp&crop=2999,1687,x0,y152&format=pjpg&width=1200"} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}...
            </h5>

            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <Link to={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem