import Avatar from './avatar'

import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from 'types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div style={{ marginTop: 50, marginBottom: -10 }}>
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div>
        <div style={{ 
          margin: 'auto',
          textAlign: 'left',
          padding: '20px 0% 0px'
        }}>
          <Avatar name={author.name} date={date} picture={author.picture} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
