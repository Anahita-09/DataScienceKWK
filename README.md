# Creativity vs. Consumerism - Blind Box Culture Project

A beautiful, responsive data visualization website showcasing our KWK Data Science capstone project on blind box culture. This website explores the intersection of creativity and consumerism through interactive visualizations and can easily embed Tableau dashboards.

## 🎨 Color Palette

The website uses your beautiful color scheme:
- **Dark Brown/Almost Black**: `#2f2526`
- **Deep Muted Reddish-Brown**: `#50353a`
- **Earthy Red/Brick Red**: `#ca343e`
- **Medium Muted Taupe/Brownish-Grey**: `#ab807a`
- **Dusty Rose/Muted Pinkish-Brown**: `#c47e76`
- **Light Muted Olive Green/Khaki**: `#cdc484`
- **Warm Mustard Yellow/Goldenrod**: `#e9c554`
- **Very Light Desaturated Pink/Pale Lavender-Grey**: `#e0c5bf`
- **Soft Light Pink**: `#fdcaca`
- **Off-White/Very Pale Cream with a Hint of Pink**: `#fbf1ee`

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Charts**: Sample charts using Chart.js with your color palette
- **Smooth Animations**: Beautiful scroll-triggered animations
- **Tableau Integration**: Ready to embed your Tableau dashboards
- **Modern UI/UX**: Clean, professional design with excellent user experience
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Blind Box Focus**: Specifically designed for youth consumer behavior research

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles with your color palette
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠️ How to Use

### 1. Open the Website
Simply open `index.html` in your web browser to view the website.

### 2. Embed Your Tableau Dashboards

To embed your Tableau dashboards, you have two options:

#### Option A: Using the JavaScript Function
```javascript
// In the browser console or in script.js, call:
embedTableauDashboard('viz1', 'https://your-tableau-dashboard-url');
embedTableauDashboard('viz2', 'https://your-second-tableau-dashboard-url');
embedTableauDashboard('viz3', 'https://your-third-tableau-dashboard-url');
embedTableauDashboard('viz4', 'https://your-fourth-tableau-dashboard-url');
```

#### Option B: Direct HTML Embedding
Replace the placeholder content in each visualization card with your Tableau embed code:

```html
<!-- In index.html, replace the viz-placeholder div with: -->
<div class="viz-placeholder">
    <iframe 
        src="https://your-tableau-dashboard-url" 
        width="100%" 
        height="600" 
        frameborder="0">
    </iframe>
</div>
```

### 3. Customize Content

#### Update Project Information
The website is already customized for your blind box culture project:

- **Hero Section**: "Creativity vs. Consumerism" with blind box focus
- **About Section**: Details about your research on youth consumer behavior
- **Findings Section**: Key insights about regional differences and systemic influences
- **Contact Section**: Team B1 information (Anahita, Samantha, Atmika, Ishana)

#### Update Sample Charts
The sample data in `script.js` is already customized for your blind box project:

```javascript
const sampleData = {
    chart1: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Blind Box Search Interest',
            data: [45, 52, 78, 85, 92, 88],
            backgroundColor: chartColors.primary,
            borderColor: chartColors.secondary,
            borderWidth: 2
        }]
    }
    // ... other charts show arts access, consumer behavior, social media influence
};
```

## 📊 Embedding Tableau Dashboards

### Step 1: Get Your Tableau Dashboard URL
1. Open your Tableau dashboard
2. Click "Share" 
3. Copy the embed URL

### Step 2: Embed in the Website
Use the `embedTableauDashboard()` function:

```javascript
// Example usage
embedTableauDashboard('viz1', 'https://public.tableau.com/views/YourDashboard/Sheet1?:embed=y&:display_count=yes&:origin=viz_share_link');
```

### Step 3: Customize the Embed
You can customize the iframe properties:

```javascript
function embedTableauDashboard(containerId, tableauUrl) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        
        const iframe = document.createElement('iframe');
        iframe.src = tableauUrl;
        iframe.style.width = '100%';
        iframe.style.height = '600px'; // Adjust height as needed
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        
        container.appendChild(iframe);
    }
}
```

## 🎯 Sections Overview

### 1. Hero Section
- "Creativity vs. Consumerism" title with blind box focus
- Key statistics about interactive dashboards and youth research
- Call-to-action elements

### 2. About Section
- Blind box culture research methodology
- Target audience: teens and young adults on social media
- Data pipeline: Google Trends → Sheets → SQL → Tableau

### 3. Visualizations Section
- Google Trends Analysis (line graph)
- U.S. Arts Access Map (interactive map)
- Consumer Behavior Correlation (analysis)
- Youth Demographics Dashboard (social media influence)

### 4. Findings Section
- Regional differences in collecting behavior
- Systemic influences on youth consumption
- Social media impact on trends
- Educational opportunities for reflection

### 5. Contact Section
- Team B1 information (Anahita, Samantha, Atmika, Ishana)
- KWK Data Science Capstone Project
- Professional presentation

## 🔧 Customization Tips

### Colors
All colors are defined as CSS variables in `styles.css`:
```css
:root {
    --dark-brown: #2f2526;
    --deep-red-brown: #50353a;
    --earth-red: #ca343e;
    /* ... other colors */
}
```

### Typography
The website uses Inter font family for a modern, clean look.

### Animations
Smooth animations are triggered on scroll and hover interactions.

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Deployment

To deploy this website:

1. **GitHub Pages**: Upload to a GitHub repository and enable GitHub Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Connect your GitHub repository to Vercel
4. **Traditional Hosting**: Upload files to any web hosting service

## 📞 Support

If you need help customizing the website or embedding your Tableau dashboards, feel free to reach out!

## 📄 License

This project is created for your data science capstone project. Feel free to modify and use as needed.

---

**Note**: The current charts are sample data for demonstration. Replace them with your actual Google Trends data, arts funding statistics, and Tableau dashboards to showcase your real findings about blind box culture and youth consumer behavior. 