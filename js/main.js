// javascript
// Utility Functions

// Format date to readable string
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Get YouTube thumbnail URL
function getYouTubeThumbnail(url) {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
}

// Render mock test card
function renderMockTestCard(test) {
    const statusClass = test.status.toLowerCase();
    return `
        <div class="card">
            <span class="card-badge ${statusClass}">${test.status}</span>
            <h3 class="card-title">${test.title}</h3>
            <div class="card-meta">
                <span>📅 ${formatDate(test.publishDate)}</span>
            </div>
            ${test.description ? `<p class="card-description">${test.description}</p>` : ''}
            <div class="card-actions">
                <a href="${test.url}" target="_blank" class="btn btn-primary">Start Exam</a>
            </div>
        </div>
    `;
}

// Render study material card
function renderStudyMaterialCard(material) {
    if (material.type === 'video') {
        const thumbnail = getYouTubeThumbnail(material.url);
        return `
            <div class="card">
                <div class="video-thumbnail" onclick="window.open('${material.url}', '_blank')">
                    <img src="${thumbnail}" alt="${material.title}">
                    <div class="video-play-icon">▶</div>
                </div>
                <span class="badge">${material.subject}</span>
                <h3 class="card-title">${material.title}</h3>
                ${material.description ? `<p class="card-description">${material.description}</p>` : ''}
            </div>
        `;
    } else {
        return `
            <div class="card">
                <span class="badge">${material.subject}</span>
                <h3 class="card-title">${material.title}</h3>
                ${material.description ? `<p class="card-description">${material.description}</p>` : ''}
                <div class="card-actions">
                    <a href="${material.url}" target="_blank" class="btn btn-primary">Download PDF</a>
                </div>
            </div>
        `;
    }
}

// Render question bank card
function renderQuestionBankCard(question) {
    return `
        <div class="card">
            <h3 class="card-title">${question.session}</h3>
            <div class="card-meta">
                <span>📄 Past Question Paper</span>
            </div>
            <div class="card-actions">
                <a href="${question.pdfUrl}" target="_blank" class="btn btn-primary">Download PDF</a>
            </div>
        </div>
    `;
}

// Render news update card
function renderNewsCard(news) {
    return `
        <div class="card">
            <div class="card-meta">
                <span>📅 ${formatDate(news.date)}</span>
            </div>
            <h3 class="card-title">${news.headline}</h3>
            <p class="card-description">${news.summary}</p>
            <div class="card-actions">
                <a href="${news.url}" target="_blank" class="btn btn-primary">${news.ctaText}</a>
            </div>
        </div>
    `;
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
