import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Delete from "../../pages/Delete/index";
import { returnMockData } from "../../utils/helpers";
import ShareTable from '../../components/Table';
import ShareButton from '../../components/button';
import { useNavigate } from "react-router-dom";

const List = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [userId, setUserId] = useState(null);

  const showModal = (user) => {
    setUserId(user.id);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getData = async () => {
    const data = JSON.parse(localStorage.getItem("users"));
    const result = await returnMockData(data, 2000);
    setDataSource(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const editUser = user => {
    navigate('/Edit', { state: { user } });
  }

  const columns = [
    {
      title: 'نام و نام خانوادگی',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'شماره موبایل',
      dataIndex: 'mobile',
      key: 'mobile'
    },
    {
      title: 'سن',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'ایمیل',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'تاریخ ایجاد',
      dataIndex: 'createDate',
      key: 'createDate',
      render: () => new Date().toLocaleString('fa-IR', { timeZone: 'Asia/Tehran' })
    }
  ];

  const isJustShow = window.location.pathname.includes('Show');

  if (!isJustShow) {
    columns.push({
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (item, record) => {
        return (
          <>
            <Row>
              <Col xs={12}>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => editUser(record)}
                />
              </Col>
              <Col xs={12}>
                <FontAwesomeIcon
                  className="red-text"
                  icon={faTrash}
                  onClick={() => showModal(record)}
                />
              </Col>
            </Row>
          </>
        );
      }
    })
  }

  return (
    <>
      {!isJustShow &&
        <Row gutter={[16, 32]} className="mb-1">
          <Col xs={16}>
            <Title level={2} className="title">داده ها</Title>
          </Col>
          <Col xs={4}>
            <ShareButton
              flavor="outlined"
              text="دریافت اطلاعات از سرور"
              onClick={() => navigate('/Show-List')}
            />
          </Col>
          <Col xs={4}>
            <ShareButton
              flavor="filled"
              text="ساخت اکانت جدید"
              icon={faPlusCircle}
              onClick={() => navigate("/")}
            />
          </Col>
        </Row>
      }
      <ShareTable columns={columns} dataSource={dataSource} />
      <Delete
        isVisible={isModalVisible}
        onCancel={handleCancel}
        userId={userId}
        getData={getData}
      />
    </>
  )
}

export default List;