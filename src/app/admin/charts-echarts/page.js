import React from 'react'

export default function page() {
  return (
    <>
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>ECharts</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li className="breadcrumb-item">Charts</li>
                          <li className="breadcrumb-item active">ECharts</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <p>ECharts Examples. You can check the <a href="https://echarts.apache.org/examples/en/index.html" target="_blank">official website</a> for more examples.</p>
              <section className="section">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Line Chart</h5>
                                  {/* Line Chart */}
                                  <div id="lineChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Line Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Area Chart</h5>
                                  {/* Area Chart */}
                                  <div id="areaChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Area Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Bar Chart</h5>
                                  {/* Bar Chart */}
                                  <div id="barChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Bar Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Vertical Bar Chart</h5>
                                  {/* Vertical Bar Chart */}
                                  <div id="verticalBarChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Vertical Bar Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Pie Chart</h5>
                                  {/* Pie Chart */}
                                  <div id="pieChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Pie Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Donut Chart</h5>
                                  {/* Donut Chart */}
                                  <div id="donutChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Donut Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Radar Chart</h5>
                                  {/* Radar Chart */}
                                  <div id="radarChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Radar Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Polar Area Chart</h5>
                                  {/* Polar Area Chart */}
                                  <div id="polarAreaChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Polar Area Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Candle Stick Chart</h5>
                                  {/* Candle Stick Chart */}
                                  <div id="candleStickChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Candle Stick Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Bubble Chart</h5>
                                  {/* Bubble Chart */}
                                  <div id="bubbleChart" style={{ minHeight: 400 }} className="echart" />
                                  {/* End Bubble Chart */}
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>

    
    </>
  )
}
