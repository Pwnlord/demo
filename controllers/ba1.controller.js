const supabase = require('../database/supabase.js')

const ba1Cont = async (req, res, next) => {
    try{
        const { fullName, phone, email, dob, address, idType} = req.body
        const { data, error } = await supabase.from('page1').insert([
            {fullName: fullName, phone: phone, email: email, dob: dob, address: address, id_type: idType}
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
module.exports = ba1Cont