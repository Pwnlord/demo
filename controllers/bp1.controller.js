const supabase = require('../database/supabase.js')

const bp1Cont = async (req, res, next) => {
    try{
        const { fullName, email,phoneNumber,propertyLocation,propertyType,bedrooms,bathrooms, propertySize, features,askingPrice,moveInTime} = req.body
        const { data, error } = await supabase.from('bp1').insert([
            {fullName: fullName, email: email, phoneNumber: phoneNumber, propertyLocation: propertyLocation, propertyType: propertyType,bedrooms:bedrooms, bathrooms: bathrooms,propertySize: propertySize,
                features: features, askingPrice: askingPrice, moveInTime: moveInTime
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
module.exports = bp1Cont