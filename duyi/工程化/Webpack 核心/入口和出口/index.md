### 入口

#### 入口真正配置的是chunk

入口通过 entry 进行配置

规则: 

- name: chunnkname
- fullhash: 总的资源hash,通常用于解决缓存问题
- chunkhash: 使用chunkhash
- id: 使用chunkId 