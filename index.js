addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

// Function to handle incoming requests
async function handleRequest(request) {
  if (request.method === 'POST') {
    const formData = await request.formData();
    const referralCode = formData.get('referral_code');
    const referralCode1 = formData.get('referral_code_1');
    const referralCode2 = formData.get('referral_code_2');
    const productStage = formData.get('select_product_stage');

    console.log('Referral Code:', referralCode);
    console.log('Referral Code 2:', referralCode1);
    console.log('Referral Code 3:', referralCode2);
    console.log('Product Stage:', productStage);

    // Return a success response after handling the form data
    return new Response('Form submitted successfully!', { status: 200 });
  }

  return new Response('This endpoint only accepts POST requests', { status: 405 });
}
