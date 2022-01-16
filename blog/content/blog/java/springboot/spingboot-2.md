---
slug: /java/springboot-2
title: Spring vs. Spring Boot vs. Spring MVC
date: "2022-01-16 16:38"
description: 我们的 Spring Boot 教程包括 Spring Boot 的所有主题，例如特性、项目、maven 项目、启动项目向导、Spring Initializr、CLI、应用程序、注释、依赖管理、属性、启动器、Actuator、JPA、JDBC 等。
catalogue: java
refs: https://www.softwaretestingmaterial.com/java-tutorial/
sort: 2
---
#### Spring vs. Spring Boot vs. Spring MVC

##### Spring vs. Spring Boot
Spring：Spring Framework是Java最流行的应用程序开发框架。 Spring 框架的主要特性是依赖注入或控制反转 (IoC)。 借助 Spring Framework，我们可以开发松散耦合的应用程序。 比较适合纯粹定义了应用程序类型或特征。 

Spring Boot：Spring Boot 是 Spring Framework 的一个模块。 它允许我们以最少或零配置构建独立应用程序。 如果我们想开发一个简单的基于 Spring 的应用程序或 RESTful 服务，最好使用它。

下面表格Spring 和 Spring Boot 之间的主要差异比较：
|Spring|Spring Boot|
|  ----  | ----  |
|Spring Framework 是一个广泛使用的 Java EE 框架，用于构建应用程序。|Spring Boot Framework 广泛用于开发 REST API。|
|它旨在简化 Java EE 开发，从而提高开发人员的工作效率。|它旨在减少代码量并提供开发 Web 应用程序的最简单方法。|
|Spring 框架的主要特性是依赖注入。|Spring Boot 的主要功能是自动配置。 它会根据要求自动配置类。|
|通过允许我们开发松散耦合的应用程序，它有助于使事情变得更简单。|它有助于创建具有较少配置的独立应用程序。|
|开发人员编写了大量代码（样板代码）来完成最小的任务。|它减少了样板代码。|
|要测试 Spring 项目，我们需要显式设置服务器。|Spring Boot 提供嵌入式服务器，如 Jetty 和 Tomcat 等。|
|它不提供对内存数据库的支持。|它提供了几个用于处理嵌入式和内存数据库（如 H2）的插件。|
|开发人员在 pom.xml 中手动定义 Spring 项目的依赖项。|Spring Boot 在 pom.xml 文件中带有 starter 的概念，它在内部负责根据 Spring Boot Requirement 下载依赖项 JAR。|

#### Spring Boot vs. Spring MVC
<b>Spring Boot</b>：Spring Boot 使快速引导和开始开发基于 Spring 的应用程序变得容易。 它避免了很多样板代码。 它在幕后隐藏了很多复杂性，以便开发人员可以快速上手并轻松开发基于 Spring 的应用程序。

<b>Spring MVC</b>：Spring MVC 是一个用于构建 Web 应用程序的 Web MVC 框架。 它包含许多用于各种功能的配置文件。 它是一个面向 HTTP 的 Web 应用程序开发框架。

Spring Boot 和 Spring MVC 存在于不同的目的。 下面讨论 Spring Boot 和 Spring MVC 之间的主要比较：


|Spring Boot|Spring MVC|
|  ------  | ------  |
|<b>Spring Boot</b> 是 Spring 的一个模块，用于使用合理的默认值打包基于 Spring 的应用程序。|<b>Spring MVC</b>是Spring框架下基于模型视图控制器的web框架|
|它提供了默认配置来构建 Spring 驱动的框架。|它提供了用于构建 Web 应用程序的现成功能。|
|无需手动构建配置。|	它需要手动构建配置。|
|不需要部署描述符。|需要一个部署描述符。|
|它避免了样板化代码并将依赖项一次性打包。|它分别指定每个依赖项。|
|它减少了开发时间并增加了产品性|要达到同样的效果需要更多的时间。|

