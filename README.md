# 去哪儿网移动端

## vue2.0 升级 vue3.0

```bash
vue add vue-next
```

## 分支管理

```bash

# 安装指定版本依赖
npm install vue-awesome-swiper@2.6.7 --save

# git 创建新分支
git checkout -b 分支名
例如：git checkout -b index-swiper

# 获取创建新分支
git pull

# 查看当前分支信息，以及更改的文件
git status

# 将更改的代码提交到新分支上
git push --set-upsteream origin 分支名

# 切换分支
git checkout 分支名
git checkout master

# 合并分支,并将 index-swiper分支合并到主分支上
git merge origin/index-swiper

# 将更新的代码的提交到主分支上
git push

# 安装
install

# 卸载
npm uninstall XXX -S 卸载XXX依赖

```
