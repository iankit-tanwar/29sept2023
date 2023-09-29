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
              <i className="bi bi-menu-button-wide" /><span>Purchase</span><i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="/admin/purchaseStart">
                  <i className="bi bi-circle" /><span>Start</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/purchaseInProgress">
                  <i className="bi bi-circle" /><span>Inprogress</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/purchaseCompleted">
                  <i className="bi bi-circle" /><span>Completed</span>
                </Link>
              </li>
             
            </ul>
          </li>{/* End Components Nav */}
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text" /><span>Settings</span><i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="/admin/creditcards">
                  <i className="bi bi-circle" /><span>Credits Cards</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/address">
                  <i className="bi bi-circle" /><span>Address</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/pincode">
                  <i className="bi bi-circle" /><span>Pin Code</span>
                </Link>
              </li>
              
            </ul>
          </li>{/* End Forms Nav */}
         
        </ul>
      </aside>
   </>
  )
}
