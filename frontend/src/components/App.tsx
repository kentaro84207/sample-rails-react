import React, { useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/posts';

const App: React.FC = () => {
  const getPosts = async () => {
    try {
      const res = await axios.get(url);
      const items = res.data.data;
      for (const item of items) {
        console.log(item.id, item.title);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">hello</header>
    </div>
  );
};

export default App;
