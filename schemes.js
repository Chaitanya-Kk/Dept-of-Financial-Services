// API endpoints for schemes data
const API_BASE_URL = 'https://api.dfs.gov.in/v1';

// Fetch all schemes
async function fetchSchemes() {
    try {
        const response = await fetch(`${API_BASE_URL}/schemes`, {
            headers: {
                'Authorization': 'Bearer ' + getAuthToken(),
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch schemes');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching schemes:', error);
        return [];
    }
}

// Fetch scheme details
async function fetchSchemeDetails(schemeId) {
    try {
        const response = await fetch(`${API_BASE_URL}/schemes/${schemeId}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching scheme details:', error);
        return null;
    }
}

// Apply for scheme
async function applyForScheme(schemeId, applicationData) {
    try {
        const response = await fetch(`${API_BASE_URL}/schemes/${schemeId}/apply`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + getAuthToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit application');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error applying for scheme:', error);
        throw error;
    }
}

// Check eligibility
async function checkEligibility(schemeId, userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/schemes/${schemeId}/check-eligibility`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        return await response.json();
    } catch (error) {
        console.error('Error checking eligibility:', error);
        return { eligible: false, reason: 'Unable to check eligibility' };
    }
}

// Helper function to get auth token
function getAuthToken() {
    return localStorage.getItem('authToken') || '';
}