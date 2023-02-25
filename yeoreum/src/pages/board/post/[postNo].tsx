import { useRouter } from 'next/router';
import React from 'react';
import PostDetailHeader from '../../../components/board/post/PostDetailHeader';
import PostDetailMain from '../../../components/board/post/PostDetailMain';
import PostContainer from '../../../components/board/PostContainer';
import { usePostDetailQuery } from '../../../hooks/queries/posts';

function PostDetail() {
  const postData = {
    no: 18,
    userNo: 6,
    nickname: '클라이밍장인',
    title: `
      어플 이벤트로 민뜨가는데 과팅할 분 4명 구합니다.
      근육맨 두명 있음 키 197에 3대 500 넘음 이건 진짜 말도 안되는 기회임 ㅋㅋ`,
    description: `
      이상! 이것이야말로 무한한 가치를 가진 것이다.
      사람은 크고 작고 간에 이상이 있음으로써 이상은 실로 인간의 부패를 방지하는 소금이라 할지니 인생에 가치를 주는 원질이 되는 것이다.
      그들은 앞이 긴지라 착목한는 곳이 원대하고 그들은 피가 더운지라 실현에 대한 자신과 용기가 있다.
      그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다.
      낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴?
      이상! 우리의 청춘이 가장 많이 품고`,
    location: '니마음속',
    meetingTime: '너될때',
    isDone: false,
    male: 1,
    female: 1,
    hostUserNums: [6, 5],
    hostNicknames: ['클라이밍장인', '제주조랑말'],
  };
  return (
    <PostContainer>
      <PostDetailHeader />
      <PostDetailMain />
    </PostContainer>
  );
}

export default PostDetail;
