"use client"

import React from 'react'
import DataTable from 'react-data-table-component';





const columns = [
  {
    name: 'ID',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'FK Account',
    selector: row => row.fk_acc,
    sortable: true,
  },
  {
    name: 'Product Link',
    selector: row => row.pro_link,
    sortable: true,
  },
  
  {
    name: 'Account Holder',
    selector: row => row.acc_holder,
    sortable: true,
  },
  {
    name: 'CC Account',
    selector: row => row.cc_acc,
    sortable: true,
  },
  {
    name: 'Gift Account',
    selector: row => row.git_acc,
    sortable: true,
  },
  {
    name: 'TSX Account',
    selector: row => row.tsx_acc,
    sortable: true,
  },
  {
    name: 'Final Price',
    selector: row => row.final_price,
    sortable: true,
  },
  {
    name: 'Gift Card Order',
    selector: row => row.gift_card_order,
    sortable: true,
  },
  {
    name: 'Purchase Order',
    selector: row => row.pur_order,
    sortable: true,
  },
  {
    name: 'Remark',
    selector: row => row.remark,
    sortable: true,
  },
  {
    name: 'Purchase Started At',
    selector: row => row.pur_start_at,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    cell: (row) => (
      <span className=' bg-success text-white p-2 rounded-2'>
        Pending
      </span>
    ),
    sortable: false,
  },
  {
  name: 'Action',
  button:true,
    cell: (row) => (
      <button className="btn btn-sm btn-danger" onClick={(e) => 
      alert("hello")}>
        Delete
      </button>
    ),
    sortable: false, // Disable sorting for this column
  },
];

const data = [
  {
    id: 1,
    fk_acc: '5555444433332222',
    pro_link: '1988',
    acc_holder: 'Ankit',
    cc_acc: "470001001555",
    git_acc: "5000",
    tsx_acc: "5445",
    final_price: "15000",
    gift_card_order: "4454",
    pur_order: "44244",
    remark: "done",
    pur_start_at: "yy-MM-dd HH:mm:ss,SSS",
   
    
  },

]

export default function page() {
  return (
    <>
      <section className="section dashboard">
        <div className="row">

          <div className="col-lg-12">
            <div className='card'>
              <div className="card-body">

                <DataTable columns={columns} data={data} pagination  />

              </div>

            </div>
          </div>
        </div>

      </section>

    </>
  )
}
