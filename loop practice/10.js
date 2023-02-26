// Write a JS code for Linear search algorithm

let arr = [ 2, 3, 4, 10, 40 ];
let x = 11;
let len = arr.length;



function search(arr, len, x)
{
	
	for (let i = 0; i < len; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

	// Function call
	let result = search(arr, len, x);	
		console.log(result);




