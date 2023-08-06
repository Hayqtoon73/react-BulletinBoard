import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com';

const ThreadList = ({ threads }) => {
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
      <Link to="/thread/new">新規スレッド作成</Link>
    </div>
  );
};

const NewThread = () => {
  return (
    <div>
      <h1>スレッド新規作成</h1>
      {/* ここに新規スレッド作成のフォームを追加 */}
    </div>
  );
};

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
    <Router>
      <Switch>
        <Route exact path="/">
          <ThreadList threads={threads} />
        </Route>
        <Route path="/thread/new">
          <NewThread />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
