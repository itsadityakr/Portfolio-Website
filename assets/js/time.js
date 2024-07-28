function updateTime() {
    const timeElement = document.querySelector('.time');
    const now = new Date();
    
    // Get hours and minutes
    let hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format minutes
    const minutesFormatted = minutes.toString().padStart(2, '0');
    
    // Create time string
    const timeString = `${hours}:${minutesFormatted} ${ampm}`;

    // Get date components
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear().toString().slice(-2); // last two digits of year
    
    // Create date string
    const dateString = `${day} ${month} '${year}`;
    
    // Update the <p> tag with the current date and time
    timeElement.textContent = `${timeString} | ${dateString}`;
}

// Update time immediately when page loads
updateTime();

// Optionally, update time every minute
setInterval(updateTime, 60000);
