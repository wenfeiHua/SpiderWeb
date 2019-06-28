$(function() {
	$("#searchBtn").on('click', function() {
		alert("hhhhhhhhhhhhhhhh");
		searchBankList();
	});
	getBankList();
});

function getBankList() {
	var urlParam = ApiUrl.API_GetBankList;
	$.getJSON(urlParam, {
		format: "json"
	}).done(function(res) {
		if (res.result == 1) {
			var data = res.baseModelList;
			var htmlStr = "";
			for (var i = 0; i < data.length; i++) {
				htmlStr += '<tr>' + 
                                '<td>' + data[i].bankname + '</td>'+
                                '<td>' + data[i].bankurl + '</td>'+
                                '<td>' + data[i].bankname + '</td>'+
                                '<td>' + data[i].bankname + '</td>'+
                                '<td>' + data[i].bankname + '</td>'+
                                '<td>' + data[i].bankname + '</td>'+
                                '<td>' + data[i].bankname + '</td>'+
                                '<td>' + data[i].bankname + '</td>'+
                                '<td>' + data[i].bankname + '</td>'+
							'</tr>';
			}
			$("#bankInfo").html(htmlStr);
		} else {
			toastr.error(res.errDetail);
			$("#bankInfo").html("");
		}
	});
}