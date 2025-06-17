const supabase = require('../database/supabase.js')

const ba3Cont = async (req, res, next) => {
    try{
        const { educationLevel, educationPlace, skills, certifications, graduationYear} = req.body
        const { data, error } = await supabase.from('page3').insert([
            {education_level: educationLevel, education_place: educationPlace, skills: skills, certifications: certifications, graduation_year: graduationYear  }
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
module.exports = ba3Cont