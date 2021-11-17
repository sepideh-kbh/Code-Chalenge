import React from "react";
import { Row, Col, Modal, Typography } from "antd";
import ShareButton from "../../components/button";

const { Text } = Typography;

const Delete = props => {

  const onDelete = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const updatedList = users.filter(item => item.id !== props.userId);
    localStorage.setItem('users', JSON.stringify(updatedList));
    props.onCancel();
    props.getData();
  }

  return (
    <Modal
      title="حذف از ردیف"
      visible={props.isVisible}
      onCancel={props.onCancel}
      width={360}
      footer={null}
      className={props.className}
    >
      <Row justify="end">
        <Col xs={24}>
          <Text>آیا از حذف این ردیف مطمئن هستید؟</Text>
        </Col>
        <Col xs={6}>
          <ShareButton
            flavor="filled"
            htmlType="submit"
            text="حذف"
            onClick={onDelete}
          />
        </Col>
      </Row>


    </Modal>
  )
}
export default (Delete);