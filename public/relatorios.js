// relatorios.js
$(document).ready(function() {
    
    function loadReportByGender() {
        $.ajax({
            url: "http://localhost:3000/reportByGender",
            method: "GET",
            success: function(data) {
                $('#leadsReportTable tbody').empty();
                data.forEach(row => {
                    $('#leadsReportTable tbody').append(`
                        <tr>
                            <td>${row.genero}</td>
                            <td>${row.count}</td>
                        </tr>
                    `);
                });
            },
            error: function(err) {
                alert("Erro ao carregar relatório por gênero!");
                console.error("Erro: ", err);
            }
        });
    }

    function loadReportByStatus() {
        $.ajax({
            url: "http://localhost:3000/reportByStatus",
            method: "GET",
            success: function(data) {
                $('#leadsReportTable tbody').empty();
                data.forEach(row => {
                    $('#leadsReportTable tbody').append(`
                        <tr>
                            <td>${row.situacao}</td>
                            <td>${row.count}</td>
                        </tr>
                    `);
                });
            },
            error: function(err) {
                alert("Erro ao carregar relatório por situação!");
                console.error("Erro: ", err);
            }
        });
    }
	
	    function loadReportByGender() {
        $.ajax({
            url: "http://localhost:3000/reportByGender",
            method: "GET",
            success: function(data) {
                $('#leadsReportTable tbody').empty();
                let total = 0;
                data.forEach(row => {
                    total += parseInt(row.count);
                    $('#leadsReportTable tbody').append(`
                        <tr>
                            <td>${row.genero}</td>
                            <td>${row.count}</td>
                        </tr>
                    `);
                });
                // Set the total to the table footer
                document.getElementById('totalValue').textContent = total;
            },
            error: function(err) {
                alert("Erro ao carregar relatório por gênero!");
                console.error("Erro: ", err);
            }
        });
    }

    function loadReportByStatus() {
        $.ajax({
            url: "http://localhost:3000/reportByStatus",
            method: "GET",
            success: function(data) {
                $('#leadsReportTable tbody').empty();
                let total = 0;
                data.forEach(row => {
                    total += parseInt(row.count);
                    $('#leadsReportTable tbody').append(`
                        <tr>
                            <td>${row.situacao}</td>
                            <td>${row.count}</td>
                        </tr>
                    `);
                });
                // Set the total to the table footer
                document.getElementById('totalValue').textContent = total;
            },
            error: function(err) {
                alert("Erro ao carregar relatório por situação!");
                console.error("Erro: ", err);
            }
        });
    }

document.getElementById('goToAdmin').addEventListener('click', function() {
    window.location.href = "/admin";
});

    // Event listeners
    document.getElementById('reportByGender').addEventListener('click', loadReportByGender);
    document.getElementById('reportByStatus').addEventListener('click', loadReportByStatus);
});
