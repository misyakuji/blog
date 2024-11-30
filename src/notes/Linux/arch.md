---
title: Arch系
icon: fab fa-markdown
order: 2
category:
  - Linux
tag:
  - Markdown
---

# Arch Linux 常用命令

## 系统信息

- **查看系统信息**  
  `uname -a`  
  显示系统内核和版本信息。

- **查看硬件信息**  
  `lshw`  
  列出硬件详细信息。

- **查看 CPU 信息**  
  `lscpu`  
  显示 CPU 的架构和其他信息。

- **查看内存使用情况**  
  `free -h`  
  显示内存和交换区的使用情况。

- **查看磁盘空间**  
  `df -h`  
  显示磁盘使用情况。

- **查看磁盘 I/O**  
  `iostat`  
  显示 I/O 性能统计。

## 软件包管理

- **更新系统**  
  `sudo pacman -Syu`  
  更新所有已安装的软件包到最新版本。

- **安装软件包**  
  `sudo pacman -S <包名>`  
  安装指定的软件包。

- **卸载软件包**  
  `sudo pacman -R <包名>`  
  卸载指定的软件包。

- **搜索软件包**  
  `pacman -Ss <关键字>`  
  搜索包含关键字的软件包。

- **查看软件包信息**  
  `pacman -Qi <包名>`  
  显示指定软件包的信息。

- **清理缓存**  
  `sudo pacman -Sc`  
  删除不再使用的包缓存。

## 文件和目录操作

- **查看文件内容**  
  `cat <文件名>`  
  显示文件内容。

- **分页查看文件内容**  
  `less <文件名>`  
  分页显示文件内容。

- **列出目录内容**  
  `ls -la`  
  列出详细的目录内容，包括隐藏文件。

- **复制文件或目录**  
  `cp <源文件> <目标文件>`  
  复制文件或目录。

- **移动或重命名文件或目录**  
  `mv <源文件> <目标文件>`  
  移动或重命名文件或目录。

- **删除文件或目录**  
  `rm <文件名>`  
  删除文件。  
  `rm -r <目录名>`  
  递归删除目录及其内容。

## 权限管理

- **修改文件权限**  
  `chmod <权限> <文件名>`  
  修改文件权限。例如：`chmod 755 <文件名>`。

- **修改文件属主和属组**  
  `chown <用户>:<组> <文件名>`  
  更改文件的属主和属组。

## 网络管理

- **查看网络接口状态**  
  `ip addr`  
  显示网络接口的详细信息。

- **测试网络连接**  
  `ping <地址>`  
  测试与指定地址的连接。

- **查看网络连接**  
  `netstat -tuln`  
  显示网络连接和监听的端口。

## 服务管理

- **启动服务**  
  `sudo systemctl start <服务名>`  
  启动指定的服务。

- **停止服务**  
  `sudo systemctl stop <服务名>`  
  停止指定的服务。

- **重启服务**  
  `sudo systemctl restart <服务名>`  
  重启指定的服务。

- **查看服务状态**  
  `systemctl status <服务名>`  
  查看指定服务的状态。

- **启用服务开机自启动**  
  `sudo systemctl enable <服务名>`  
  启用服务开机自启动。

- **禁用服务开机自启动**  
  `sudo systemctl disable <服务名>`  
  禁用服务开机自启动。

## 日志管理

- **查看系统日志**  
  `journalctl`  
  显示系统日志。

- **查看最新日志条目**  
  `journalctl -xe`  
  显示最新的日志条目和错误信息。

## 用户管理

- **添加新用户**  
  `sudo useradd <用户名>`  
  添加一个新用户。

- **删除用户**  
  `sudo userdel <用户名>`  
  删除指定用户。

- **修改用户密码**  
  `sudo passwd <用户名>`  
  修改用户的密码。

## 其他常用命令

- **查找文件**  
  `find <目录> -name <文件名>`  
  在指定目录下查找文件。

- **搜索内容**  
  `grep <模式> <文件名>`  
  在文件中搜索匹配的内容。

- **显示磁盘使用情况**  
  `du -sh <目录名>`  
  显示指定目录的磁盘使用情况。

- **显示系统负载**  
  `top`  
  实时显示系统负载和进程信息。

# 开发中常用的命令笔记

## Git

- **克隆仓库**  
  `git clone <仓库地址>`  
  克隆一个 Git 仓库到本地。

- **查看状态**  
  `git status`  
  查看当前工作目录和暂存区的状态。

- **添加更改到暂存区**  
  `git add <文件名>`  
  将文件更改添加到暂存区。

- **提交更改**  
  `git commit -m "<提交信息>"`  
  提交暂存区的更改。

- **查看提交历史**  
  `git log`  
  查看提交历史记录。

- **推送更改到远程仓库**  
  `git push`  
  将本地的提交推送到远程仓库。

- **拉取远程仓库的更改**  
  `git pull`  
  从远程仓库拉取并合并更改。

- **创建新分支**  
  `git branch <分支名>`  
  创建一个新分支。

- **切换分支**  
  `git checkout <分支名>`  
  切换到指定的分支。

- **合并分支**  
  `git merge <分支名>`  
  将指定分支合并到当前分支。

## 编程语言

### Python

- **执行 Python 脚本**  
  `python <脚本名>.py`  
  运行 Python 脚本。

- **安装 Python 包**  
  `pip install <包名>`  
  使用 pip 安装 Python 包。

- **列出已安装的 Python 包**  
  `pip list`  
  显示已安装的 Python 包及其版本。

### Node.js

- **执行 Node.js 脚本**  
  `node <脚本名>.js`  
  运行 Node.js 脚本。

- **安装 Node.js 包**  
  `npm install <包名>`  
  使用 npm 安装 Node.js 包。

- **列出已安装的 Node.js 包**  
  `npm list`  
  显示已安装的 Node.js 包及其版本。

### Java

- **编译 Java 程序**  
  `javac <文件名>.java`  
  编译 Java 源文件。

- **运行 Java 程序**  
  `java <类名>`  
  运行编译后的 Java 程序。

## 容器管理（Docker）

- **查看 Docker 镜像**  
  `docker images`  
  列出所有 Docker 镜像。

- **运行 Docker 容器**  
  `docker run <镜像名>`  
  运行一个新的 Docker 容器。

- **列出运行中的容器**  
  `docker ps`  
  列出当前运行中的 Docker 容器。

- **停止 Docker 容器**  
  `docker stop <容器ID>`  
  停止指定的 Docker 容器。

- **删除 Docker 镜像**  
  `docker rmi <镜像名>`  
  删除指定的 Docker 镜像。

## 数据库

### MySQL

- **登录 MySQL**  
  `mysql -u <用户名> -p`  
  以指定用户登录 MySQL 数据库。

- **显示数据库列表**  
  `SHOW DATABASES;`  
  列出所有数据库。

- **选择数据库**  
  `USE <数据库名>;`  
  选择当前要操作的数据库。

- **查看表结构**  
  `DESCRIBE <表名>;`  
  显示表的结构。

### PostgreSQL

- **登录 PostgreSQL**  
  `psql -U <用户名> -d <数据库名>`  
  以指定用户登录 PostgreSQL 数据库。

- **列出数据库**  
  `\l`  
  列出所有数据库。

- **切换数据库**  
  `\c <数据库名>`  
  切换到指定的数据库。

- **查看表结构**  
  `\d <表名>`  
  显示表的结构。

## 其他开发工具

- **查看系统环境变量**  
  `printenv`  
  显示所有环境变量。

- **查找命令所在路径**  
  `which <命令名>`  
  显示命令的路径。

- **创建和激活虚拟环境（Python）**  
  `python -m venv <环境名>`  
  创建虚拟环境。  
  `source <环境名>/bin/activate`  
  激活虚拟环境。

- **生成 SSH 密钥对**  
  `ssh-keygen`  
  生成新的 SSH 密钥对。
