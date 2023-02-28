import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import DetailHeader from '../../../../components/board/apply/DetailHeader';
import DetailMain from '../../../../components/board/apply/DetailMain';
import PostContainer from '../../../../components/board/PostContainer';

interface ApplicationPageProps {
  postNo: number;
  applicationNo: number;
}

export interface Param {
  postNo: number;
  applicationNo: number;
}

function ApplicationDetail({ postNo, applicationNo }: ApplicationPageProps) {
  const param: Param = { postNo, applicationNo };

  return (
    <PostContainer>
      <DetailHeader param={param} />
      <DetailMain param={param} />
    </PostContainer>
  );
}

export default ApplicationDetail;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const { postNo, applicationNo } = query;
  return {
    props: {
      postNo,
      applicationNo,
    },
  };
};
