/*
 * @Author: fangdong dong.fang@quvideo.com
 * @Date: 2022-06-28 14:51:16
 * @LastEditors: shenjinyong
 * @LastEditTime: 2022-11-22 14:10:36
 * @FilePath: /tami-pro-live-broadcast/src/utils/router.tsx
 */
import React, { Suspense, lazy } from 'react'

export const lazyLoad = (path: string) =>
  lazy(() =>
    new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 0)
    })
      .then(() => import(`@pages/${path}`))
      .catch(() => import('@pages/404'))
  )

export const suspense = (Comp: React.FC) => (
  <Suspense fallback={<div />}>
    <Comp />
  </Suspense>
)

/**
 * @description 传入pages下相对路由路径
 * @param {string} path
 * @returns 懒加载的组件
 */
export const lazyRender = (path: string) => suspense(lazyLoad(path))
