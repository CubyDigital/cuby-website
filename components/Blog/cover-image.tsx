import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Imagem de capa: ${title}`} 
      style={{ 
        width: '100%',
        borderRadius: 5
      }}
    />
  )
  return (
    <div>
      {slug ? (
        <Link as={`../posts/${slug}`} href="../posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
