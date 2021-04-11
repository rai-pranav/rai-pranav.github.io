
function update_row(row_string,newRow){
	let i;
	let newCell = newRow.insertCell(-1);

	newCell
	console.log("Update " + row_string)
	for (i=0;i<row_string.length;i++){
		let newCell = newRow.insertCell();
		newCell.innerText=row_string[i]
		// new_row.append()
	}

}


function add_one_row(inp,row_num){
	let num_entries=inp.length;

	// let alphabet_array=inp.split("");


	let new_row=document.getElementById("sator_table").insertRow();

	let row_string;
	if(row_num==0){
		row_string=inp;
	}
	// else{
	// 	row_string=get_row_string(inp,row_num)
	// }
	update_row(row_string,new_row);
	console.log(new_row);


}


function calculate_square(){
	input=document.getElementById('inp').value;
	console.log(input);
	let num_alphabets=input["length"];
	let i;
	for (i=0;i<input.length;i++){
		add_one_row(input,i)
	}

	



}