import React from "react";
import { Row, Col, Typography } from "antd";
import ShareForm from "../../components/form/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { Title } = Typography;
  let navigate = useNavigate();

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem('users'));
    let updatedUsersList;
    if(users?.length) {
      updatedUsersList = [...users, {...values, id: users.length + 1}];
    } else {
      updatedUsersList = [{ ...values, id: 1 }];
    }
    localStorage.setItem('users', JSON.stringify(updatedUsersList));
    navigate("List");
  }

  return (
    <div className="form-wrapper">
      <Row>
        <Col xs={24}>
          <Title level={2} className="title">فرم زیر را پر کنید.</Title>
        </Col>
        <Col xs={24}>
          <ShareForm
            onFinish={onFinish}
            text="ساخت اکانت"
            classes="height48"
          />
        </Col>
      </Row>
    </div>
  )
}
export default Login;