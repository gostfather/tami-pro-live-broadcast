/*
 * @Author: shenjinyong
 * @LastEditors: fangdong dong.fang@quvideo.com
 * @Date: 2022-01-12 11:41:01
 * @LastEditTime: 2022-06-28 14:16:32
 * @FilePath: /my-vcm-app/src/index.tsx
 * @Email: jinyong.shen@quvideo.com
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@src/App'
import reportWebVitals from './reportWebVitals'

export async function bootstrap() {}

export async function mount() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLElement)
}

if (!process.env.BUILD_ENV || process.env.NODE_ENV === 'development') {
  document.cookie = 'productList=2%2C5%2C3%2C6;'
  document.cookie = 'email=feng.chen@quvideo.com;'
  document.cookie = 'username=feng.chen;'
  document.cookie = 'groupIdList=1%2C9;'
  document.cookie = 'role_id=11;'
  document.cookie = 'country_code=CN;'
  document.cookie = 'project_type=1;'
  document.cookie = 'group_id=9;'
  document.cookie = 'user_leader_department=;'
  document.cookie =
    'user={"user":{"username":"feng.chen@quvideo.com","id":1241,"email":"feng.chen@quvideo.com"},"isLogin":true,"product_list":"2,5,3,6","group_list":"1,9","role_id":11,"app_channel":"","user_leader_department":null};'
  document.cookie = 'PRODUCT_ID=6'
  mount()
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
