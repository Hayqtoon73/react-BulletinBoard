import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com';

const App = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // APIからスレッド情報を取得する関数
    const fetchThreads = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/threads`);
        setThreads(response.data); // 取得したデータをスレッド一覧にセット
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div>
      <h1>スレッド一覧</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <h3>{thread.title}</h3>
            <p>{thread.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
