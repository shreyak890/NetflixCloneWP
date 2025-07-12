document.addEventListener('DOMContentLoaded', () => {
    const profilesList = document.querySelector('.profiles-list');
    const addProfileLink = document.querySelector('.add-profile-item');
    const doneButton = document.querySelector('.btn-done');
    const modal = document.getElementById('avatarGalleryModal');
    const closeButton = document.querySelector('.close-button');
    const avatarOptionsGrid = document.getElementById('avatarOptions');
    const saveAvatarButton = document.getElementById('saveAvatarButton');

    // Define the avatar URLs (you can use more if needed)
    const avatarUrls = [
        "1p.jpg",
        "2p.jpg",
        "3p.jpg",
        "4p.jpg",
        "5p.jpg",
        "6p.jpg",
        "7p.jpg",
        "8p.jpg"
    ];

    let selectedAvatarUrl = '';
    let newProfileName = '';

    // Function to populate the gallery with avatars
    function populateAvatarGallery() {
        avatarOptionsGrid.innerHTML = '';
        avatarUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.classList.add('gallery-avatar');
            img.addEventListener('click', () => {
                // Remove 'selected' class from all avatars
                document.querySelectorAll('.gallery-avatar').forEach(avatar => {
                    avatar.classList.remove('selected');
                });
                // Add 'selected' class to the clicked avatar
                img.classList.add('selected');
                selectedAvatarUrl = url;
            });
            avatarOptionsGrid.appendChild(img);
        });
    }

    // --- Event Listeners ---

    // 1. Open the modal when "Add Profile" is clicked
    addProfileLink.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Ask for the profile name first
        const name = prompt("Enter the name for the new profile:");

        if (name && name.trim() !== '') {
            newProfileName = name.trim();
            populateAvatarGallery();
            modal.style.display = 'block'; // Show the modal
        } else if (name !== null) {
            alert("Profile name cannot be empty.");
        }
    });

    // 2. Close the modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        selectedAvatarUrl = ''; // Reset selected avatar
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            selectedAvatarUrl = '';
        }
    });

    // 3. Save the profile with the selected avatar
    saveAvatarButton.addEventListener('click', () => {
        if (selectedAvatarUrl === '') {
            alert("Please select an avatar.");
            return;
        }

        // Create the new profile HTML element using the selected avatar
        const newProfileHTML = `
            <div class="profile-item">
                <img src="${selectedAvatarUrl}" alt="${newProfileName}" class="profile-avatar">
                <span class="profile-name">${newProfileName}</span>
                <div class="edit-icon"><i class="fas fa-pencil-alt"></i></div>
            </div>
        `;

        // Insert the new profile before the "Add Profile" link
        addProfileLink.insertAdjacentHTML('beforebegin', newProfileHTML);

        // Close the modal and reset state
        modal.style.display = 'none';
        selectedAvatarUrl = '';
        newProfileName = '';
    });

    // 4. Functionality for the "Done" button
    doneButton.addEventListener('click', () => {
        alert('Profiles management complete.');
        // window.location.href = 'index.html'; 
    });
});