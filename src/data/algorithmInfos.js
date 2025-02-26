const algorithmInfos = {
	bubble_sort: {
		name: "Bubble Sort",
		time_complexity: {
			best: ['O(n)', 'yellow-600'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements in an array that are in the wrong order. This process is repeated until the entire array is sorted.
		
			The algorithm starts at the beginning of the array and moves through it, swapping adjacent elements that are out of order. This process is repeated until the end of the array is reached, at which point the algorithm starts again from the beginning. The algorithm continues to iterate through the array and swap adjacent elements until no more swaps are needed.

			Although bubble sort has a time complexity of O(n^2), which makes it less efficient than other sorting algorithms, it can be useful for small arrays or as a simple illustration of how sorting algorithms work.
		`
	},
	insertion_sort: {
		name: "Insertion Sort",
		time_complexity: {
			best: ['O(n)', 'yellow-600'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Insertion sort is a simple sorting algorithm that works by repeatedly inserting elements from an unsorted array into a sorted sub-array at the correct position.

			The algorithm starts by considering the first element of the array as a sorted sub-array. It then picks the next element and compares it to the elements in the sorted sub-array, moving elements to the right until it finds the correct position to insert the new element. This process is repeated for each subsequent element until the entire array is sorted.

			Insertion sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements in the input array. It is also an in-place algorithm, meaning it requires no additional memory space beyond the original array. However, insertion sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the array. Therefore, it is not recommended for large data sets, but it can be efficient for small or nearly sorted arrays.
		`
	},
	selection_sort: {
		name: "Selection Sort",
		time_complexity: {
			best: ['O(n^2)', 'red-800'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800'],
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Selection sort is a sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part of the array and moving it to the beginning of the array. 
		
			The algorithm starts by finding the minimum element from the entire array and swapping it with the first element. It then finds the minimum element from the remaining unsorted part of the array and swaps it with the second element, and so on until the entire array is sorted.

			Although selection sort has a time complexity of O(n^2), it can be useful for small arrays or teaching as it is relatively simple.
		`
	},
	merge_sort: {
		name: "Merge Sort",
		time_complexity: {
			best: ['O(n log(n))', 'orange-700'],
			average: ['O(n log(n))', 'orange-700'],
			worst: ['O(n log(n))', 'orange-700'],
		},
		space_complexity: ["O(n)", "yellow-600"],
		description: `
			Merge sort is a popular sorting algorithm that follows the divide-and-conquer approach. It works by breaking down an unsorted array into smaller, sorted subarrays and then merging those subarrays to produce a fully sorted array.

			The algorithm first divides the unsorted array into two halves, then recursively divides each half into two smaller halves until each subarray contains only one element. Then, the algorithm merges the subarrays back together, comparing the first elements of each subarray and placing them in order. This process continues until the entire array is sorted.

			While merge sort is an efficient and reliable sorting algorithm, it may not be as commonly used as some other sorting algorithms. This is likely due to its additional space requirements and performance drawbacks compared to other sorting algorithms. 
		`
	},
	quick_sort: {
		name: "Quick Sort",
		time_complexity: {
			best: ['O(n log(n))', 'orange-700'],
			average: ['O(n log(n))', 'orange-700'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(log (n))', 'lime-700'],
		description: `
			Quick sort is a popular sorting algorithm that uses a divide-and-conquer approach to sort an array of elements.
		
			The basic idea behind quick sort is to partition the array into two smaller sub-arrays based on a chosen pivot element. Elements smaller than the pivot are moved to the left sub-array, and elements greater than the pivot are moved to the right sub-array. This process is repeated recursively on each sub-array until the sub-arrays are small enough to be sorted easily. Once the sub-arrays are sorted, they are combined to form the final sorted array.
		
			Quick sort is known for its efficiency and is often used in practice such as in the V8 JavaScript engine. However, it can have poor performance if the pivot element is poorly chosen or if the input data is already sorted or nearly sorted.
		`
	},
	radix_sort: {
		name: "Heap Sort",
		time_complexity: {
			best: ['O(n log(n))', 'green-800'],
			average: ['O(n log(n))', 'green-800'],
			worst: ['O(n log(n))', 'green-800']
		},
		space_complexity: ['O(n)', 'yellow-600'],
		description: `
			Heap Sort is a comparison-based sorting algorithm that utilizes a binary heap data structure to efficiently sort elements. It works by first building a max heap from the given input, ensuring that the largest element is at the root. The sorting process then involves repeatedly extracting the maximum element from the heap, moving it to the end of the array, and rebuilding the heap until all elements are sorted.

Heap Sort operates in two main phases:

Heap Construction: The input array is transformed into a max heap, where each parent node is greater than its child nodes. This is typically done using the heapify process in O(n) time.
Heap Sorting: The root element (largest value) is swapped with the last element, reducing the heap size, and then heapify is applied again to restore the heap property. This process continues until all elements are sorted.
One of the key advantages of Heap Sort is its O(n log n) worst-case time complexity, making it more consistent than Quick Sort. Additionally, it is an in-place sorting algorithm, meaning it does not require extra memory beyond the input array. However, unlike Merge Sort, Heap Sort is not stable, meaning the relative order of equal elements may not be preserved.

Due to its efficiency and worst-case guarantees, Heap Sort is widely used in applications requiring large-scale sorting, such as priority queues and graph algorithms like Dijkstra’s shortest path.		`
	},
}

export default algorithmInfos