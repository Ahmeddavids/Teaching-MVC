const farmModel = require('../model/farmModel.js');

const register = async (req, res) => {
    try {
        const { age, name, breed, colour, } = req.body;
        let matured = false
        if (age >= 10){
            matured = true
        }
        const animal = await farmModel.create({
            name,
            breed,
            age,
            colour,
            isMatured: matured
        });

        res.status(201).json({
            message: 'Animal profile created successfully',
            data: animal
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAll = async (req, res ) =>  {
    try {
        const allAnimals = await farmModel.find();
        if (allAnimals.length === 0) {
            return res.status(200).json({
                message: 'Database currently empty'
            })
        } else {
            res.status(200).json({
                message: `List of all animals in this database \n the  total of: ${allAnimals.length}`,
                data: allAnimals
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getOne = async (req, res ) =>  {
    try {
        const { id } = req.params
        const animal = await farmModel.findById(id);
        if (!animal) {
            return res.status(404).json({
                message: `Animal with ID: ${id} not found`
            })
        } else {
            res.status(200).json({
                message: `Animal found`,
                data: animal
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    register,
    getAll,
    getOne
}