const supabase = require('../database/supabase.js')

const detailsUpload = async (req, res, next) => {
    try {
        const{ help1,message, location, contact, referral} = req.body
        
        const { data, error } = await supabase
        .from('details2')
        .insert([
        { help1: help1, message: message, location: location, contact: contact,referral: referral },
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

module.exports = detailsUpload