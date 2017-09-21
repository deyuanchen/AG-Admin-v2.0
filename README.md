# AG-Admin
AG-Admin是国内首个基于`Spring Cloud`微`服务`化`开发平台`，具有统一授权、认证后台管理系统，其中包含具备用户管理、资源权限管理、网关API管理等多个模块，支持多业务系统并行开发，可以作为后端服务的开发脚手架。代码简洁，架构清晰，适合学习和直接项目中使用。核心技术采用Eureka、Fegin、Ribbon、Zuul、Hystrix、`JWT Token`、Mybatis等主要框架和中间件，前端采用`vue-element-admin`组件。 

## 如果有朋友用于实际项目中，欢迎在评论中留言公司名称。后续会放置首页，加以宣传。也欢迎大家支持AG-Admin，打造国内更好的`Spring Cloud`服务平台！


## 推荐🌧
考虑许多码友对于Spring Cloud的前后端分离和微服务实战有较多的疑问。老A专门录制课程如下，便于对AG-Admin更深入的了解
- 【基础+进阶】课程地址：
http://edu.csdn.net/course/detail/5840
- 【直接进阶】课程地址：
http://edu.csdn.net/course/detail/5914




访问地址: http://120.77.133.155/

账号/密码：admin/admin

![img](http://ofsc32t59.bkt.clouddn.com/17-09-12/1505228337599.jpg)




---------

# 模块说明
![img](http://ofsc32t59.bkt.clouddn.com/17-09-10/1504972862852.jpg)

### 架构详解
#### 监控
利用Spring Boot Admin 来监控各个独立Service的运行状态；利用Hystrix Dashboard来实时查看接口的运行状态和调用频率等。
#### 负载均衡
将服务保留的rest进行代理和网关控制，除了平常经常使用的node.js、nginx外，Spring Cloud系列的zuul和rebbion，可以帮我们进行正常的网关管控和负载均衡。
#### 服务注册与调用
基于Eureka来实现的服务注册与调用，在Spring Cloud中使用Feign, 我们可以做到使用HTTP请求远程服务时能与调用本地方法一样的编码体验，开发者完全感知不到这是远程方法，更感知不到这是个HTTP请求。
#### 熔断机智
因为采取了服务的分布，为了避免服务之间的调用“雪蹦”，我采用了Hystrix的作为熔断器，避免了服务之间的“雪蹦”。

------
# 项目结构
```
├─ace-security
│  │  
│  ├─ace-admin----------------管理端服务层
│  │  
│  ├─ace-gate-----------------网关负载中心
│  │ 
│  ├─ace-center---------------服务注册中心
│  │   
│  ├─ace-monitor--------------统一监控中心
│  │
│  ├─ace-config---------------统一配置中心
│  │
│  └─ace-api------------------公共服务接口包
│
```

------------
# 功能简介
1. 用户管理
2. 角色管理
3. 部门管理（待完善）
4. 菜单管理
5. 字典管理（待完善）
6. 操作日志（待完善）
8. 监控管理
9. 消息管理（待完善）
10. 代码生成（待完善）

-----


## 功能截图
### 基本功能
![img](http://ofsc32t59.bkt.clouddn.com/17-08-29/1503966669324.jpg)

![img](http://ofsc32t59.bkt.clouddn.com/17-08-30/1504048617941.jpg)

![img](http://ofsc32t59.bkt.clouddn.com/17-08-30/1504048654034.jpg)

![img](http://ofsc32t59.bkt.clouddn.com/17-08-30/1504048702195.jpg)

![img](http://ofsc32t59.bkt.clouddn.com/17-08-30/1504048764658.jpg)

![img](http://ofsc32t59.bkt.clouddn.com/17-08-30/1504048858901.jpg)

![img](http://ofsc32t59.bkt.clouddn.com/17-08-30/1504048938195.jpg)




## License

Apache License Version 2.0




