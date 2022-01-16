---
slug: /java/springboot-1
title: SpringBoot教程
date: "2022-01-15 16:38"
description: 我们的 Spring Boot 教程包括 Spring Boot 的所有主题，例如特性、项目、maven 项目、启动项目向导、Spring Initializr、CLI、应用程序、注释、依赖管理、属性、启动器、Actuator、JPA、JDBC 等。
catalogue: java
refs: https://www.softwaretestingmaterial.com/java-tutorial/
---

- 此篇Spring Boot 教程提供了 Spring Framework 的基本和高级概念。 我们的 Spring Boot 教程是为初学者和专业人士设计的。

- Spring Boot 是一个 Spring 功能模块，为 Spring 框架提供 RAD（快速应用程序开发）功能

- 我们的 Spring Boot 教程包括 Spring Boot 的所有主题，例如特性、项目、maven 项目、启动项目向导、Spring Initializr、CLI、应用程序、注释、依赖管理、属性、启动器、Actuator、JPA、JDBC 等。

#### 什么是Spring Boot
Spring Boot 是一个构建在 Spring Framework 之上的项目。 它提供了一种更简单、更快捷的方式来设置、配置和运行简单的和基于 Web 的应用程序。

它是一个 Spring 模块，为 Spring Framework 提供 RAD（快速应用程序开发）功能。 它用于创建一个独立的基于 Spring 的应用程序，您可以直接运行它，因为它需要通过Spring 配置。

![what-is-spring-boot](./images/what-is-spring-boot.png)

从上面的图可以看出springboot的组成关系。简单的说Spring Boot 是 Spring Framework 和 Embedded Servers 组成。

在 Spring Boot 中，不需要繁琐的 XML 配置（部署描述符）。 它使用约定优于配置软件设计范例，这将很大程度减少了开发人员的工作量。

我们可以使用 Spring STS IDE 或 Spring Initializr 来开发 Spring Boot Java 应用程序。

##### 为什么要使用 Spring Boot 框架？
我们使用 Spring Boot 框架，因为：
 - Spring Boot 中使用了依赖注入方法。
 - 它包含强大的数据库事务管理功能。
 - 它简化了与 JPA/Hibernate ORM、Struts 等其他 Java 框架的集成。
 - 它降低了应用程序的成本和开发时间。

 与 Spring Boot 框架一起，许多其他 Spring 姊妹项目有助于构建满足现代业务需求的应用程序。 有以下Spring姐妹项目如下：
 
 
- Spring Data：它简化了来自关系数据库和 NoSQL 数据库的数据访问。
- Spring Batch：它提供了强大的批处理功能。
- Spring Security：它是一个为应用程序提供强大安- 全性的安全框架。
- Spring Social：它支持与LinkedIn等社交网络的集成。
- Spring Integration：它是企业集成模式的一种实现。 它使用轻量级消息传递和声明性适配器促进与其他企业应用程序的集成。 

#### Spring Boot 的优点
 
- 它创建可以使用 Java -jar 启动的独立 Spring 应用程序。
- 它借助 Tomcat、Jetty 等不同的嵌入式 HTTP 服务器轻松测试 Web 应用程序。我们不需要部署 WAR 文件。
- 它提供了自以为是的“入门”POM 来简化我们的 Maven 配置。
- 它提供生产就绪功能，例如指标、健康检查和外部化配置。不需要 XML 配置。
- 它提供了一个用于开发和测试 Spring Boot 应用程序的 CLI 工具。
- 它提供插件的数量。
- 它还最大限度地减少了编写多个样板代码（必须包含在许多地方而几乎没有更改的代码）、XML 配置和注释。
- 它提高了生产力并缩短了开发时间。 

#### Spring Boot 的局限性

Spring Boot  会产生程序中用不到的依赖项目。 这些依赖项增加了应用程序的大小。

#### Spring Boot 的目标

Spring Boot 的主要目标是减少开发、单元测试和集成测试时间。

- 提供固定模式的开发方法
- 避免定义更多的注解配置
- 避免编写大量导入语句
- 避免 XML 配置。

通过以上方法，Spring Boot Framework 减少了开发时间、开发人员的工作量并提高了生产力。

#### Spring Boot 的使用条件

要创建 Spring Boot 应用程序，以下是先决条件。 在本教程中，我们将使用Spring Tool Suite (STS) IDE.

- Java 1.8
- Maven 3.0+
- Spring Framework 5.0.0.BUILD-SNAPSHOT
- An IDE (Spring Tool Suite) is recommended.

#### Spring Boot 特性 
 
- Web Development
- SpringApplication
- Application events and listeners
- Admin features
- Externalized Configuration
- Properties Files
- YAML Support
- Type-safe Configuration
- Logging
- Security

##### Web Development

它是一个非常适合 Web 应用程序开发的 Spring 模块。 我们可以轻松地创建一个自包含的 HTTP 应用程序，该应用程序使用 Tomcat、Jetty 或 Undertow 等嵌入式服务器。 我们可以使用 spring-boot-starter-web 模块来快速启动和运行应用程序。

##### SpringApplication

SpringApplication 是一个类，它提供了一种方便的方式来引导 Spring 应用程序。 可以从 main 方法开始。 我们可以通过调用静态 run() 方法来调用应用程序。

```java
public static void main(String[] args)  
{    
SpringApplication.run(ClassName.class, args);    
}  
```

##### Application Events and Listeners

Spring Boot 使用事件来处理各种任务。 它允许我们创建用于添加侦听器的工厂文件。 我们可以使用 ApplicationListener  来引用它。

 在 META-INF 文件夹中创建工厂文件，例如 META-INF/spring.factories。

 ##### Admin Support

 Spring Boot 提供了为应用程序启用与管理相关的功能的工具。 它用于远程访问和管理应用程序。 我们可以使用 spring.application.admin.enabled 属性在 Spring Boot 应用程序中启用它。

 ##### Externalized Configuration

 Spring Boot 允许我们将配置外部化，以便我们可以在不同的环境中使用相同的应用程序。 该应用程序使用 YAML 文件来外部化配置。

 ##### Properties Files

 Spring Boot 提供了一组丰富的应用程序属性。 因此，我们可以在项目的属性文件中使用它。 属性文件用于设置 server-port =8082 等属性。 它有助于组织应用程序属性。

 ##### YAML Support

 它提供了一种指定分层配置的便捷方式。 它是 JSON 的超集。 SpringApplication 类自动支持 YAML。 它是属性文件的替代品。

 ##### Type-safe Configuration

提供强类型安全配置来管理和验证应用程序的配置。 应用程序配置始终是一项至关重要的任务，应该是类型安全的。 我们也可以使用这个库提供的注解。 

##### Logging

Spring Boot 使用 Common logging 作为默认的内部日志组件。如果没有特殊需求，你不需要修改它

##### Security

Spring Boot 应用程序是基于 Spring 的 Web 应用程序。 因此，默认情况下，所有 HTTP 端点上的基本身份验证都是安全的。 一组丰富的端点可用于开发安全的 Spring Boot 应用程序。

#### 必备知识

在学习 Spring Boot 之前，你必须具备 Spring Framework 的基础知识。 

#### 使用群体

我们的 Spring Boot 教程旨在帮助初学者和专业人士。

#### 问题

如果有任何错误，请在联系表中发布问题。




