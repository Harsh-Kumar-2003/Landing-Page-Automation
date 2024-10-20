
    const name = "Harsh Kumar";
    const email = "harshbkp123@gmail.com";
    const contact_no = "7209985453";
    const reqURL = `https://ck.hdm3.in/lp.php?_save_form=true&hid=fad0dfd4h6fd6ze1ec858c06vf23c3kb075bf33&sid=085aaaf6&lead_data%5Bname%5D=${name}&lead_data%5Bemail%5D=${email}&lead_data%5Bcontact_no%5D=${contact_no}`;

    async function submit() {
        try {
            const response = await fetch(reqURL, { method: 'GET' });
            const responseText = await response.text();
            console.log("Response status:", response.status);
            console.log("Response text:", responseText);

            if (response.ok) {
                console.log("Form submitted successfully!");
                const redirectUrl = extractRedirectUrl(responseText);
                if (redirectUrl) {
                    console.log("Redirecting to:", redirectUrl);
                    window.location.href = redirectUrl;
                } else {
                    console.log("No redirect URL found in the response.");
                }
            } else {
                console.log("Form not submitted, status:", response.status);
            }
        } catch (error) {
            console.log("Error occurred while submitting the form:", error);
        }
    }

    function extractRedirectUrl(responseText) {
        console.log("Extracting redirect URL from response text...");
        console.log(responseText); // Log the response text
        // Adjust the regex pattern based on the actual response
        const urlPattern = /https:\/\/ck\.hdm3\.in\/[^\s"]+/;
        const match = responseText.match(urlPattern);
        console.log("Matched URL:", match);
        return match ? match[0] : null;
    }

    submit();
