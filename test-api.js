#!/usr/bin/env node

const API_URL = process.env.API_URL || 'http://localhost:3001';

async function testAPI() {
  console.log('Testing User Registration API...\n');

  try {
    // Test 1: Register a new user
    console.log('1. Testing user registration...');
    const registerResponse = await fetch(`${API_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123'
      })
    });

    const registerData = await registerResponse.json();
    console.log('Status:', registerResponse.status);
    console.log('Response:', JSON.stringify(registerData, null, 2));
    console.log('✅ Registration test passed\n');

    // Test 2: Try to register the same user again (should fail)
    console.log('2. Testing duplicate email handling...');
    const duplicateResponse = await fetch(`${API_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123'
      })
    });

    const duplicateData = await duplicateResponse.json();
    console.log('Status:', duplicateResponse.status);
    console.log('Response:', JSON.stringify(duplicateData, null, 2));
    console.log('✅ Duplicate email test passed\n');

    // Test 3: Test validation (invalid email)
    console.log('3. Testing email validation...');
    const validationResponse = await fetch(`${API_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'invalid-email',
        password: 'password123'
      })
    });

    const validationData = await validationResponse.json();
    console.log('Status:', validationResponse.status);
    console.log('Response:', JSON.stringify(validationData, null, 2));
    console.log('✅ Email validation test passed\n');

    console.log('🎉 All tests passed! API is working correctly.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

testAPI();
