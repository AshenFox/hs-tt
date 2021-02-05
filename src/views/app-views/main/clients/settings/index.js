import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClient } from 'redux/actions/Clients';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Redirect, Route, Switch, useParams } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import Notification from './Notification';
import Loading from 'components/shared-components/Loading';

const SettingOption = ({ match, location }) => {
  return (
    <Menu
      defaultSelectedKeys={`${match.url}/edit-profile`}
      mode='inline'
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key={`${match.url}/edit-profile`}>
        <UserOutlined />
        <span>Edit Profile</span>
        <Link to={'edit-profile'} />
      </Menu.Item>
      <Menu.Item key={`${match.url}/notification`}>
        <BellOutlined />
        <span>Notification</span>
        <Link to={`notification`} />
      </Menu.Item>
    </Menu>
  );
};

const SettingContent = ({ match }) => {
  const {
    url,
    params: { id },
  } = match;

  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/edit-profile`} />
      <Route
        path={`${url}/edit-profile`}
        render={(props) => <EditProfile {...props} id={id} />}
      />
      <Route path={`${url}/notification`} component={Notification} />
    </Switch>
  );
};

const Setting = (props) => {
  const {
    clients: { loading, list },
    getClient,
  } = props;

  const { id } = useParams();

  useEffect(() => {
    const user = list[id];

    if (!user) getClient(id);
  }, []);

  return (
    <div>
      {loading && <Loading cover='content' />}
      {!loading && (
        <InnerAppLayout
          sideContentWidth={320}
          sideContent={<SettingOption {...props} />}
          mainContent={<SettingContent {...props} />}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  clients: state.clients,
});

const mapDispatchToProps = { getClient };

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
