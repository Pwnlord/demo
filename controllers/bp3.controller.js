const supabase = require('../database/supabase.js')

const bp3Cont = async (req, res, next) => {
    try{
        const { ageRange,maritalStatus,employmentStatus,religion, nationalityPreference,nationality,familySizePreference,familySize,petsAllowed} = req.body
        const { data, error } = await supabase.from('bp3').insert([
            { 
                ageRange: ageRange,maritalStatus: maritalStatus,employmentStatus: employmentStatus, religion: religion, nationalityPreference: nationalityPreference,
                nationality: nationality, familySizePreference: familySizePreference, familySize: familySize, petsAllowed: petsAllowed
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
module.exports = bp3Cont