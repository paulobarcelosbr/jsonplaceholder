import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

import api from '../../services/api';
import { User } from '../../shared/interfaces/User';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getApi();
  }, []);

  async function getApi(): Promise<void> {
    const usersData = await api.get<User[]>(`/users`);
    setUsers(usersData.data);

    api.get(`/todos`).then((response) => {
      setTodos(response.data);
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

  return <Table columns={columns} dataSource={todos} />;
};

export default Todos;
