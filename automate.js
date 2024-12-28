const name = "Harsh Kumar";
const email = "harshbkp123@gmail.com";
const contact_no = "7209985453";
const reqURL = `https://ck.hdm3.in/lp.php?_save_form=true&hid=fad0dfd4h6fd6ze1ec858c06vf23c3kb075bf33&sid=085aaaf6&lead_data%5Bname%5D=${name}&lead_data%5Bemail%5D=${email}&lead_data%5Bcontact_no%5D=${contact_no}`;

async function submit() {
    try {
        const response = await fetch(reqURL, { method: 'GET' });
        console.log("Response status:", response.status);
        if (response.ok) {
            console.log("Form submitted successfully!");
            const redirectUrl = "https://ck.hdm3.in/lp.php?_save_form=true&hid=fb063bd6z6fd6je1ec858c16nf23c3vb075bf33&sid=085aaaf6&lead_data%5Bname%5D=harsh+Kumar&lead_data%5Bemail%5D=harshbkp123%40gmail.com&lead_data%5Bcontact_no%5D=7209985453";          console.log("Redirecting to:", redirectUrl);
            window.location.href = redirectUrl;
        } else {
            console.log("Form not submitted, status:", response.status);
        }
    } catch (error) {
        console.log("Error occurred while submitting the form:", error);        }
    }
submit();
