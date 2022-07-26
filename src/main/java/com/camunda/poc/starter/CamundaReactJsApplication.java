package com.camunda.poc.starter;

// import de.codecentric.boot.admin.server.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.camunda.poc.starter"})
// @EnableConfigurationProperties(AppConfigProperties.class)
// @EnableAdminServer
public class CamundaReactJsApplication {

  public static void main(String... args) {
    SpringApplication.run(CamundaReactJsApplication.class, args);
  }
}
