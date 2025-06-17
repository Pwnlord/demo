const supabase = require('../database/supabase.js')

const by1Cont = async (req, res, next) => {
    try{
        const { fullName, email, phone, address, contactMethod,occupation,officeLocation,employmentType,firstTime,purpose,enquiryType } = req.body
        const { data, error } = await supabase.from('by1').insert([
            {fullName: fullName, phone: phone, email: email, address: address, contactMethod: contactMethod, occupation: occupation,officeLocation: officeLocation, employmentType: employmentType,firstTime: firstTime,purpose: purpose,enquiryType: enquiryType }
        ])
        if (error) {
            console.error('Supabase insert error:', error.message);
            return res.status(500).send('Failed to insert data into Supabase.');
        }
        console.log('Insert successful:', data);

    }catch(error){
        console.error('Supabase insert error:', error.message);
        return res.status(500).send('Failed to insert data into Supabase.');
    }
    next()

}
module.exports = by1Cont