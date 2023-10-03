"use client"
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { CustomerService } from '@/customer/page';


        


import 'primereact/resources/themes/saga-blue/theme.css'; // Replace with your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function PurchaseComplete() {
    
  
  const dt = useRef(null);

  const exportColumns = [
    { title: 'Id', dataKey: 'id' },
    { title: 'FK Account', dataKey: 'fk_acc' },
    { title: 'Acc Holder', dataKey: 'acc_holder' },
    { title: 'Cc Account', dataKey: 'cc_acc' },
    { title: 'Gift Amount', dataKey: 'gift_acc' },
    { title: 'TSX Amount', dataKey: 'tsx_acc' },
    { title: 'Final Price', dataKey: 'final_price' },
    { title: 'Gift Card Order', dataKey: 'gift_order' },
    { title: 'Purchase Order', dataKey: 'pur_order' },
    { title: 'Remark', dataKey: 'remark' },
    { title: 'Status', dataKey: 'status' },
    { title: 'Action', dataKey: 'action' },
    
    
  ];

  const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);
  const exportCSV = (selectionOnly) => {
      dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
      import('jspdf').then((jsPDF) => {
          import('jspdf-autotable').then(() => {
              const doc = new jsPDF.default(0, 0);

              doc.autoTable(exportColumns, customers);
              doc.save('products.pdf');
          });
      });
  };


  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(customers);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'products');
      });
  };

  const saveAsExcelFile = (buffer, fileName) => {
      import('file-saver').then((module) => {
          if (module && module.default) {
              let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
              let EXCEL_EXTENSION = '.xlsx';
              const data = new Blob([buffer], {
                  type: EXCEL_TYPE
              });

              module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
      });
  };

  const header = (
      <div className="d-flex justify-content-end gap-3">
          <Button className='rounded-5 ' type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
          <Button className='rounded-5 ' type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
          <Button className='rounded-5 me-4' type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
      </div>
  );

  return (
    <>
     <section className="section dashboard">
     <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />

       

            <DataTable ref={dt} header={header} value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '25%' }}></Column>
                <Column field="fk_acc" header="FK Account" style={{ width: '25%' }}></Column>
                <Column field="pro_link" header="Product Link" style={{ width: '25%' }}></Column>
                <Column field="acc_holder" header="Acc Holder" style={{ width: '25%' }}></Column>
                <Column field="cc_acc" header="Cc Account" style={{ width: '25%' }}></Column>
                <Column field="gift_acc" header="Gift Amount" style={{ width: '25%' }}></Column>
                <Column field="tsx_acc" header="TSX Amount" style={{ width: '25%' }}></Column>
                <Column field="final_price" header="Final Price" style={{ width: '25%' }}></Column>
                <Column field="gift_order" header="Gift Card Order" style={{ width: '25%' }}></Column>
                <Column field="pur_order" header="Purchase Order" style={{ width: '25%' }}></Column>
                <Column field="remark" header="Remark" style={{ width: '25%' }}></Column>
                <Column field="pur_start" header="Purchase Started At" style={{ width: '25%' }}></Column>
                <Column field="status" header="Status" style={{ width: '25%' }}></Column>
                <Column field="action" header="Action" style={{ width: '25%' }}></Column>
            </DataTable>
           
        </div>
           
        </section>
    </>
  )
}
