import {Avatar,Divider} from 'antd'
import { WechatOutlined, QqOutlined, GithubOutlined } from '@ant-design/icons';

import '../public/style/component/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <div className="author-introduction">
                react 技术博客
                <Divider>社交账号</Divider>
                <Avatar size={28} style={{ backgroundColor: '#87d068' }} icon={<WechatOutlined />} className="account" />
                <Avatar size={28} style={{ backgroundColor: '#87d068' }} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} style={{ backgroundColor: '#87d068' }} icon={<GithubOutlined />}  className="account"/>

            </div>
        </div>
    )
}
export default Author