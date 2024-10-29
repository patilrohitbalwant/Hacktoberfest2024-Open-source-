<script>

	// JavaScript program to create a sorted array
	// using Binary Search
	
	// Function to create a new sorted array
	// using Binary Search
	function createSorted(a, n) {
		// Auxiliary Array
		var b = [];

		for (var j = 0; j < n; j++) {
		// if b is empty any element can be at
		// first place
		if (b.length == 0) b.push(a[j]);
		else {
			// Perform Binary Search to find the correct
			// position of current element in the
			// new array
			var start = 0,
			end = b.length - 1;

			// let the element should be at first index
			var pos = 0;

			while (start <= end) {
			var mid = start + parseInt((end - start) / 2);

			// if a[j] is already present in the new array
			if (b[mid] === a[j]) {
				// add a[j] at mid+1. you can add it at mid
				b.insert(Math.max(0, mid + 1), a[j]);

				break;
			}

			// if a[j] is lesser than b[mid] go right side
			else if (b[mid] > a[j])
				// means pos should be between start and mid-1
				pos = end = mid - 1;
			// else pos should be between mid+1 and end
			else pos = start = mid + 1;

			// if a[j] is the largest push it at last
			if (start > end) {
				pos = start;
				b.insert(Math.max(0, pos), a[j]);

				// here Max(0, pos) is used because sometimes
				// pos can be negative as smallest duplicates
				// can be present in the array
				break;
			}
			}
		}
		}

		// Print the new generated sorted array
		for (var i = 0; i < n; i++) document.write(b[i] + " ");
	}

	Array.prototype.insert = function (index, item) {
		this.splice(index, 0, item);
	};
	// Driver Code
	var a = [2, 5, 4, 9, 8];
	var n = a.length;

	createSorted(a, n);
	
</script>
