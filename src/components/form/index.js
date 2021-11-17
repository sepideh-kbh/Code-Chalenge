import React from "react";
import { Form, Input } from "antd";
import ShareButton from "./../button/index";

const ShareForm = (props) => {

  return (
    <Form
      onFinish={props.onFinish}
      ref={props.reference}
    >
      <Form.Item
        labelCol={{ xs: 24 }}
        wrapperCol={{ xs: 24 }}
        label="نام و نام خانوادگی"
        name="name"
      >
        <Input
          type="text"
          placeholder="نام و نام خانوادگی"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item
        labelCol={{ xs: 24 }}
        wrapperCol={{ xs: 24 }}
        label="شماره موبایل"
        name="mobile"
      >
        <Input
          type="text"
          placeholder="شماره موبایل"
          autoComplete="off"
          maxLength={11}
        />
      </Form.Item>
      <Form.Item
        labelCol={{ xs: 24 }}
        wrapperCol={{ xs: 24 }}
        label="سن"
        name="age"
      >
        <Input
          type="text"
          placeholder="سن"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item
        labelCol={{ xs: 24 }}
        wrapperCol={{ xs: 24 }}
        label="ایمیل"
        name="email"
      >
        <Input
          type="text"
          placeholder="ایمیل"
          autoComplete="off"
        />
      </Form.Item>
      <ShareButton
        flavor="filled"
        htmlType="submit"
        text={props.text}
        classes={props.classes}
      />
    </Form>
  )
}
export default ShareForm;