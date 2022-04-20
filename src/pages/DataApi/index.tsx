import React, {useEffect, useState} from "react";
import {Card, Col, Row, Tree} from 'antd';
import {getApiGroupTree} from "@/services/vapi/dataApi";


const {DirectoryTree} = Tree;


const Api: React.FC = () => {

  const [cardLoading, setCardLoading] = useState(false)
  const [treeData, setTreeData] = useState([])

  useEffect(() => {
    setCardLoading(true)
    getApiGroupTree().then(res => {
      const {data} = res
      setTreeData(data)

      setCardLoading(false)
    })
  }, [])

  return (
    <>
      <div style={{
        // width: '70%',
      }}>
        <Row>
          <Col span={8}>
            <Card bordered={true} loading={cardLoading}>
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

