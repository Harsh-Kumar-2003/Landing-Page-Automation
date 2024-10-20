const name = "Harsh Kumar";
const email = "harshbkp123@gmail.com";
const contact_no = "7209985453";

const reqURL = `https://ck.hdm3.in/lp.php?_save_form=true&hid=fad0dfd4h6fd6ze1ec858c06vf23c3kb075bf33&sid=085aaaf6&lead_data%5Bname%5D=${name}&lead_data%5Bemail%5D=${email}&lead_data%5Bcontact_no%5D=${contact_no}`;

async function submit() {
    try {
        const response = await fetch(reqURL , {method : 'GET'});
        if(response.ok)
            console.log("Form submitted successfully !");
        else
            console.log("Form not submitted , status : " , response.status);
    } catch (error) {
        console.log("Error occured while submitting the form : " , error);
    }
}

submit();