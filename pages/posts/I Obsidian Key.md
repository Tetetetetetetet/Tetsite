---
layout: post
title: 'Obsidian+git windows & ios同步究极指南'
categories: CS
tag:
    - Tools
date: '2025-4-1'
update: '2025-4-1'
top: 0
excerpt_type: md
---
# Forehead
将笔记发出来一方面是解决其他人可能遇到的问题，一方面主要是*方便在自己移动端obsidian崩掉的时候重新搭* :)

**reference**
参考了知乎上一篇《obsidian git 多段同步》，不过这会儿找不到了

# 第一步
自然是将自己的Obsidian仓库上传到github，public/private均可


# **第二步是在ios段下载ish, 配置环境**
## ish配置环境
```
apk update
apk add git
apk add vim
apk add openssh
apk add openrc
apk add bash
```
## 公钥
**config github username&email**
```
git config --global user.name "yourname"
git config --global user.email "youremail"
```
**[Optional]Generate & cat Key**

*这一步可能是用不到的，因为Obsidian的git插件在ssh上似乎有一点问题，曾经成功过但是崩掉了，如果还是想要尝试ssh链接可以尝试*
```
ssh-keygen -t ed25519 -C "youremail"
cat /root/.ssh.id_ed25519.pub
```
复制输出去github上验证()
## Last Step
```
sudo sed -i '1i PermitRootLogin yes' /etc/ssh/sshd_config
```
或者
```
vim /etc/ssh/sshd_config
```
打开后在开头加一行
```
PermitRootLogin yes
```
重新开启ssh
```
rc-service sshd restart 
```
复制粘贴
```
cd ~ && mkdir obsidian && mkdir obsidian/repo
mount -t ios . obsidian 
cd ~/obsidian/repo
git init
git config --global --add safe.directory /root/obsidian/repo
git remote add origin <github仓库链接(推荐使用https)>
git pull
```
会打开文件管理器，需要选中Obsidian所在目录
# Pure Version
```
apk update
apk add git
apk add vim
apk add openssh
apk add openrc
apk add bash
git config --global user.name "username"
git config --global user.email "youremail"
ssh-keygen -t ed25519 -C "youremail"
```
press "enter" several times
```
cat /root/.ssh/id_ed25519.pub
vim /etc/ssh/sshd_config
```
add a row
```
PermitRootLogin yes
```

```
rc-service sshd restart 
cd ~ && mkdir obsidian
mount -t ios . obsidian
cd ~/obsidian
git init
git clone <github仓库链接(推荐使用https)>
```
**Authentication: 然后需要输入**
- Username: github Username
- Password: (其实不是password, github将其改为了personal access token)
