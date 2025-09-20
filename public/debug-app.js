// Simplified debug version to test functionality
console.log('Debug app starting...')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, starting debug app')
  
  const app = document.getElementById('app')
  if (!app) {
    console.error('App element not found!')
    return
  }
  
  console.log('App element found, rendering simple content')
  
  app.innerHTML = `
    <div style="padding: 20px; background: white; margin: 20px; border-radius: 10px;">
      <h1>🔧 Debug Mode - CandlCrew Training</h1>
      <p>If you can see this, the basic JavaScript is working!</p>
      
      <div style="margin: 20px 0;">
        <h2>🍷 Beverage Training Available:</h2>
        <ul style="list-style: disc; margin-left: 20px;">
          <li>Wine Sommelier Level 1</li>
          <li>Beer Cicerone Level 1</li>
          <li>Whiskey Specialist</li>
          <li>Tequila Master</li>
          <li>Rum Captain</li>
        </ul>
      </div>
      
      <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h3>🎯 Next Steps:</h3>
        <p>1. Fix the main app.js rendering issue</p>
        <p>2. Deploy to Netlify for full Edge Functions support</p>
        <p>3. Connect to real database for progress tracking</p>
      </div>
      
      <button onclick="testMockAPI()" style="background: #4299e1; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
        Test Mock API
      </button>
      
      <div id="api-test-results" style="margin-top: 10px;"></div>
    </div>
  `
  
  console.log('Simple content rendered successfully')
})

// Test function for the mock API
window.testMockAPI = async () => {
  console.log('Testing mock API...')
  const results = document.getElementById('api-test-results')
  
  try {
    const response = await axios.get('/api/sections')
    console.log('API response:', response.data)
    
    results.innerHTML = `
      <div style="background: #d4edda; padding: 10px; border-radius: 5px; margin-top: 10px;">
        <strong>✅ API Test Successful!</strong><br>
        Found ${response.data.sections.length} training sections<br>
        Including: ${response.data.sections.map(s => s.title).join(', ')}
      </div>
    `
  } catch (error) {
    console.error('API test failed:', error)
    results.innerHTML = `
      <div style="background: #f8d7da; padding: 10px; border-radius: 5px; margin-top: 10px;">
        <strong>❌ API Test Failed:</strong><br>
        ${error.message}
      </div>
    `
  }
}