import React from "react";
import { Table } from 'antd';

const ShareTable = props => {
  return (
    <Table
      columns={props.columns}
      pagination={false}
      rowKey={(record) => record.id}
      dataSource={props.dataSource}
    />
  )
}
export default (ShareTable);