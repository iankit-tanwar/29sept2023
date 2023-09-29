
import Link from 'next/link';

export default function Home() {
  return (
    <>

        <main>
          <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex justify-content-center py-4">
                      <a href="index.html" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="true" />
                        <span className="d-none d-lg-block">FKAUTO</span>
                      </a>
                    </div>{/* End Logo */}
                    <div className="card mb-3">
                      <div className="card-body">
                        
                        <form className="row g-3 needs-validation mt-2" noValidate>
                          <div className="col-12">
                            <label htmlFor="yourUsername" className="form-label">Username</label>
                            <div className="input-group has-validation">
                              <span className="input-group-text" id="inputGroupPrepend">@</span>
                              <input type="text" name="username" className="form-control" id="yourUsername" required />
                              <div className="invalid-feedback">Please enter your username.</div>
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="yourPassword" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="yourPassword" required />
                            <div className="invalid-feedback">Please enter your password!</div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <Link href="/admin/dashboard" className="btn btn-primary w-100" type="submit">Login</Link>
                          </div>
                          <div className="col-12">
                            <p className="small mb-0">Dont have account? <Link href="register/pages-register">Create an account</Link></p>
                          </div>
                        </form>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>{/* End #main */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
     


    </>
  )
}
