export default (sequelize, DataTypes) => {

    const student = sequelize.define("student", {
        name: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        enroll: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.STRING
        },
    
    })

    return student

}