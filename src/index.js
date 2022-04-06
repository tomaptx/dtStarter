//Here we're importing items we'll need. You can add other imports here.

let table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  // TODO: Load the DataTables libraries by linking to the DataTables CDN.
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
      {title: "First Name", data: "firstName", width: "10px"},
      {title: "Last Name", data: "lastName"},
      {title: "Age", data: "age"},
      {title: "Position", data: "position"}],
    data: [
      {firstName: "Bob",lastName: "Smith", age: 32, position: "Catcher"}, 
      {firstName: "Jane",lastName: "Long", age: 24, position: "Short Stop"}, 
      {firstName: "Mary",lastName: "Johnson",age: 28, position: "Third Base"}, 
      {firstName: "Simon",lastName: "Wilson",age: 31, position: "Outfiled"}],
  });
};

