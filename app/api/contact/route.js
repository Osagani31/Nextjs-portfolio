export async function POST(request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return Response.json(
      { success: false, message: 'Missing access key' },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const payload = {
      access_key: accessKey,
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      message: formData.get('message') || '',
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'nextjs-portfolio/1.0',
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type') || '';
    const rawText = await response.text();

    if (contentType.includes('application/json')) {
      const data = JSON.parse(rawText);
      return Response.json(data, { status: response.ok ? 200 : 500 });
    }

    const message = rawText
      ? `Unexpected response (${response.status}) from Web3Forms: ${rawText}`
      : `Unexpected response (${response.status}) from Web3Forms.`;

    return Response.json(
      { success: false, message },
      { status: 500 }
    );
  } catch (error) {
    const message = error?.message || 'Submission failed';
    return Response.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
