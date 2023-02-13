package com.perf.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class auth extends Simulation {
  private var token: String = ""

  val httpProtocol = http.baseUrl("http://vesa-aws.lis.com.np")

  val authAPI = exec(
    exec(http("loginapi")
      .post("/user/login")
      .body(RawFileBody("data/users.json")).asJson
      .check(bodyString.saveAs("Auth_Response"))
      .check(status.is(200))
      .check(jsonPath("$.token").find.saveAs("token"))
  ))

  exec {session => {
    token = session("token").as[String]
    session
  }}

  var header = Map("Content-Type"->"""application/json""","Authorization"->"Bearer ${token}")

  def getAllResources() = {
    exec{session=>println("token")
      session
    }
    exec{session=>println(token:String)
    session}

    exec(session=>session.set("token",token))

    exec(http("getAllResources")
      .get("/projectresource/all")
      .headers(header)
      .check(status.in(200 to 210)))
      .pause(1,20)
  }

  val scn = scenario("Login and Get Resources")
    .exec(
      authAPI
    )
    .pause(1)
    .exec(
      getAllResources()
    )
    .pause(1)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)

}

