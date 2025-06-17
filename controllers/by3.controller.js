const supabase = require('../database/supabase.js')

const by3Cont = async (req, res, next) => {
    try{
        const { moveInTime, propertyToSellLease, leaseDuration, additionalDetails, subscribeUpdates, referralSource, additionalComments, contactConsent } = req.body
        const { data, error } = await supabase.from('by3').insert([
            {
                moveInTime: moveInTime, propertyToSellLease: propertyToSellLease, leaseDuration: leaseDuration,additionalDetails: additionalDetails,subscribeUpdates: subscribeUpdates, referralSource: referralSource, additionalComments: additionalComments, contactConsent: contactConsent
            }
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
module.exports = by3Cont