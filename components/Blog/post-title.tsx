import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 
      style={{
        fontSize: '2.2em',
        color: '#242424',
        margin: 'auto',
        textAlign: 'left',
        padding: '60px 0% 30px'
      }}
    >
      {children}
    </h1>
  )
}

export default PostTitle
