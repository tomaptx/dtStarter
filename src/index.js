//Here we're importing items we'll need. You can add other imports here.

let table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  // TODO: Load the DataTables libraries by linking to the DataTables CDN.
  const data = JSON.parse(json);
  console.log(data);
  //TODO: Get data from FileMaker
  //TODO: prep it for the JS.

  //TODO: create the columns.

  //TODO: Explore options of Datatables
  //https://datatables.net/reference/option/
  //https://datatables.net/examples/index
  // Create the DataTable, after destroying it if already exists

  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    responsive: true,
    fixedHeader: true,
    columns: [
      {title: "Company Name", data: "fieldData.CompanyName"},
      {title: "City", data: "fieldData.City", width: "60px"},
      {title: "State", data: "fieldData.State"},
      {title: "Postcode", data: "fieldData.Zip"}],
    data: data,
  });
};

