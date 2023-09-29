import Link from 'next/link'
import React from 'react'

export default function Aside() {
  return (
   <>
   <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " href="/admin/dashboard">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide" /><span>Components</span><i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="/admin/components-alerts">
                  <i className="bi bi-circle" /><span>Alerts</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/components-accordion">
                  <i className="bi bi-circle" /><span>Accordion</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/components-badges">
                  <i className="bi bi-circle" /><span>Badges</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/components-breadcrumbs">
                  <i className="bi bi-circle" /><span>Breadcrumbs</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/components-buttons">
                  <i className="bi bi-circle" /><span>Buttons</span>
                </Link>
              </li>
              <li>
                <Link href="components-cards">
                  <i className="bi bi-circle" /><span>Cards</span>
                </Link>
              </li>
              <li>
                <Link href="components-carousel">
                  <i className="bi bi-circle" /><span>Carousel</span>
                </Link>
              </li>
              <li>
                <Link href="components-list-group">
                  <i className="bi bi-circle" /><span>List group</span>
                </Link>
              </li>
              <li>
                <Link href="components-modal">
                  <i className="bi bi-circle" /><span>Modal</span>
                </Link>
              </li>
              <li>
                <Link href="components-tabs">
                  <i className="bi bi-circle" /><span>Tabs</span>
                </Link>
              </li>
              <li>
                <Link href="components-pagination">
                  <i className="bi bi-circle" /><span>Pagination</span>
                </Link>
              </li>
              <li>
                <Link href="components-progress">
                  <i className="bi bi-circle" /><span>Progress</span>
                </Link>
              </li>
              <li>
                <Link href="components-spinners">
                  <i className="bi bi-circle" /><span>Spinners</span>
                </Link>
              </li>
              <li>
                <Link href="components-tooltips">
                  <i className="bi bi-circle" /><span>Tooltips</span>
                </Link>
              </li>
            </ul>
          </li>{/* End Components Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text" /><span>Forms</span><i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="forms-elements">
                  <i className="bi bi-circle" /><span>Form Elements</span>
                </Link>
              </li>
              <li>
                <Link href="forms-layouts">
                  <i className="bi bi-circle" /><span>Form Layouts</span>
                </Link>
              </li>
              <li>
                <Link href="forms-editors">
                  <i className="bi bi-circle" /><span>Form Editors</span>
                </Link>
              </li>
              <li>
                <Link href="forms-validation">
                  <i className="bi bi-circle" /><span>Form Validation</span>
                </Link>
              </li>
            </ul>
          </li>{/* End Forms Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="tables-general">
                  <i className="bi bi-circle" /><span>General Tables</span>
                </Link>
              </li>
              <li>
                <Link href="tables-data">
                  <i className="bi bi-circle" /><span>Data Tables</span>
                </Link>
              </li>
            </ul>
          </li>{/* End Tables Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="charts-chartjs">
                  <i className="bi bi-circle" /><span>Chart.js</span>
                </Link>
              </li>
              <li>
                <Link href="charts-apexcharts">
                  <i className="bi bi-circle" /><span>ApexCharts</span>
                </Link>
              </li>
              <li>
                <Link href="charts-echarts">
                  <i className="bi bi-circle" /><span>ECharts</span>
                </Link>
              </li>
            </ul>
          </li>{/* End Charts Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-gem" /><span>Icons</span><i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="icons-bootstrap">
                  <i className="bi bi-circle" /><span>Bootstrap Icons</span>
                </Link>
              </li>
              <li>
                <Link href="icons-remix">
                  <i className="bi bi-circle" /><span>Remix Icons</span>
                </Link>
              </li>
              <li>
                <Link href="icons-boxicons">
                  <i className="bi bi-circle" /><span>Boxicons</span>
                </Link>
              </li>
            </ul>
          </li>{/* End Icons Nav */}
          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <Link className="nav-link collapsed" href="users-profile">
              <i className="bi bi-person" />
              <span>Profile</span>
            </Link>
          </li>{/* End Profile Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" href="pages-faq">
              <i className="bi bi-question-circle" />
              <span>F.A.Q</span>
            </Link>
          </li>{/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" href="pages-contact">
              <i className="bi bi-envelope" />
              <span>Contact</span>
            </Link>
          </li>{/* End Contact Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" href="/register/pages-register">
              <i className="bi bi-card-list" />
              <span>Register</span>
            </Link>
          </li>{/* End Register Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <i className="bi bi-box-arrow-in-right" />
              <span>Login</span>
            </Link>
          </li>{/* End Login Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" href="/error/pages-error-404">
              <i className="bi bi-dash-circle" />
              <span>Error 404</span>
            </Link>
          </li>{/* End Error 404 Page Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" href="pages-blank">
              <i className="bi bi-file-earmark" />
              <span>Blank</span>
            </Link>
          </li>{/* End Blank Page Nav */}
        </ul>
      </aside>
   </>
  )
}
