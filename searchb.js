// Function to filter movie rows based on search input
function filterMovies() {
    // Get the input value and convert to lowercase for case-insensitive searching
    let input = document.getElementById('movieSearch');
    let filter = input.value.toLowerCase();

    // Get all the movie rows
    let movieRows = document.getElementsByClassName('movie-row');

    // Loop through all movie rows
    for (let i = 0; i < movieRows.length; i++) {
        let row = movieRows[i];
        
        // Find the thumbnails and the row title within the current row
        let thumbnails = row.getElementsByClassName('thumbnail');
        let rowTitleElement = row.getElementsByTagName('h2')[0];
        let rowTitle = rowTitleElement ? rowTitleElement.textContent.toLowerCase() : '';

        let foundMatchInRow = false;

        // Loop through the thumbnails within this row
        // We will assume that the placeholder text or alt text on the thumbnails 
        // can be used for searching.
        for (let j = 0; j < thumbnails.length; j++) {
            let thumbnail = thumbnails[j];
            let img = thumbnail.getElementsByTagName('img')[0];
            
            // Get the text to search against (e.g., the alt text or a data attribute)
            let thumbnailText = img.alt.toLowerCase();

            // Check if the thumbnail text matches the search filter
            if (thumbnailText.includes(filter)) {
                // If it matches, show the thumbnail
                thumbnail.style.display = ""; // Reset to default display
                foundMatchInRow = true;
            } else {
                // If it doesn't match, hide the thumbnail
                thumbnail.style.display = "none";
            }
        }

        // --- Logic to hide/show the entire row based on results ---

        // Check if a match was found within the row or if the row title matches the search term
        if (foundMatchInRow || rowTitle.includes(filter)) {
            // Show the row if a match was found in a thumbnail OR if the row title matches
            row.style.display = "";
        } else {
            // Hide the entire row if no thumbnails or the title match the search filter
            row.style.display = "none";
        }

        // Special handling for the "Trending Now" and "Netflix Originals" titles. 
        // If the search bar is empty, show all rows and thumbnails.
        if (filter === "") {
            for (let j = 0; j < thumbnails.length; j++) {
                thumbnails[j].style.display = "";
            }
            row.style.display = "";
        }
    }
}