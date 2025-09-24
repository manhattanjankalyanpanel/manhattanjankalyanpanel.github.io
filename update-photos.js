// Auto Photo Replacement Script
// Run this after adding photos to update index.html

const fs = require('fs');
const path = require('path');

// Photo mapping: placeholder URL -> real photo path
const photoMappings = {
    // Featured Leaders
    'https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Krishna+Tripathi': 'photos/krishna-tripathi.jpg',
    'https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Amol+Arsad': 'photos/amol-arsad.jpg',
    'https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Bhoyar+Aniket': 'photos/bhoyar-aniket.jpg',
    
    // Women Leaders
    'https://via.placeholder.com/200x250/e91e63/FFFFFF?text=Sangeeta+Guha': 'photos/sangeeta-guha.jpg',
    'https://via.placeholder.com/200x250/9c27b0/FFFFFF?text=Sudeshna+Ghosh': 'photos/sudeshna-ghosh.jpg',
    'https://via.placeholder.com/200x250/673ab7/FFFFFF?text=Pratima+Chormale': 'photos/pratima-chormale.jpg',
    
    // Complete Team
    'https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Sagar+Thakare': 'photos/sagar-thakare.jpg',
    'https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Suraj+Gadekar': 'photos/suraj-gadekar.jpg',
    'https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Anand+Shinde': 'photos/anand-shinde.jpg',
    'https://via.placeholder.com/200x250/ffc107/FFFFFF?text=Suchit+Ovhal': 'photos/suchit-ovhal.jpg',
    'https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Darshan+Borse': 'photos/darshan-borse.jpg',
    'https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Abhishek+Kumar': 'photos/abhishek-kumar.jpg',
    'https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Himanshu+Odak': 'photos/himanshu-odak.jpg',
    'https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Abhinav+Whatte': 'photos/abhinav-whatte.jpg',
    'https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Ashutosh+Kotkar': 'photos/ashutosh-kotkar.jpg',
    'https://via.placeholder.com/200x250/ffc107/FFFFFF?text=Sujit+Vhanawade': 'photos/sujit-vhanawade.jpg',
    'https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Akshay+Kamble': 'photos/akshay-kamble.jpg',
    'https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Anand+Bhagwat': 'photos/anand-bhagwat.jpg',
    'https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Shailesh+Surwade': 'photos/shailesh-surwade.jpg'
};

function updatePhotos() {
    const indexPath = path.join(__dirname, 'index.html');
    
    // Check if index.html exists
    if (!fs.existsSync(indexPath)) {
        console.error('❌ index.html not found!');
        return;
    }
    
    // Read the HTML file
    let htmlContent = fs.readFileSync(indexPath, 'utf8');
    
    // Replace each placeholder with real photo path
    let replacedCount = 0;
    for (const [placeholder, realPhoto] of Object.entries(photoMappings)) {
        const photoPath = path.join(__dirname, realPhoto);
        
        // Check if photo exists
        if (fs.existsSync(photoPath)) {
            htmlContent = htmlContent.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), realPhoto);
            replacedCount++;
            console.log(`✅ Replaced: ${realPhoto}`);
        } else {
            console.log(`⚠️  Photo not found: ${realPhoto}`);
        }
    }
    
    // Write the updated HTML back to file
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    
    console.log(`\n🎉 Successfully replaced ${replacedCount} photos!`);
    console.log('📂 Open index.html in your browser to see the updated photos.');
}

// Run the update
updatePhotos();
