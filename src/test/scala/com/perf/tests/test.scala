package com.perf.tests
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class RestApi extends Simulation {

  var httpProtocol = http.baseUrl("https://reqres.in/api")

  var createUser = scenario("Create User").exec(
    http("post req").post("/users").header("content-type","application/json").asJson.body(RawFileBody("data/users.json")).asJson
      .check(jsonPath("$.name").is("morpheus"), status is 201)
  )

  var updateUser = scenario("update User").exec(
    http("put req").put("/users/2").body(RawFileBody("data/users.json")).asJson.check(
      status is 200 , jsonPath("$.job") is "zion resident"
    )
  )

  setUp(createUser.inject(rampUsers(10).during(5)), updateUser.inject(rampUsers(3).during(5))).protocols(httpProtocol)

}