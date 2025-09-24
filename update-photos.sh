#!/bin/bash
# Photo Update Script for Mac/Linux
# Run this after adding photos to the photos folder

echo "🌟 Manhattan Jan Kalyan Panel - Photo Update Script"
echo "=================================================="

# Check if photos folder exists
if [ ! -d "photos" ]; then
    echo "❌ 'photos' folder not found! Please create it and add your team photos."
    exit 1
fi

# Check if Node.js is available
if command -v node >/dev/null 2>&1; then
    echo "📷 Updating photos using Node.js script..."
    node update-photos.js
else
    echo "📷 Node.js not found. Using manual replacement..."
    
    # Manual replacement using sed
    cp index.html index.html.backup
    
    # Replace placeholders with actual photo paths
    sed -i '' 's|https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Krishna+Tripathi|photos/krishna-tripathi.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Amol+Arsad|photos/amol-arsad.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Bhoyar+Aniket|photos/bhoyar-aniket.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/e91e63/FFFFFF?text=Sangeeta+Guha|photos/sangeeta-guha.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/9c27b0/FFFFFF?text=Sudeshna+Ghosh|photos/sudeshna-ghosh.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/673ab7/FFFFFF?text=Pratima+Chormale|photos/pratima-chormale.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Sagar+Thakare|photos/sagar-thakare.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Suraj+Gadekar|photos/suraj-gadekar.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Anand+Shinde|photos/anand-shinde.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ffc107/FFFFFF?text=Suchit+Ovhal|photos/suchit-ovhal.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Darshan+Borse|photos/darshan-borse.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Abhishek+Kumar|photos/abhishek-kumar.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Himanshu+Odak|photos/himanshu-odak.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Abhinav+Whatte|photos/abhinav-whatte.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Ashutosh+Kotkar|photos/ashutosh-kotkar.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ffc107/FFFFFF?text=Sujit+Vhanawade|photos/sujit-vhanawade.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Akshay+Kamble|photos/akshay-kamble.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/f7931e/FFFFFF?text=Anand+Bhagwat|photos/anand-bhagwat.jpg|g' index.html
    sed -i '' 's|https://via.placeholder.com/200x250/ff8f00/FFFFFF?text=Shailesh+Surwade|photos/shailesh-surwade.jpg|g' index.html
    
    echo "✅ Photos updated successfully!"
    echo "💾 Backup saved as index.html.backup"
fi

echo ""
echo "🎉 Photo update complete!"
echo "📂 Open index.html in your browser to see the updated website."
echo ""
echo "💡 If some photos don't appear, make sure:"
echo "   - Photo files are in the 'photos' folder"
echo "   - File names match exactly (lowercase, with hyphens)"
echo "   - Files are in JPG format"
