var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13",
        "ok": "13",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "420",
        "ok": "420",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles1": {
        "total": "399",
        "ok": "399",
        "ko": "-"
    },
    "percentiles2": {
        "total": "420",
        "ok": "420",
        "ko": "-"
    },
    "percentiles3": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles4": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.6",
        "ok": "2.6",
        "ko": "-"
    }
},
contents: {
"req_post-req-64b72": {
        type: "REQUEST",
        name: "post req",
path: "post req",
pathFormatted: "req_post-req-64b72",
stats: {
    "name": "post req",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles1": {
        "total": "402",
        "ok": "402",
        "ko": "-"
    },
    "percentiles2": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "percentiles3": {
        "total": "507",
        "ok": "507",
        "ko": "-"
    },
    "percentiles4": {
        "total": "546",
        "ok": "546",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}
    },"req_put-req-9b93c": {
        type: "REQUEST",
        name: "put req",
path: "put req",
pathFormatted: "req_put-req-9b93c",
stats: {
    "name": "put req",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "440",
        "ok": "440",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles1": {
        "total": "398",
        "ok": "398",
        "ko": "-"
    },
    "percentiles2": {
        "total": "477",
        "ok": "477",
        "ko": "-"
    },
    "percentiles3": {
        "total": "540",
        "ok": "540",
        "ko": "-"
    },
    "percentiles4": {
        "total": "553",
        "ok": "553",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.6",
        "ok": "0.6",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
