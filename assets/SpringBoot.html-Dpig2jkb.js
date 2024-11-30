import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,f as i,o as n}from"./app-Dy6fhNPM.js";const r={};function a(l,o){return n(),t("div",null,o[0]||(o[0]=[i('<h1 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot"><span>SpringBoot</span></a></h1><p>Spring Boot 是一个用于简化 Spring 应用程序开发的框架，它提供了一种开箱即用的方式来创建和部署 Spring 应用程序。以下是 Spring Boot 的一些核心知识点：</p><h2 id="_1-什么是springboot" tabindex="-1"><a class="header-anchor" href="#_1-什么是springboot"><span>1. 什么是SpringBoot？</span></a></h2><p>Spring Boot 是一个基于 Spring 框架的扩展，用于简化 Spring 应用程序的开发和部署。它通过自动配置、起步依赖和内嵌服务器等功能，减少了开发者的配置工作量，并使得应用程序能够以独立的 JAR 文件形式运行。</p><h2 id="_2-核心特性" tabindex="-1"><a class="header-anchor" href="#_2-核心特性"><span>2. 核心特性</span></a></h2><h3 id="_2-1-自动配置" tabindex="-1"><a class="header-anchor" href="#_2-1-自动配置"><span>2.1 自动配置</span></a></h3><ul><li><strong>自动化配置</strong>：Spring Boot 根据项目的依赖和配置自动完成 Spring 配置，减少了需要手动编写的配置代码。它通过 <code>@SpringBootApplication</code> 注解及其内部的 <code>@EnableAutoConfiguration</code> 注解实现自动配置。</li></ul><h3 id="_2-2-起步依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-起步依赖"><span>2.2 起步依赖</span></a></h3><ul><li><strong>Starter POMs</strong>：提供了一些预定义的依赖组合，以便快速启动项目。例如： <ul><li><code>spring-boot-starter-web</code>：用于构建 Web 应用程序。</li><li><code>spring-boot-starter-data-jpa</code>：用于与 JPA 数据库进行集成。</li><li><code>spring-boot-starter-test</code>：用于测试支持。</li></ul></li></ul><h3 id="_2-3-内嵌服务器" tabindex="-1"><a class="header-anchor" href="#_2-3-内嵌服务器"><span>2.3 内嵌服务器</span></a></h3><ul><li><strong>内嵌服务器支持</strong>：Spring Boot 支持内嵌 Tomcat、Jetty 和 Undertow 服务器。这使得应用程序可以打包为一个可执行的 JAR 文件，并在没有外部服务器的情况下运行。</li></ul><h3 id="_2-4-actuator" tabindex="-1"><a class="header-anchor" href="#_2-4-actuator"><span>2.4 Actuator</span></a></h3><ul><li><strong>应用监控</strong>：提供了用于监控和管理 Spring Boot 应用程序的端点。这些端点包括： <ul><li><code>/actuator/health</code>：用于检查应用程序的健康状态。</li><li><code>/actuator/info</code>：提供应用程序的元数据和配置信息。</li><li><code>/actuator/env</code>：显示应用程序的环境属性。</li></ul></li></ul><h3 id="_2-5-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-5-配置文件"><span>2.5 配置文件</span></a></h3><ul><li><strong>application.properties / application.yml</strong>：Spring Boot 使用 <code>application.properties</code> 或 <code>application.yml</code> 文件来管理应用程序的配置。这些文件支持不同的配置环境，如开发、测试和生产环境。</li></ul><h3 id="_2-6-运行和部署" tabindex="-1"><a class="header-anchor" href="#_2-6-运行和部署"><span>2.6 运行和部署</span></a></h3><ul><li><strong>运行</strong>：通过执行 <code>java -jar &lt;your-application&gt;.jar</code> 命令可以运行 Spring Boot 应用程序。</li><li><strong>部署</strong>：Spring Boot 应用程序可以作为独立的 JAR 文件或 WAR 文件进行部署，简化了部署流程。</li></ul><h2 id="_3-spring-boot-注解" tabindex="-1"><a class="header-anchor" href="#_3-spring-boot-注解"><span>3. Spring Boot 注解</span></a></h2><h3 id="_3-1-springbootapplication" tabindex="-1"><a class="header-anchor" href="#_3-1-springbootapplication"><span>3.1 @SpringBootApplication</span></a></h3><ul><li><strong>作用</strong>：这是 Spring Boot 应用程序的核心注解，包含了 <code>@Configuration</code>、<code>@EnableAutoConfiguration</code> 和 <code>@ComponentScan</code> 注解，标识一个 Spring Boot 应用程序的入口点。</li></ul><h3 id="_3-2-restcontroller-和-requestmapping" tabindex="-1"><a class="header-anchor" href="#_3-2-restcontroller-和-requestmapping"><span>3.2 @RestController 和 @RequestMapping</span></a></h3><ul><li><strong>@RestController</strong>：用于创建 RESTful Web 服务的控制器，结合 <code>@ResponseBody</code> 注解自动将返回的对象转换为 JSON。</li><li><strong>@RequestMapping</strong>：用于定义请求的映射路径和方法（GET、POST 等）。</li></ul><h3 id="_3-3-component-service-repository" tabindex="-1"><a class="header-anchor" href="#_3-3-component-service-repository"><span>3.3 @Component, @Service, @Repository</span></a></h3><ul><li><strong>@Component</strong>：用于标识一个普通的 Spring 组件，作为 Spring 容器中的一个 Bean。</li><li><strong>@Service</strong>：用于标识业务逻辑组件，自动被 Spring 扫描和注册。</li><li><strong>@Repository</strong>：用于标识数据访问组件，自动被 Spring 扫描和注册，并且会对数据库访问异常进行数据访问异常转换。</li></ul><h2 id="_4-配置和属性" tabindex="-1"><a class="header-anchor" href="#_4-配置和属性"><span>4. 配置和属性</span></a></h2><h3 id="_4-1-配置文件位置" tabindex="-1"><a class="header-anchor" href="#_4-1-配置文件位置"><span>4.1 配置文件位置</span></a></h3><ul><li><strong>默认位置</strong>：<code>src/main/resources/application.properties</code> 或 <code>src/main/resources/application.yml</code>。</li><li><strong>环境特定配置</strong>：可以在 <code>application-{profile}.properties</code> 或 <code>application-{profile}.yml</code> 中定义不同环境的配置，例如 <code>application-dev.properties</code> 和 <code>application-prod.properties</code>。</li></ul><h3 id="_4-2-配置属性" tabindex="-1"><a class="header-anchor" href="#_4-2-配置属性"><span>4.2 配置属性</span></a></h3><ul><li><strong>自定义配置</strong>：可以通过 <code>@Value</code> 注解或 <code>@ConfigurationProperties</code> 注解注入配置属性。</li><li><strong>示例</strong>： <ul><li><code>@Value(&quot;${server.port}&quot;)</code>：注入属性值。</li><li><code>@ConfigurationProperties(prefix = &quot;myapp&quot;)</code>：将属性绑定到 Java 对象上。</li></ul></li></ul><h2 id="_5-spring-boot-的启动类" tabindex="-1"><a class="header-anchor" href="#_5-spring-boot-的启动类"><span>5. Spring Boot 的启动类</span></a></h2><ul><li><strong>主启动类</strong>：通常包含 <code>main</code> 方法，用于启动 Spring Boot 应用程序。主启动类通常使用 <code>@SpringBootApplication</code> 注解标识，并调用 <code>SpringApplication.run()</code> 方法启动应用程序。</li></ul><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结"><span>6. 总结</span></a></h2><p>Spring Boot 通过自动配置、起步依赖、内嵌服务器和 Actuator 等功能简化了 Spring 应用程序的开发和部署过程。它提供了一种开箱即用的方式来构建和管理 Spring 应用程序，使得开发者能够更专注于业务逻辑的实现。</p>',33)]))}const c=e(r,[["render",a],["__file","SpringBoot.html.vue"]]),g=JSON.parse('{"path":"/notes/backend/SpringBoot.html","title":"SpringBoot","lang":"zh-CN","frontmatter":{"title":"SpringBoot","icon":"pen-to-square","order":2,"date":"2024-08-29T00:00:00.000Z","category":["后端"],"tag":["框架"],"description":"SpringBoot Spring Boot 是一个用于简化 Spring 应用程序开发的框架，它提供了一种开箱即用的方式来创建和部署 Spring 应用程序。以下是 Spring Boot 的一些核心知识点： 1. 什么是SpringBoot？ Spring Boot 是一个基于 Spring 框架的扩展，用于简化 Spring 应用程序的开发和部署...","head":[["meta",{"property":"og:url","content":"https://misyakuji.github.io/blog/notes/backend/SpringBoot.html"}],["meta",{"property":"og:site_name","content":"夕的博客"}],["meta",{"property":"og:title","content":"SpringBoot"}],["meta",{"property":"og:description","content":"SpringBoot Spring Boot 是一个用于简化 Spring 应用程序开发的框架，它提供了一种开箱即用的方式来创建和部署 Spring 应用程序。以下是 Spring Boot 的一些核心知识点： 1. 什么是SpringBoot？ Spring Boot 是一个基于 Spring 框架的扩展，用于简化 Spring 应用程序的开发和部署..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T18:51:22.000Z"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:published_time","content":"2024-08-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-30T18:51:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-30T18:51:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Misyakuji\\",\\"url\\":\\"https://blog.misyakuji.top\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是SpringBoot？","slug":"_1-什么是springboot","link":"#_1-什么是springboot","children":[]},{"level":2,"title":"2. 核心特性","slug":"_2-核心特性","link":"#_2-核心特性","children":[{"level":3,"title":"2.1 自动配置","slug":"_2-1-自动配置","link":"#_2-1-自动配置","children":[]},{"level":3,"title":"2.2 起步依赖","slug":"_2-2-起步依赖","link":"#_2-2-起步依赖","children":[]},{"level":3,"title":"2.3 内嵌服务器","slug":"_2-3-内嵌服务器","link":"#_2-3-内嵌服务器","children":[]},{"level":3,"title":"2.4 Actuator","slug":"_2-4-actuator","link":"#_2-4-actuator","children":[]},{"level":3,"title":"2.5 配置文件","slug":"_2-5-配置文件","link":"#_2-5-配置文件","children":[]},{"level":3,"title":"2.6 运行和部署","slug":"_2-6-运行和部署","link":"#_2-6-运行和部署","children":[]}]},{"level":2,"title":"3. Spring Boot 注解","slug":"_3-spring-boot-注解","link":"#_3-spring-boot-注解","children":[{"level":3,"title":"3.1 @SpringBootApplication","slug":"_3-1-springbootapplication","link":"#_3-1-springbootapplication","children":[]},{"level":3,"title":"3.2 @RestController 和 @RequestMapping","slug":"_3-2-restcontroller-和-requestmapping","link":"#_3-2-restcontroller-和-requestmapping","children":[]},{"level":3,"title":"3.3 @Component, @Service, @Repository","slug":"_3-3-component-service-repository","link":"#_3-3-component-service-repository","children":[]}]},{"level":2,"title":"4. 配置和属性","slug":"_4-配置和属性","link":"#_4-配置和属性","children":[{"level":3,"title":"4.1 配置文件位置","slug":"_4-1-配置文件位置","link":"#_4-1-配置文件位置","children":[]},{"level":3,"title":"4.2 配置属性","slug":"_4-2-配置属性","link":"#_4-2-配置属性","children":[]}]},{"level":2,"title":"5. Spring Boot 的启动类","slug":"_5-spring-boot-的启动类","link":"#_5-spring-boot-的启动类","children":[]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]}],"git":{"createdTime":1732992682000,"updatedTime":1732992682000,"contributors":[{"name":"Misyakuji","email":"2810013347@qq.com","commits":1}]},"readingTime":{"minutes":3.22,"words":967},"filePathRelative":"notes/backend/SpringBoot.md","localizedDate":"2024年8月29日","excerpt":"\\n<p>Spring Boot 是一个用于简化 Spring 应用程序开发的框架，它提供了一种开箱即用的方式来创建和部署 Spring 应用程序。以下是 Spring Boot 的一些核心知识点：</p>\\n<h2>1. 什么是SpringBoot？</h2>\\n<p>Spring Boot 是一个基于 Spring 框架的扩展，用于简化 Spring 应用程序的开发和部署。它通过自动配置、起步依赖和内嵌服务器等功能，减少了开发者的配置工作量，并使得应用程序能够以独立的 JAR 文件形式运行。</p>\\n<h2>2. 核心特性</h2>\\n<h3>2.1 自动配置</h3>\\n<ul>\\n<li><strong>自动化配置</strong>：Spring Boot 根据项目的依赖和配置自动完成 Spring 配置，减少了需要手动编写的配置代码。它通过 <code>@SpringBootApplication</code> 注解及其内部的 <code>@EnableAutoConfiguration</code> 注解实现自动配置。</li>\\n</ul>","autoDesc":true}');export{c as comp,g as data};
