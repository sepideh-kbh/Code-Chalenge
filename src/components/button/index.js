import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import "./style.scss";

const ShareButton = ({
  htmlType,
  loading,
  type,
  onClick,
  disabled,
  flavor,
  classes,
  icon,
  children,
  text,
  ...rest
}) => {
  return (
    <Button
      htmlType={htmlType}
      loading={loading}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`share-btn ${flavor}-btn ${classes || ""}`}
      {...rest}
    >
      {icon &&
        <FontAwesomeIcon icon={icon}/>
      }
      {text}
    </Button>
  )

}
export default (ShareButton);