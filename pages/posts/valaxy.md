---
layout: post
title: 'valaxy 开发 log'
categories: valaxy
tag:
    - Skill
    - CS
    - Self-Learning Log
date: '2025-3-3'
update: '2025-3-3'
top: 0
excerpt_type: md
---
# 当我学会开始看官方doc
## shortcuts
`package.json`里可以设置快捷命令
```json
{
  "scripts": {
    "build": "npm run build:ssg",
    "build:spa": "valaxy build",
    "build:ssg": "valaxy build --ssg",
    "dev": "valaxy dev",
    "new": "valaxy new",
    "rss": "valaxy rss"
  }
}
```
## Post templates
scaffolds目录下设置

## Config
见[here](https://github.com/YunYouJun/valaxy/blob/main/packages/valaxy/types/config.ts#L188)

valaxy.config.ts.themeConfig: (here)[https://github.com/YunYouJun/valaxy/blob/main/packages/valaxy-theme-yun/docs/zh-CN/config.md]

## emoji
[list](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

## icon
默认支持[remix](https://remixicon.com/)

