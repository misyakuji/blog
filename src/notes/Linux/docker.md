---
title: Docker常用操作
icon: pen-to-square
order: 10
date: 2024-08-29
category:
  - 容器化
tag:
  - 部署
---

### Docker列出所有容器

```shell
docker ps -a
```

### Docker列出所有镜像

```shell
docker images
```

### Docker删除模糊匹配的容器

```shell
docker rm -f $(docker ps -a --filter "name=jasper" -q)
```

### Docker删除模糊匹配的镜像

```shell
docker rmi -f $(docker images --filter "reference=*jasper*" -q)
```

### Docker删除所有none标签的镜像

```shell
docker rmi -f $(docker images -f "dangling=true" -q)
```
