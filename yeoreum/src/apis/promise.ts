import moment from 'moment';
import tokenAxios from './config';

const requestGetMeetings = (
  location: string,
  time: Date,
  chatRoomNo: number,
) => {
  const formattedTime = moment(time).format('YYYY-MM-DD HH:mm:ss');
  return tokenAxios.post(`/meetings`, {
    location,
    time: formattedTime,
    chatRoomNo,
  });
};

const requestGetPromiseInquiry = (chatRoomNo: number) => {
  return tokenAxios.get(`/meetings/chats/${chatRoomNo}`);
};

export { requestGetMeetings, requestGetPromiseInquiry };
