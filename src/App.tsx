/*
 * @Author: shenjinyong
 * @LastEditors: shenjinyong
 * @Date: 2022-01-12 14:21:37
 * @LastEditTime: 2022-11-22 14:06:02
 * @FilePath: /tami-pro-live-broadcast/src/App.tsx
 * @Email: jinyong.shen@quvideo.com
 */
import React from 'react'
import Router from '@routers/router'
import { HashRouter } from 'react-router-dom'
// import { StoresContext, store } from '@src/store'

export default function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  )
}
