import axios from 'axios';

const validateNickname = async (nickname: string) => {
  try {
    const {
      data: {
        response: { isValidNickname: data },
      },
    } = await axios.get(`/api/users/valid-nicknames/${nickname}`);
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
export default validateNickname;
