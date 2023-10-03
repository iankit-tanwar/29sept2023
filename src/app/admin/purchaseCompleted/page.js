"use client"
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { ProductService } from '@/product/page';


import 'primereact/resources/themes/saga-blue/theme.css'; // Replace with your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function PurchaseComplete() {
    
  const [products, setProducts] = useState([]);
  const dt = useRef(null);

  const cols = [
      { field: 'id', header: 'Id' },
      { field: 'fk_acc', header: 'FK Account' },
      { field: 'pro_link', header: 'Product Link' },
      { field: 'acc_holder', header: 'Acc Holder' },
      { field: 'cc_acc', header: 'Cc Account' },
      { field: 'gift_acc', header: 'Gift Amount' },
      { field: 'tsx_acc', header: 'TSX Amount' },
      { field: 'final_price', header: 'Final Price' },
      { field: 'gift_order', header: 'Gift Card Order' },
      { field: 'pur_order', header: 'Purchase Order' },
      { field: 'remark', header: 'Remark' },
      { field: 'pur_start', header: 'Purchase Started At' },
      { field: 'status', header: 'Status ' },
      { field: 'action', header: 'Action' }
  ];

  const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

  useEffect(() => {
      ProductService.getProductsMini().then((data) => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const exportCSV = (selectionOnly) => {
      dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
      import('jspdf').then((jsPDF) => {
          import('jspdf-autotable').then(() => {
              const doc = new jsPDF.default(0, 0);

              doc.autoTable(exportColumns, products);
              doc.save('products.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(products);
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

            <DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                {cols.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
           
        </section>
    </>
  )
}
