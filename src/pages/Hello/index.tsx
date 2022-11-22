/*
 * @Author: fangdong dong.fang@quvideo.com
 * @Date: 2022-06-28 14:21:07
 * @LastEditors: fangdong dong.fang@quvideo.com
 * @LastEditTime: 2022-06-28 15:23:27
 * @FilePath: /base-start-vcm-react-v2/src/pages/Home/index.tsx
 */
import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => (
  <div>
    Home start
    <div>
      content Outlet
      <Outlet />
    </div>
    Home end
  </div>
)

export default Home
