package com.perf.tests
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class RestApi extends Simulation {

  var httpProtocol = http.baseUrl("https://reqres.in/api")

  var vesaProtocol = http.baseUrl("http://localhost:8000")

  var createUser = scenario("Create User").exec(
    http("post req").post("/users").header("content-type","application/json").asJson.body(RawFileBody("data/users.json")).asJson
      .check(jsonPath("$.name").is("morpheus"), status is 201)
  )

  var updateUser = scenario("update User").exec(
    http("put req").put("/users/2").body(RawFileBody("data/users.json")).asJson.check(
      status is 200 , jsonPath("$.job") is "zion resident"
    )
  )

  var vesaLogin = scenario("login vesa").exec(http("login").post("/user/login").body(RawFileBody("data/users.json")).asJson)

  var listModel = scenario("list model").exec(
    http("list").get("/model/list")
  )

  var listAllResources = scenario("List All Resource").exec(http("GetAllResources").get("/projectresource/all"))

  //setUp(createUser.inject(rampUsers(10).during(5)), updateUser.inject(rampUsers(3).during(5))).protocols(httpProtocol)
//  setUp(vesaLogin.inject(atOnceUsers(10))).protocols(vesaProtocol)
  setUp(vesaLogin.inject(rampUsers(1000).during(5)),listModel.inject(atOnceUsers(1000)),listAllResources.inject((atOnceUsers(1000)))).protocols(vesaProtocol)
}