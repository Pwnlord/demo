const supabase = require('../database/supabase.js')

const bp4Cont = async (req, res, next) => {
    try{
        const { discoverySource} = req.body
        const { data, error } = await supabase.from('bp4').insert([
            { 
                discoverySource: discoverySource
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
module.exports = bp4Cont