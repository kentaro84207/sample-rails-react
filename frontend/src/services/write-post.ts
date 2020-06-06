import axios from 'axios';

const url = 'http://localhost:3000/api/v1/posts';

const writePost = async (title: string) => {
  try {
    await axios.post(url, { title });
  } catch (error) {
    throw new Error(error);
  }
};

export default writePost;
