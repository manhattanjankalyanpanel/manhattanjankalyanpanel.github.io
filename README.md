# Manhattan Jan Kalyan Panel - Campaign Website

## 🌟 Vote For STAR (तारा सीतारा)

A flashy, modern static website for the Manhattan Jan Kalyan Panel election campaign. Built with HTML, CSS, and JavaScript featuring a stunning orange/golden gradient design with star motifs.

## ✨ Features

- **Flashy Design**: Orange/golden gradient theme with animated star effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animated elements
- **Modern UI/UX**: Clean typography, professional layout, and intuitive navigation
- **Performance Optimized**: Fast loading with optimized animations
- **Accessibility**: Keyboard navigation support and semantic HTML

## 📁 File Structure

```
manhattan-campaign/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Simple Setup
1. Open `index.html` in any modern web browser
2. The website is ready to use!

### Option 2: Local Development Server
1. Install a local server (like Python's built-in server):
   ```bash
   # For Python 3
   python -m http.server 8000
   
   # For Python 2
   python -m SimpleHTTPServer 8000
   
   # Or use Node.js live-server
   npx live-server
   ```
2. Open `http://localhost:8000` in your browser

## 🎨 Customization Guide

### 1. Team Member Information
Update team member details in `index.html`:
- Find the team sections (General, OBC, Women, VJNT, SC/ST categories)
- Replace names, wing information, and bio descriptions
- All current content is from your campaign materials

### 2. Contact Information
Update contact details in the contact section:
- Email: Change `manhattanpanel@gmail.com`
- Phone: Update phone number
- Address: Modify the address

### 3. Election Details  
✅ **Already Updated** with actual election information:
- **Election Date**: 28th September 2025
- **Voting Hours**: 9:00 AM - 4:00 PM  
- **Venue**: Manhattan Clubhouse

To modify these details, update the vote section in `index.html`

### 4. Colors and Branding
Modify the color scheme in `styles.css`:
```css
/* Main brand colors */
--primary-orange: #ff6b35;
--secondary-orange: #f7931e;
--accent-yellow: #ffc107;
```

### 5. Images
Replace placeholder images:
- Replace placeholder photos with actual candidate photos
- All team members have dedicated photo placeholders with their names
- Simply replace the placeholder URLs with actual photo URLs
- Recommended photo size: 200x250 pixels
- Update building image if needed
- Add logo if needed

Example photo replacement:
```html
<!-- Replace this -->
<img src="https://via.placeholder.com/200x250/ff6b35/FFFFFF?text=Krishna+Tripathi" alt="Krishna Tripathi">
<!-- With actual arephoto -->
<img src="path/to/krishna-photo.jpg" alt="Krishna Tripathi">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above (3 members per row)
- **Tablet**: 768px to 1024px (2 members per row)  
- **Mobile**: Below 768px (1 member per row)

## 🎨 Team Layout Features

- **3-Column Layout**: Displays exactly 3 team members per row on desktop
- **Featured Leader Badges**: Special star badges for Krishna Tripathi, Amol Arsad, and Aniket
- **Women Leader Highlighting**: Unique styling with colorful gradients for women candidates
- **Category Badges**: Each member shows their category at the bottom of their profile
- **Professional Photos**: Dedicated photo placeholders for all team members
- **Responsive Design**: Automatically adjusts to 2 columns on tablets, 1 column on mobile

## 🌟 Key Sections

1. **Hero Section**: Main banner with "Vote For STAR" message
2. **Manifesto**: Vision, goals, and unique approach highlighting candidate expertise
3. **Team Members**: Organized in 3 special sections:
   - ⭐ **Featured Leaders**: Krishna Tripathi, Amol Arsad, Bhoyar Aniket (top placement)
   - 🌟 **Women Leaders**: Sangeeta Guha, Sudeshna Ghosh, Pratima Chormale (special highlighting)  
   - **Complete Team**: All other team members with category badges
4. **5-Year Goals**: Key objectives and targets
5. **Rolling Plan**: Detailed roadmap for governance, infrastructure, sustainability, and community
6. **Pledge**: Campaign commitment statement
7. **Vote Information**: Comprehensive election details (moved to bottom):
   - Key campaign messages
   - Election date, time, and venue (28th Sept 2025, 9AM-4PM, Manhattan Clubhouse)
   - Important voting requirements (ID, eligibility, voting for all 19 members)
   - Thank you message with feedback QR code reference
8. **Contact**: Contact form and information

## 🎯 Content Already Included

The website includes all content from your campaign materials:
- **Team Members**: All 19+ members across different categories and wings
- **Vision Points**: 4 key vision statements
- **5-Year Goals**: 7 main objectives
- **Rolling Plan**: Detailed plans for governance, infrastructure, sustainability, and community
- **Pledge**: Complete pledge statement
- **Campaign Slogan**: "Vote For STAR" (तारा सीतारा)

## 🔧 Technical Features

### CSS Features
- CSS Grid and Flexbox for layout
- CSS animations and transitions
- Custom gradient backgrounds
- Responsive design with media queries
- CSS variables for easy theming

### JavaScript Features
- Mobile navigation toggle
- Smooth scrolling
- Scroll-triggered animations
- Form validation
- Intersection Observer for performance
- Touch/swipe gesture support

### Performance Optimizations
- Throttled scroll events
- Lazy loading animations
- Optimized CSS animations
- Minimal external dependencies

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Form Handling

The contact form currently shows a success message. To make it functional:

1. **Email Service Integration**:
   - Use services like Formspree, Netlify Forms, or EmailJS
   - Update the form action in `index.html`

2. **Backend Integration**:
   - Create a server endpoint to handle form submissions
   - Update the JavaScript in `script.js`

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Upload to a GitHub repository
- **Firebase Hosting**: Use Firebase CLI

### Traditional Hosting
- Upload all files to your web server
- Ensure the files are in the root directory or subdirectory

## 🎨 Design Credits

- **Color Scheme**: Based on Manhattan campaign materials
- **Typography**: Inter and Poppins fonts from Google Fonts
- **Icons**: Font Awesome 6.0
- **Star Motif**: Unicode star characters with custom animations

## 📝 Customization Examples

### Adding a New Team Member
```html
<div class="team-member">
    <div class="member-wing">X Wing</div>
    <h4>Member Name</h4>
    <p class="member-bio">Member bio and experience...</p>
</div>
```

### Updating Colors
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --accent-color: #ffc107;
}
```

### Adding New Animations
```css
.my-animation {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.my-animation.visible {
    opacity: 1;
    transform: translateY(0);
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**: Check if JavaScript is enabled
2. **Mobile menu not responsive**: Verify viewport meta tag
3. **Forms not submitting**: Check browser console for errors
4. **Images not loading**: Verify file paths are correct

### Debug Mode
Open browser developer tools (F12) to see console messages and debug information.

## 📞 Support

For technical support or customization help:
- Check browser developer console for errors
- Verify all files are in the same directory
- Ensure modern browser compatibility

## 🎯 Campaign Message

**"Your Voice. Our Commitment. Manhattan Jan Kalyan Panel."**

Building a better future together through transparency, innovation, and care.

**Vote For STAR** - तारा सीतारा

---

*Created for Manhattan Jan Kalyan Panel Election Campaign 2025*
