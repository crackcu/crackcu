// Homepage Data - Auto-loads latest 3 items from each data source
document.addEventListener('DOMContentLoaded', () => {
    // Load latest mock tests
    if (document.getElementById('mockTestsPreview')) {
        const latestMockTests = mockTestsData.fullMockTests.slice(0, 3);
        document.getElementById('mockTestsPreview').innerHTML = 
            latestMockTests.map(test => renderMockTestCard(test)).join('');
    }
    
    // Load latest study materials
    if (document.getElementById('studyMaterialsPreview')) {
        const allMaterials = [
            ...studyMaterialsData.english,
            ...studyMaterialsData.problemSolving,
            ...studyMaterialsData.analyticalAbility
        ];
        const latestMaterials = allMaterials
            .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
            .slice(0, 3);
        document.getElementById('studyMaterialsPreview').innerHTML = 
            latestMaterials.map(material => renderStudyMaterialCard(material)).join('');
    }
    
    // Load latest question bank
    if (document.getElementById('questionBankPreview')) {
        const latestQuestions = questionBankData.slice(0, 3);
        document.getElementById('questionBankPreview').innerHTML = 
            latestQuestions.map(q => renderQuestionBankCard(q)).join('');
    }
    
    // Load latest news
    if (document.getElementById('newsUpdatesPreview')) {
        const latestNews = newsUpdatesData.slice(0, 3);
        document.getElementById('newsUpdatesPreview').innerHTML = 
            latestNews.map(news => renderNewsCard(news)).join('');
    }
});