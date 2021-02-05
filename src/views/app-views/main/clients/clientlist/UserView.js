import React, { Component } from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import {
  MobileOutlined,
  MailOutlined,
  UserOutlined,
  CompassOutlined,
  CalendarOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  GlobalOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

export class UserView extends Component {
  render() {
    const {
      data: { name, username, id, company, phone, website, email, address = {} } = {},
      visible,
      close,
      data,
    } = this.props;

    const { city, street, suite, zipcode } = address;

    console.log(data);

    // <IdcardOutlined />

    return (
      <Drawer
        width={300}
        placement='right'
        onClose={close}
        closable={false}
        visible={visible}
      >
        <div className='text-center mt-3'>
          <Avatar size={80} src={`/img/avatars/thumb-${10 - (id % 10)}.jpg`} />
          {name && <h3 className='mt-2 mb-0'>{name}</h3>}
          {company && <span className='text-muted'>{company.name}</span>}
        </div>
        <Divider dashed />
        <div className=''>
          <h6 className='text-muted text-uppercase mb-3'>Account details</h6>
          <p>
            <UserOutlined />
            <span className='ml-3 text-dark'>id: {id}</span>
          </p>
          <p>
            <IdcardOutlined />
            <span className='ml-3 text-dark'>Username: {username}</span>
          </p>
        </div>

        <div className='mt-5'>
          <h6 className='text-muted text-uppercase mb-3'>CONTACT</h6>
          {phone && (
            <p>
              <MobileOutlined />
              <span className='ml-3 text-dark'>{phone}</span>
            </p>
          )}
          {email && (
            <p>
              <MailOutlined />
              <span className='ml-3 text-dark'>{email}</span>
            </p>
          )}
          {address && (
            <p>
              <CompassOutlined />
              <span className='ml-3 text-dark'>
                {city}, {street}, <br /> {suite}, {zipcode}
              </span>
            </p>
          )}
        </div>

        <div className='mt-5'>
          <h6 className='text-muted text-uppercase mb-3'>Web</h6>
          <p>
            <GlobalOutlined />
            <a href={'https://hammer.systems/'} className='ml-3'>
              {website}
            </a>
          </p>
        </div>
      </Drawer>
    );
  }
}

export default UserView;
