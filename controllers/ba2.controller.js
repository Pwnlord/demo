const supabase = require('../database/supabase.js')

const ba2Cont = async (req, res, next) => {
    try{
        const { occupation, experience, affiliateExperience, specialize} = req.body
        const { data, error } = await supabase.from('page2').insert([
            {occupation: occupation, experience: experience, affiliate_experience: affiliateExperience}
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
module.exports = ba2Cont