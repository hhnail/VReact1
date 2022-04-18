import React from "react";

import {Card, Row, Col, Space, Tree} from 'antd';

const {DirectoryTree} = Tree;
const treeData = [
  {
    title: '用户模块',
    key: '0-0',
    children: [
      {
        title: '普通用户',
        key: '0-0-0',
        isLeaf: true,
      },
      {
        title: '贵宾用户',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: '社团模块',
    key: '0-1',
    children: [
      {
        title: '社团查询',
        key: '0-1-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      },
    ],
  },
];


const Api: React.FC = () => {
  return (
    <>
      <div style={{
        // width: '70%',
      }}>
        <Row>
          <Col span={8}>
            <Card bordered={true}>
              <DirectoryTree
                treeData={treeData}
                // 能否多选
                multiple={true}
                // 默认展开全部
                defaultExpandAll={true}
                style={{
                  width: '50%',
                }}
              />
            </Card>
          </Col>
          <Col span={16}>
            <Card>

            </Card>
          </Col>
        </Row>


      </div>
    </>
  )
}

export default Api;

