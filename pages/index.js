import React, {useState} from 'react'
import Head from 'next/head'
import {Row, Col, List} from 'antd'
import axios from 'axios'
import url from '../serviceApi.config.js'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/index.css'
import {CalendarOutlined,FireOutlined,FolderOpenOutlined} from '@ant-design/icons'


const Home = (list) => {
  const [myList, setMylist] = useState(list.data)
  return (
    <div>
      <Head>
        <title>React Blog</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item._id}</span>
                  <span><FolderOpenOutlined /> {item.introduce}</span>
                  <span><FireOutlined /> {item.type}</span>
                </div>
                <div className="list-context">{item.content}</div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <Advert/>
        </Col>
      </Row>
      <Footer/>
  </div>
  ) 
}

Home.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
      axios({
        url: url.getTitle,
        method: 'get'
      }).then((res) => {
        console.log('------', res.data)
        resolve(res.data)
      })
    })

    return promise;
}

export default Home
