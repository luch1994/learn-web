import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Protable, { ProColumns } from "@ant-design/pro-table";
import { Form, Input, Button, Card, Table } from 'antd';
import { connect } from 'umi';
import styles from './index.less';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'city',
    key: 'city',
  },
];

// UI层和数据层分开
class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getProductData({ name: '' });
  }

  // 成功才会执行这个函数
  onFinish = values => {
    console.log('values', values); // sy-log
    // this.props.getMoreDataBySearch(values);
    this.props.getProductData(values);
  };

  // 失败才会执行这个函数
  onFinishFailed = err => {
    console.log('err', err); // sy-log
  };

  // 暗号：中非
  render() {
    const { data } = this.props.more;
    console.log(data)
    return <Protable
      columns={columns}
      dataSource={data}
      rowKey="id"
    >
    </Protable>
  }
}

export default connect(
  // mapStateToProps
  ({ more }) => ({ more }),
  // mapDispatchToProps
  {
    getProductData: values => ({
      type: 'more/getProductData',
      payload: values,
    }),
    // getMoreDataBySearch: values => ({
    //   type: 'more/getMoreDataBySearch',
    //   payload: values,
    // }),
  },
)(More);
