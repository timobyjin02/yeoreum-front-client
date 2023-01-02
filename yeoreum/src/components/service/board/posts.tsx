import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

const Posts = () => {
  const infos = [
    {
      kind: 'Notice',
      title: '여름이 시작되었습니다.',
      date: '2023.03.01',
    },
    {
      kind: 'Event',
      title: '새 학기를 여름과!',
      date: '2023.03.01',
    },
    {
      kind: 'Notice',
      title: '여름이 시작되었습니다.',
      date: '2023.03.01',
    },
    {
      kind: 'Event',
      title: '새 학기를 여름과!',
      date: '2023.03.01',
    },
    {
      kind: 'Notice',
      title: '여름이 시작되었습니다.',
      date: '2023.03.01',
    },
  ];
  const PostRender = ({ kind, title, date }: typeof infos[0]) => {
    return (
      <Wrapper>
        <Kind kind={kind}>{kind}</Kind>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Link href="/service/notice">
          <Image
            src="/service/arrow.svg"
            width={32}
            height={32}
            alt="Article link"
          />
        </Link>
      </Wrapper>
    );
  };
  return (
    <>
      {infos.map((info, i) => {
        return (
          <PostRender
            kind={info.kind}
            date={info.date}
            title={info.title}
            key={i}
          />
        );
      })}
    </>
  );
};

interface Kind {
  kind: string;
  children: React.ReactNode;
}
const Wrapper = styled.div`
  position: relative;
  padding: 1em 1em 1em 1em;
  border-bottom: #dbdbdb 1px solid;
  & > a {
    position: absolute;
    width: fit-content;
    right: 4px;
    top: 50%;
    margin-top: -16px;
  }
`;
const Kind = styled.p<Kind>`
  ${p => (p.kind === 'Notice' ? `color: #004D94;` : 'color: #ECC600;')}
  display: inline-block;
  font-size: 0.875em;
`;
const Date = styled.p`
  display: inline-block;
  margin-left: 12px;
  font-size: 0.875em;
  color: #dbdbdb;
`;
const Title = styled.h3`
  width: 97%;
  margin: 0.6em 0;
  font-weight: 600;
`;

export default Posts;
