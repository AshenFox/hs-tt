import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getClients,
  deleteClient,
  viewClient,
  hideClient,
  resetFields,
} from 'redux/actions/Clients';
import { Card, Table, Tooltip, Button } from 'antd';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';

const UserList = ({
  clients,
  getClients,
  deleteClient,
  viewClient,
  hideClient,
  resetFields,
}) => {
  const { list, loading, active_client, show_profile } = clients;

  const history = useHistory();
  const openSettings = (id) => () =>
    history.push(`/app/main/clients/settings/${id}/edit-profile`);

  const clientsArr = Object.values(list);

  useEffect(() => {
    getClients();

    return () => resetFields();
  }, []);

  const deleteUser = (userId) => deleteClient(`${userId}`);
  const viewUserProfile = (id) => viewClient(id);
  const closeUserProfile = () => hideClient();

  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => {
        return (
          <div className='d-flex'>
            <AvatarStatus
              src={`/img/avatars/thumb-${10 - (record.id % 10)}.jpg`}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        );
      },
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Username',
      dataIndex: 'username',
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase();
          b = b.username.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Company',
      dataIndex: 'company',
      sorter: {
        compare: (a, b) => {
          a = a.company.name.toLowerCase();
          b = b.company.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
      render: (company) => company.name,
    },
    {
      title: 'Website',
      dataIndex: 'website',
      sorter: {
        compare: (a, b) => {
          a = a.website.toLowerCase();
          b = b.website.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
      render: (website) => <a href={'https://hammer.systems/'}>{website}</a>,
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, record) => (
        <div className='text-right'>
          <Tooltip title='View'>
            <Button
              type='primary'
              className='mr-2'
              icon={<EyeOutlined />}
              onClick={() => {
                viewUserProfile(record.id);
              }}
              size='small'
            />
          </Tooltip>
          <Tooltip title='Edit'>
            <Button
              danger
              className='mr-2'
              icon={<EditOutlined />}
              /* */
              size='small'
              onClick={openSettings(record.id)}
            />
          </Tooltip>
          <Tooltip title='Delete'>
            <Button
              danger
              icon={<DeleteOutlined />}
              size='small'
              onClick={() => {
                deleteUser(record.id);
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <Card bodyStyle={{ padding: '0px' }}>
        {!loading && <Table columns={tableColumns} dataSource={clientsArr} rowKey='id' />}
        <UserView
          data={list[active_client]}
          visible={show_profile}
          close={() => {
            closeUserProfile();
          }}
        />
      </Card>
      {loading && <Loading cover='content' />}
    </>
  );
};

const mapStateToProps = (state) => ({
  clients: state.clients,
});

const mapDispatchToProps = {
  getClients,
  deleteClient,
  viewClient,
  hideClient,
  resetFields,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
