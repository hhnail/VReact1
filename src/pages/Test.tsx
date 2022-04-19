import React, {useState,useEffect} from "react";
import {Table} from "antd";
import axios from "axios";
import {getApiGroupTree} from "@/services/vapi/dataApi";

const Test: React.FC = () => {

  const [dataSource,setDataSource] = useState([])

  useEffect(() => {
    getApiGroupTree().then(resp=>{

        const {data} = resp
        setDataSource(data)

      console.log(data)

    })
  });


  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    }];


  return (
    <div style={{
      width:'100%',
      height:'100%',
    }}>
      <Table dataSource={dataSource}
             columns={columns}
             pagination={{
        pageSize:5
      }}
             style={{

             }}
      />
    </div>
  )
}

export default Test;

