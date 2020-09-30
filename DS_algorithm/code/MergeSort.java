package code;

public class MergeSort {
    // Main function that sorts arr[l..r] using
    // merge()
    public void sort(int arr[], int l, int r) {
        if (l < r) {
            // Find mid point
            int m = (l + r) / 2;

            // recursively Sort() and split the first and second half
            sort(arr, l, m);
            sort(arr, m + 1, r);

            // Merge the sorted halves
            merge(arr, l, m, r);
        }
    }

    // merge two subarrays
    // First subarray is arr[l..m]
    // Second subarray is arr[m + 1..r]

    public void merge(int arr[], int l, int m, int r) {

        // Find size of two subarrays to be merged
        int sizeLeft = m - l + 1;
        int sizeRight = r - m;

        // Create temp arrays
        int L[] = new int[sizeLeft];
        int R[] = new int[sizeRight];

        // Copy data to temp arrays
        for (int i = 0; i < sizeLeft; i++) {
            L[i] = arr[l + i];
        }
        for (int j = 0; j < sizeRight; j++) {
            R[j] = arr[m + 1 + j];
        }

        // Merge the temp arrays

        // Initial indexes of first and second subarrays
        int i = 0, j = 0;

        // Initial index of merged subarray array
        int k = l;
        while (i < sizeLeft && j < sizeRight) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy remaining elements of L[] if any
        while (i < sizeLeft) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy remaining elements of R[] if any
        while (j < sizeRight) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}
