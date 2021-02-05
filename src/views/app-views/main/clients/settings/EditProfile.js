import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editClient } from 'redux/actions/Clients';
import { useHistory } from 'react-router-dom';
import { Form, Avatar, Button, Input, Row, Col, message, Upload, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';

const EditProfile = ({ clients, id, editClient }) => {
  const { list } = clients;
  const data = list[id] ? list[id] : {};

  const { address = {}, company = {}, email, name, phone, username, website } = data;

  const { city, street, suite, zipcode } = address;
  const { name: companyName } = company;

  const history = useHistory();

  const [img, setImg] = useState(`/img/avatars/thumb-${10 - (id % 10)}.jpg`);

  const avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onFinish = (values) => {
    const key = 'updatable';
    message.loading({ content: 'Updating...', key, duration: 0 });

    editClient(id, values, key, history);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error({ content: `${errorInfo.errorFields[0].errors[0]}`, duration: 2 });
  };

  const onUploadAavater = (info) => {
    const key = 'updatable';
    if (info.file.status === 'uploading') {
      message.loading({ content: 'Uploading...', key, duration: 1000 });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => setImg(imageUrl));
      message.success({ content: 'Uploaded!', key, duration: 1.5 });
    }
  };

  const onRemoveAvater = () => setImg('');

  return (
    <>
      <Flex alignItems='center' mobileFlex={false} className='text-center text-md-left'>
        <Avatar size={90} src={img} icon={<UserOutlined />} />
        <div className='ml-md-3 mt-md-0 mt-3'>
          <Upload
            onChange={onUploadAavater}
            showUploadList={false}
            action={avatarEndpoint}
          >
            <Button type='primary'>Change Avatar</Button>
          </Upload>
          <Button className='ml-2' onClick={onRemoveAvater}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className='mt-4'>
        <Form
          name='basicInformation'
          layout='vertical'
          initialValues={{
            city,
            street,
            suite,
            zipcode,
            companyName,
            email,
            name,
            phone,
            username,
            website,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Name'
                    name='name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Username'
                    name='username'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Email'
                    name='email'
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Company'
                    name='companyName'
                    rules={[
                      {
                        required: true,
                        message: 'Please input a company name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Divider plain>Contact info</Divider>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label='Phone' name='phone'>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label='Website' name='website'>
                    <Input />
                  </Form.Item>
                </Col>
                <Divider plain>Adress</Divider>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label='City' name='city'>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label='Street' name='street'>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label='Suite' name='suite'>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label='Post code' name='zipcode'>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type='primary' htmlType='submit'>
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  clients: state.clients,
});

const mapDispatchToProps = { editClient };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
