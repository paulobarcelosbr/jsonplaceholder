import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import api from '../../services/api';
import { User } from '../../shared/interfaces/User';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getApi();
  }, []);

  async function getApi(): Promise<void> {
    const usersData = await api.get<User[]>(`/users`);
    setUsers(usersData.data);

    const posts = await api.get<Post[]>(`/posts`);
    setPost(posts.data);
  }

  function returnNameApi(userId: number): string | number {
    const userFind = users.find((u) => u.id === userId);
    return userFind ? userFind.name : userId;
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'userId',
      key: 'userId',
      render: (text: string, record: { userId: number }) => (
        <span>{returnNameApi(record.userId)}</span>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      key: 'body',
      dataIndex: 'body',
    },
  ];

  return <Table columns={columns} dataSource={post} />;
};

export default Posts;
