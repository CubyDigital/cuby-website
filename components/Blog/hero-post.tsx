import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import Avatar from './avatar';
import DateFormater from './date-formater';
import CoverImage from './cover-image';

import Author from 'types/author';

type Props = {
  title: string
  coverImage: string
  lead: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  lead,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Section>
      <div className="coverImage">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div>
        <div>
          <h3>
            <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div>
            <DateFormater dateString={date} />
          </div>
        </div>
        <div>
          <p>{excerpt}</p>
          <Avatar name={author.name} date={date} picture={author.picture} />
        </div>
      </div>
    </Section>
  )
}

export default HeroPost;

const Section = styled.section`
  .coverImage {
    width:100%;
    max-width: 960px;
    margin: auto;
  }
`;
