// Color palette for charts
const chartColors = {
    primary: '#ca343e',
    secondary: '#e9c554',
    tertiary: '#cdc484',
    quaternary: '#c47e76',
    quinary: '#ab807a',
    senary: '#50353a'
};

// Sample data for demonstration charts - Blind Box Culture Project
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
    },
    chart2: {
        labels: ['High Arts Access', 'Medium Arts Access', 'Low Arts Access', 'No Data'],
        datasets: [{
            data: [35, 30, 25, 10],
            backgroundColor: [
                chartColors.primary,
                chartColors.secondary,
                chartColors.tertiary,
                chartColors.quaternary
            ]
        }]
    },
    chart3: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Creative Expression',
            data: [65, 72, 68, 75],
            backgroundColor: chartColors.tertiary,
            borderColor: chartColors.primary,
            borderWidth: 3
        }, {
            label: 'Impulsive Buying',
            data: [45, 58, 62, 55],
            backgroundColor: chartColors.quaternary,
            borderColor: chartColors.secondary,
            borderWidth: 3
        }]
    },
    chart4: {
        labels: ['TikTok', 'Instagram', 'YouTube', 'Twitter', 'Reddit', 'Other', 'None'],
        datasets: [{
            label: 'Social Media Influence',
            data: [85, 72, 68, 45, 38, 25, 15],
            fill: true,
            backgroundColor: 'rgba(202, 52, 62, 0.2)',
            borderColor: chartColors.primary,
            borderWidth: 2,
            tension: 0.4
        }]
    }
};

// Initialize main page functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeAnimations();
    initializeContactForm();
    
    // Initialize preview charts with a slight delay to ensure Chart.js is loaded
    setTimeout(initializePreviewCharts, 500);
});

// Also try to initialize charts when the window loads completely
window.addEventListener('load', function() {
    setTimeout(initializePreviewCharts, 100);
});

// Initialize preview charts for home page
function initializePreviewCharts() {
    // Wait for Chart.js to be available
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded yet, retrying in 100ms...');
        setTimeout(initializePreviewCharts, 100);
        return;
    }

    console.log('Initializing preview charts...');

    // Google Trends Preview Chart - matches viz1-trends.html exactly
    const trendsCtx = document.getElementById('trendsChartPreview');
    if (trendsCtx) {
        console.log('Creating trends chart...');
        try {
            new Chart(trendsCtx, {
                type: 'line',
                data: {
                    labels: ['Jan 2022', 'Apr 2022', 'Jul 2022', 'Oct 2022', 'Jan 2023', 'Apr 2023', 'Jul 2023', 'Oct 2023', 'Jan 2024'],
                    datasets: [{
                        label: 'Blind Box Search Interest',
                        data: [45, 52, 78, 85, 92, 88, 95, 89, 91],
                        backgroundColor: 'rgba(202, 52, 62, 0.2)',
                        borderColor: '#ca343e',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false
                        },
                        x: {
                            display: false
                        }
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    interaction: {
                        intersect: false
                    }
                }
            });
            console.log('Trends chart created successfully');
        } catch (error) {
            console.error('Error creating trends chart:', error);
        }
    } else {
        console.log('Trends chart canvas not found');
    }

    // Correlation Preview Chart - matches viz3-correlation.html exactly
    const correlationCtx = document.getElementById('correlationChartPreview');
    if (correlationCtx) {
        console.log('Creating correlation chart...');
        try {
            new Chart(correlationCtx, {
                type: 'line',
                data: {
                    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'],
                    datasets: [{
                        label: 'Creative Expression',
                        data: [65, 72, 68, 75],
                        backgroundColor: 'rgba(205, 196, 132, 0.2)',
                        borderColor: '#cdc484',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: false
                    }, {
                        label: 'Impulsive Buying',
                        data: [45, 58, 62, 55],
                        backgroundColor: 'rgba(196, 126, 118, 0.2)',
                        borderColor: '#c47e76',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false
                        },
                        x: {
                            display: false
                        }
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    interaction: {
                        intersect: false
                    }
                }
            });
            console.log('Correlation chart created successfully');
        } catch (error) {
            console.error('Error creating correlation chart:', error);
        }
    } else {
        console.log('Correlation chart canvas not found');
    }

    // Demographics Preview Chart - matches viz4-demographics.html exactly
    const demographicsCtx = document.getElementById('demographicsChartPreview');
    if (demographicsCtx) {
        console.log('Creating demographics chart...');
        try {
            new Chart(demographicsCtx, {
                type: 'line',
                data: {
                    labels: ['TikTok', 'Instagram', 'YouTube', 'Twitter', 'Reddit', 'Other', 'None'],
                    datasets: [{
                        label: 'Social Media Influence',
                        data: [85, 72, 68, 45, 38, 25, 15],
                        backgroundColor: 'rgba(202, 52, 62, 0.2)',
                        borderColor: '#ca343e',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false
                        },
                        x: {
                            display: false
                        }
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    interaction: {
                        intersect: false
                    }
                }
            });
            console.log('Demographics chart created successfully');
        } catch (error) {
            console.error('Error creating demographics chart:', error);
        }
    } else {
        console.log('Demographics chart canvas not found');
    }
}

// Charts are now handled on individual visualization pages

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize animations and interactions
function initializeAnimations() {
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.viz-card, .finding-card, .feature');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Function to embed Tableau dashboards (to be used later)
function embedTableauDashboard(containerId, tableauUrl) {
    const container = document.getElementById(containerId);
    if (container) {
        // Clear existing content
        container.innerHTML = '';
        
        // Create iframe for Tableau dashboard
        const iframe = document.createElement('iframe');
        iframe.src = tableauUrl;
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        
        container.appendChild(iframe);
    }
}

// Example usage for embedding Tableau dashboards:
// embedTableauDashboard('viz1', 'https://your-tableau-dashboard-url');

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to visualization cards
    const vizCards = document.querySelectorAll('.viz-card');
    
    vizCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click to expand functionality for visualization cards
    vizCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add modal or expand functionality here
            console.log('Visualization clicked:', this.id);
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}); 