var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "maxResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "meanResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles2": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles3": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles4": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"group_homepage-ba398": {
          type: "GROUP",
name: "homepage",
path: "homepage",
pathFormatted: "group_homepage-ba398",
stats: {
    "name": "homepage",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "maxResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "meanResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles2": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles3": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles4": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"req_add-items-to-ca-2efef": {
        type: "REQUEST",
        name: "Add items to cart",
path: "homepage / Add items to cart",
pathFormatted: "req_homepage---add--319a4",
stats: {
    "name": "Add items to cart",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "maxResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "meanResponseTime": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles2": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles3": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "percentiles4": {
        "total": "254",
        "ok": "-",
        "ko": "254"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
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
