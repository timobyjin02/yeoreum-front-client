import axios from 'axios';
import { getToken } from '../utils/user';

const validateNickname = async (nickname: string) => {
  try {
    const token = getToken();
    const {
      data: {
        response: { isValidNickname: data },
      },
    } = await axios.get(`/api/users/valid-nicknames/${nickname}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
export default validateNickname;
