const supabase = require('../database/supabase.js')

const by2Cont = async (req, res, next) => {
    try{
        const {apartmentType, propertySize,bedrooms,bathrooms,floorLevel,proximity, location,budgetRange,minMaxBudget,propertyCondition,features,otherFeatures,paymentPlan,legalServices,mortgageHelp,guarantorName,guarantorPhone,guarantorEmail,guarantorOccupation,guarantorAddress, guarantorRelationship } = req.body
        const { data, error } = await supabase.from('by2').insert([
            {apartmentType: apartmentType,propertySize: propertySize, bedrooms: bedrooms, bathrooms: bathrooms,floorLevel: floorLevel,proximity: proximity,location: location,budgetRange: budgetRange,minMaxBudget: minMaxBudget,propertyCondition: propertyCondition,features: features, otherFeatures: otherFeatures,paymentPlan: paymentPlan,legalServices: legalServices,
                mortgageHelp: mortgageHelp, guarantorName: guarantorName, guarantorPhone: guarantorPhone, guarantorEmail: guarantorEmail,guarantorOccupation: guarantorOccupation,guarantorAddress: guarantorAddress, guarantorRelationship: guarantorRelationship
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
module.exports = by2Cont