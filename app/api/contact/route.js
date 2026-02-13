export async function POST(request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return Response.json(
      { success: false, message: 'Missing access key' },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  formData.append('access_key', accessKey);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return Response.json(data, { status: response.ok ? 200 : 500 });
  } catch (error) {
    return Response.json(
      { success: false, message: 'Submission failed' },
      { status: 500 }
    );
  }
}
