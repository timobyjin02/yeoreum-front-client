import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import PostDetailHeader from '../../../components/board/post/PostDetailHeader';
import PostDetailMain from '../../../components/board/post/PostDetailMain';
import PostContainer from '../../../components/board/PostContainer';
import { useLoginState } from '../../../store/hooks';

interface PostDetailPageProps {
  postNo: number;
}

function PostDetail({ postNo }: PostDetailPageProps) {
  return (
    <PostContainer>
      <PostDetailHeader postNo={postNo} />
      <PostDetailMain postNo={postNo} />
    </PostContainer>
  );
}

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { postNo } = context.query;
  return {
    props: { postNo },
  };
};
