/*
 * @Author: shenjinyong
 * @LastEditors: shenjinyong
 * @Date: 2022-01-12 14:21:37
 * @LastEditTime: 2022-11-22 14:11:57
 * @FilePath: /tami-pro-live-broadcast/src/routers/router.js
 * @Email: jinyong.shen@quvideo.com
 */
import { useRoutes } from 'react-router-dom'
import { lazyRender } from '@src/utils'

const routes = [
  {
    path: '/',
    element: lazyRender('Hello')
  }
]

// 不要修改
const router = () =>
  useRoutes([
    ...routes,
    {
      path: '*',
      element: lazyRender('404')
    }
  ])

export default router
