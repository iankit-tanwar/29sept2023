import React from 'react'

export default function page() {
  return (
    <>
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Tooltips</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li className="breadcrumb-item">Components</li>
                          <li className="breadcrumb-item active">Tooltips</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <section className="section">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Tooltips Examples</h5>
                                  <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. </p>
                                  {/* Tooltips Examples */}
                                  <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                      Tooltip on top
                                  </button>
                                  <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
                                      Tooltip on right
                                  </button>
                                  <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                                      Tooltip on bottom
                                  </button>
                                  <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
                                      Tooltip on left
                                  </button>
                                  {/* End Tooltips Examples */}
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>

    
    
    </>
  )
}
