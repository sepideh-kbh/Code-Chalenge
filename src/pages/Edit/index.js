import React, { useRef, useEffect, useCallback } from "react";
import { Row, Col, Typography } from "antd";
import ShareForm from "../../components/form/index";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const formRef = useRef();
  const { Title } = Typography;

  const setFieldsValue = useCallback(async () => {
    return formRef?.current?.setFieldsValue({
      name: state?.user?.name,
      mobile: state?.user?.mobile,
      age: state?.user?.age,
      email: state?.user?.email
    })
  },
    [state.user, formRef]
  );

  useEffect(() => {
    setFieldsValue();
  }, [setFieldsValue]);


  const onFinish = values => {
    const users = JSON.parse(localStorage.getItem('users'));
    const otherUsers = users.filter(item => item.id !== state?.user?.id);
    localStorage.setItem(
      'users',
      JSON.stringify([...otherUsers, { ...values, id: state?.user?.id }])
    );
    navigate('/List');
  }

  return (
    <div className="form-wrapper">
      <Row>
        <Col xs={24}>
          <Title level={2} className="title">ویرایش</Title>
        </Col>
        <Col xs={24}>
          <ShareForm
            onFinish={onFinish}
            text="ثبت اطلاعات"
            classes="height48"
            reference={formRef}
          />
        </Col>
      </Row>
    </div>
  )
}
export default Edit;