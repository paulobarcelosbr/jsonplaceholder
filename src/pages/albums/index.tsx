import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

import api from '../../services/api';
import { User } from '../../shared/interfaces/User';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getApi();
  }, []);

  async function getApi(): Promise<void> {
    const usersData = await api.get<User[]>(`/users`);
    setUsers(usersData.data);

    api.get(`/albums`).then((response) => {
      setAlbums(response.data);
    });
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
  ];

  return <Table columns={columns} dataSource={albums} />;
};

export default Albums;
