import React from 'react'

export default function page() {
  return (
    <>
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Chart.js</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li className="breadcrumb-item">Charts</li>
                          <li className="breadcrumb-item active">Chart.js</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <p>Chart.JS Examples. You can check the <a href="https://www.chartjs.org/docs/latest/samples/" target="_blank">official website</a> for more examples.</p>
              <section className="section">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Line Chart</h5>
                                  {/* Line Chart */}
                                  <canvas id="lineChart" style={{ maxHeight: 400 }} />
                                  {/* End Line CHart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Bar CHart</h5>
                                  {/* Bar Chart */}
                                  <canvas id="barChart" style={{ maxHeight: 400 }} />
                                  {/* End Bar CHart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Pie Chart</h5>
                                  {/* Pie Chart */}
                                  <canvas id="pieChart" style={{ maxHeight: 400 }} />
                                  {/* End Pie CHart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Doughnut Chart</h5>
                                  {/* Doughnut Chart */}
                                  <canvas id="doughnutChart" style={{ maxHeight: 400 }} />
                                  {/* End Doughnut CHart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Radar Chart</h5>
                                  {/* Radar Chart */}
                                  <canvas id="radarChart" style={{ maxHeight: 400 }} />
                                  {/* End Radar CHart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Polar Area Chart</h5>
                                  {/* Polar Area Chart */}
                                  <canvas id="polarAreaChart" style={{ maxHeight: 400 }} />
                                  {/* End Polar Area Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Stacked Bar Chart</h5>
                                  {/* Stacked Bar Chart */}
                                  <canvas id="stakedBarChart" style={{ maxHeight: 400 }} />
                                  {/* End Stacked Bar Chart */}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Bubble Chart</h5>
                                  {/* Bubble Chart */}
                                  <canvas id="bubbleChart" style={{ maxHeight: 400 }} />
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
