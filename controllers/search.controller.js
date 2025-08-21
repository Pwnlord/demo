const supabase = require('../database/supabase.js')

const search = async (req, res, next) => {

        const { keyword = '', location = '', type = '' } = req.query;

  console.log('Incoming query:', { keyword, location, type }); // log inputs

  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .ilike('title', `%${keyword}%`)
      .ilike('location', `%${location}%`)
      .ilike('type', `%${type}%`);

    if (error) {
      console.error('Supabase Error:', error);
      return res.status(500).json({ error });
    }

    console.log('Supabase Data:', data);
    res.json(data);
  } catch (err) {
    console.error('Unhandled Error:', err);
    res.status(500).json({ err });
  }

     next()
}


module.exports = search

