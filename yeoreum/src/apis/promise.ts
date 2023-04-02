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

export { requestGetMeetings };
