import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <li className="list-item">
      <Link to={`/blogs/${id}`}>
        <div className="card">
          <img className="image-app" src={imageUrl} alt={`item${id}`} />
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="section">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
