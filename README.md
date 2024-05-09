# Altice Labs Technical Exercise

## Description

Implement a REST service, using a JAVA framework, returning a value from the **labseq** sequence.
Optionally implement a simple JavaScript web GUI to invoke the service.

The **labseq – l(n)** - sequence is defined as follows:

- n=0 => l(0) = 0
- n=1 => l(1) = 1
- n=2 => l(2) = 0
- n=3 => l(3) = 1
- n>3 => l(n) = l(n-4) + l(n-3)

Example of the first sequence values:

0<br>
1<br>
0<br>
1<br>
1<br>
1<br>
1<br>
2<br>
2<br>
2<br>
3<br>
[…]

The endpoint created should be in the form `<baseurl>/labseq/{n} where {n}` represents the index of the sequence’s (**single**) value to return. The index may be **any** non-negative integer number.

The implemented service should use a caching mechanism to take advantage of previous calculations to speed up future calculations. This caching mechanism must be used in the algorithm’s intermediate calculations (if applicable), and not only in the endpoint’s invocations.

The answer must include:
- Source code
- REST API documentation – Open API format (Swagger)
- Execution instructions (containers or other)

Java code development best practices will be considered in the evaluation of the proposed resolution. Calculation performance is also a plus - calculation of l(10000) must be correctly returned under 10s.

If there are any doubts regarding specific issues of the exercise that may influence its implementation, the applicant must make assumptions and implement the exercise according to them (these assumptions should be included in the answer).

## Tech Stack

- JDK 17
- Spring Boot 3.2.5
- Angular 15.0.5
- JUnit 5.10.2
- Docker 26.0.0

## Implementation

The Java framework used was Spring Boot.
Due to the high number of digits that the value has as the index grows, I decided that the calculated value would be converted to string type and scientific notation representation.

## Run Locally

To **run the application locally**, execute both the front-end (SPA application) and back-end (Restful API).

### Restful API

In the `backend` folder, run the command `mvn install` to build the application.
This command also prepares the application for the containerization.

In the `backend/target` folder, execute the command `java -jar labseq.0.0.1-SNAPSHOT.jar` to run the API on port `8080`.

### Single Page Application

In the `frontend` folder, execute the command `ng serve --open` to run the application.

## Containerization

### Docker

A `Dockerfile` was created for each application part - back-end and front-end. 

### Restful API

Initially, we have to create an image with the command: `docker build -t name .`
After the image has been created, a container must be created with this image, using the following command: `docker run -it -p 8080:8080 labseq`.

### Single Page Application

Initially, we have to create an image with the command: `docker build -t name .`
After the image has been created, a container must be created with this image, using the following command: `docker run -it -p 4200:4200 labseq`.

### API Documentation

The Swagger was used to document the API, and it is available at [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html).
