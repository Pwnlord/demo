const supabase = require('../database/supabase.js')

const uploadDetails = async (req, res, next) => {
    try{
        const { fullName, phoneNumber, email, company} = req.body
        const { data, error } = await supabase.from('details').insert([
            {name: fullName, company: company, email: email, phone_number: phoneNumber}
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

module.exports = uploadDetails