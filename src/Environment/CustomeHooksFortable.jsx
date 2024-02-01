import { useEffect, useState } from "react";
import { url } from "./index";
import { Local } from "./Token";
import $ from "jquery";
import "datatables.net-responsive";
import "datatables.net-dt/js/dataTables.dataTables";

import "datatables.net-dt/css/jquery.dataTables.min.css";
export const CustomeHookTable = (endpoint, setLoading) => {
  const [data, setData] = useState([]);
  const token = Local;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const requestOptions = {
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
    };
    const getData = async () => {
      try {
        const response = await fetch(`${url}${endpoint}`, requestOptions);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        let actualData = await response.json();
        if (actualData.data) {
          setData(actualData.data);
          setTimeout(() => {
            // $(document).ready(function () {
            //   $("#myAllAgents").DataTable();
            // });
            $(document).ready(function () {
              $("#myAllAgents").DataTable({
                //
                // initComplete: function () {
                //   this.api().columns().every(function () {
                //     var column = this;
                //     var title = column.footer().textContent;
                //     var select = $(`<input placeholder =${title}></input>`)
                //       .appendTo($(column.footer()).empty())
                //       .on('keyup', function () {
                //         var val = $.fn.dataTable.util.escapeRegex($(this).val());
                //         column
                //           .search(val ? val : '', true, false)
                //           .draw();
                //       });
                //   });
                // },
                pagingType: "full_numbers",
                pageLength: 5,
                processing: true,
                dom: "Bfrtip",
                buttons: [
                  "copyHtml5",
                  "excelHtml5",
                  "csvHtml5",
                  "pdfHtml5",
                  "print",
                ],
                responsive: true,
                columnDefs: [
                  { responsivePriority: 1, targets: 0 },
                  { responsivePriority: 2, targets: -1 },
                ],
                stateSave: true,
              });
            });
          }, 200);
        }
      } catch (err) {
        console.log(err.message);
        return [];
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return data;
};
