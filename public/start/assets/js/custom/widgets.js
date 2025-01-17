"use strict";
var KTWidgets = function() {
    var t = function(t, e, a, o, s) {
        var i = document.querySelector(e),
            r = parseInt(KTUtil.css(i, "height"));
        if (i) {
            var l = {
                    series: [{
                        name: "Net Profit",
                        data: a
                    }, {
                        name: "Revenue",
                        data: o
                    }],
                    chart: {
                        fontFamily: "inherit",
                        type: "bar",
                        height: r,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            horizontal: !1,
                            columnWidth: ["40%"],
                            endingShape: "rounded"
                        }
                    },
                    legend: {
                        show: !1
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        show: !0,
                        width: 2,
                        colors: ["transparent"]
                    },
                    xaxis: {
                        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        },
                        labels: {
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-700"),
                                fontSize: "12px"
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-700"),
                                fontSize: "12px"
                            }
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    states: {
                        normal: {
                            filter: {
                                type: "none",
                                value: 0
                            }
                        },
                        hover: {
                            filter: {
                                type: "none",
                                value: 0
                            }
                        },
                        active: {
                            allowMultipleDataPointsSelection: !1,
                            filter: {
                                type: "none",
                                value: 0
                            }
                        }
                    },
                    tooltip: {
                        style: {
                            fontSize: "12px"
                        },
                        y: {
                            formatter: function(t) {
                                return "$" + t + " thousands"
                            }
                        }
                    },
                    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-light-primary")],
                    grid: {
                        borderColor: KTUtil.getCssVariableValue("--bs-gray-200"),
                        strokeDashArray: 4,
                        yaxis: {
                            lines: {
                                show: !0
                            }
                        }
                    }
                },
                n = new ApexCharts(i, l),
                d = !1,
                c = document.querySelector(t);
            !0 === s && (n.render(), d = !0), c.addEventListener("shown.bs.tab", (function(t) {
                0 == d && (n.render(), d = !0)
            }))
        }
    };
    return {
        init: function() {
            ! function() {
                var t = document.querySelector("#kt_stats_widget_1_chart");
                if (t) {
                    var e = KTUtil.getCssVariableValue("--bs-gray-200"),
                        a = KTUtil.getCssVariableValue("--bs-gray-800"),
                        o = {
                            type: "doughnut",
                            data: {
                                datasets: [{
                                    data: [30, 40, 25],
                                    backgroundColor: [KTUtil.getCssVariableValue("--bs-success"), KTUtil.getCssVariableValue("--bs-warning"), KTUtil.getCssVariableValue("--bs-primary")]
                                }],
                                labels: ["მათემატიკა", "ისტორია", "ინგლისური"]
                            },
                            options: {
                                chart: {
                                    fontFamily: "inherit"
                                },
                                cutout: "75%",
                                cutoutPercentage: 75,
                                responsive: !0,
                                maintainAspectRatio: !1,
                                title: {
                                    display: !1,
                                    text: "Technology"
                                },
                                animation: {
                                    animateScale: !0,
                                    animateRotate: !0
                                },
                                tooltips: {
                                    enabled: !0,
                                    intersect: !1,
                                    mode: "nearest",
                                    bodySpacing: 5,
                                    yPadding: 10,
                                    xPadding: 10,
                                    caretPadding: 0,
                                    displayColors: !1,
                                    backgroundColor: e,
                                    bodyFontColor: a,
                                    cornerRadius: 4,
                                    footerSpacing: 0,
                                    titleSpacing: 0
                                },
                                plugins: {
                                    legend: {
                                        display: !1
                                    }
                                }
                            }
                        },
                        s = t.getContext("2d");
                    new Chart(s, o)
                }
            }(), t("#kt_stats_widget_2_tab_1", "#kt_stats_widget_2_chart_1", [44, 55, 57, 56, 61, 58], [76, 85, 101, 98, 87, 105], !0), t("#kt_stats_widget_2_tab_2", "#kt_stats_widget_2_chart_2", [35, 60, 35, 50, 45, 30], [65, 80, 50, 80, 75, 105], !1), t("#kt_stats_widget_2_tab_3", "#kt_stats_widget_2_chart_3", [25, 40, 45, 50, 40, 60], [76, 85, 101, 98, 87, 105], !1), t("#kt_stats_widget_2_tab_4", "#kt_stats_widget_2_chart_4", [50, 35, 45, 55, 30, 40], [76, 85, 101, 98, 87, 105], !1),
                function() {
                    var t = document.querySelector("#kt_mixed_widget_1_chart"),
                        e = parseInt(KTUtil.css(t, "height"));
                    if (t) {
                        var a = {
                            series: [{
                                name: "Net Profit",
                                data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47]
                            }],
                            chart: {
                                fontFamily: "inherit",
                                type: "area",
                                height: e,
                                toolbar: {
                                    show: !1
                                },
                                zoom: {
                                    enabled: !1
                                },
                                sparkline: {
                                    enabled: !0
                                }
                            },
                            plotOptions: {},
                            legend: {
                                show: !1
                            },
                            dataLabels: {
                                enabled: !1
                            },
                            fill: {
                                type: "solid",
                                opacity: 1
                            },
                            stroke: {
                                curve: "smooth",
                                show: !0,
                                width: 3,
                                colors: ["#20D489", ""]
                            },
                            xaxis: {
                                categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
                                axisBorder: {
                                    show: !1
                                },
                                axisTicks: {
                                    show: !1
                                },
                                labels: {
                                    show: !1,
                                    style: {
                                        colors: "#A1A5B7",
                                        fontSize: "12px"
                                    }
                                },
                                crosshairs: {
                                    show: !1,
                                    position: "front",
                                    stroke: {
                                        color: KTUtil.getCssVariableValue("--bs-primary"),
                                        width: 1,
                                        dashArray: 3
                                    }
                                },
                                tooltip: {
                                    enabled: !0,
                                    formatter: void 0,
                                    offsetY: 0,
                                    style: {
                                        fontSize: "12px"
                                    }
                                }
                            },
                            yaxis: {
                                min: 0,
                                max: 60,
                                labels: {
                                    show: !1,
                                    style: {
                                        colors: "#A1A5B7",
                                        fontSize: "12px"
                                    }
                                }
                            },
                            states: {
                                normal: {
                                    filter: {
                                        type: "none",
                                        value: 0
                                    }
                                },
                                hover: {
                                    filter: {
                                        type: "none",
                                        value: 0
                                    }
                                },
                                active: {
                                    allowMultipleDataPointsSelection: !1,
                                    filter: {
                                        type: "none",
                                        value: 0
                                    }
                                }
                            },
                            tooltip: {
                                style: {
                                    fontSize: "12px"
                                },
                                y: {
                                    formatter: function(t) {
                                        return "$" + t + " thousands"
                                    }
                                }
                            },
                            fill: {
                                type: "gradient",
                                gradient: {
                                    shadeIntensity: 1,
                                    opacityFrom: .7,
                                    opacityTo: .6,
                                    stops: [0, 100]
                                }
                            },
                            colors: [KTUtil.getCssVariableValue("--bs-primary")],
                            markers: {
                                colors: [KTUtil.getCssVariableValue("--bs-light-primary")],
                                strokeColor: [KTUtil.getCssVariableValue("--bs-primary")],
                                strokeWidth: 3
                            }
                        };
                        new ApexCharts(t, a).render()
                    }
                }(),
                function() {
                    var t = document.querySelector("#kt_mixed_widget_2_chart"),
                        e = parseInt(KTUtil.css(t, "height"));
                    if (t) {
                        var a = {
                            series: [{
                                name: "Net Profit",
                                data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47]
                            }],
                            chart: {
                                fontFamily: "inherit",
                                type: "area",
                                height: e,
                                toolbar: {
                                    show: !1
                                },
                                zoom: {
                                    enabled: !1
                                },
                                sparkline: {
                                    enabled: !0
                                }
                            },
                            plotOptions: {},
                            legend: {
                                show: !1
                            },
                            dataLabels: {
                                enabled: !1
                            },
                            fill: {
                                type: "solid",
                                opacity: 1
                            },
                            stroke: {
                                curve: "smooth",
                                show: !0,
                                width: 3,
                                colors: [KTUtil.getCssVariableValue("--bs-info")]
                            },
                            xaxis: {
                                categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
                                axisBorder: {
                                    show: !1
                                },
                                axisTicks: {
                                    show: !1
                                },
                                labels: {
                                    show: !1,
                                    style: {
                                        colors: "#A1A5B7",
                                        fontSize: "12px"
                                    }
                                },
                                crosshairs: {
                                    show: !1,
                                    position: "front",
                                    stroke: {
                                        color: "#E4E6EF",
                                        width: 1,
                                        dashArray: 3
                                    }
                                },
                                tooltip: {
                                    enabled: !0,
                                    formatter: void 0,
                                    offsetY: 0,
                                    style: {
                                        fontSize: "12px"
                                    }
                                }
                            },
                            yaxis: {
                                labels: {
                                    show: !1,
                                    style: {
                                        colors: "#A1A5B7",
                                        fontSize: "12px"
                                    }
                                }
                            },
                            states: {
                                normal: {
                                    filter: {
                                        type: "none",
                                        value: 0
                                    }
                                },
                                hover: {
                                    filter: {
                                        type: "none",
                                        value: 0
                                    }
                                },
                                active: {
                                    allowMultipleDataPointsSelection: !1,
                                    filter: {
                                        type: "none",
                                        value: 0
                                    }
                                }
                            },
                            tooltip: {
                                style: {
                                    fontSize: "12px"
                                },
                                y: {
                                    formatter: function(t) {
                                        return "$" + t + " thousands"
                                    }
                                }
                            },
                            fill: {
                                type: "gradient",
                                gradient: {
                                    shadeIntensity: 1,
                                    opacityFrom: .7,
                                    opacityTo: .6,
                                    stops: [0, 100]
                                }
                            },
                            colors: [KTUtil.getCssVariableValue("--bs-info")],
                            markers: {
                                colors: [KTUtil.getCssVariableValue("--bs-light-info")],
                                strokeColor: [KTUtil.getCssVariableValue("--bs-info")],
                                strokeWidth: 3
                            }
                        };
                        new ApexCharts(t, a).render()
                    }
                }()
        }
    }
}();
KTUtil.onDOMContentLoaded((function() {
    KTWidgets.init()
}));