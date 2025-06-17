const supabase = require('../database/supabase.js')

const ba4Cont = async (req, res, next) => {
    try{
        const { employer, jobTitle, startDate, endDate, whyJoin, referralInfo, hearAbout, additionalInfo} = req.body
        const { data, error } = await supabase.from('page4').insert([
            {employer: employer, job_title: jobTitle, start_date: startDate, end_date: endDate, why_join: whyJoin, referral_info: referralInfo, hear_about: hearAbout, additional_info: additionalInfo }
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
module.exports = ba4Cont