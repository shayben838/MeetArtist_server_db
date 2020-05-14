const bcrypt = require("bcryptjs");
const get_filterd_users = require("../../../DB/api/users/get_filterd_users");

async function logIn(email, password) {
    try{
        // CHECK MATCH PASSWORDS
        let isMatch
        const user = await get_filterd_users({ email:email });
        const checkMatchPassword = async () => {
            isMatch = await bcrypt.compare(password,user[0].password)
            if (isMatch) {
                isMatch =true
                return [{
                    ...user[0],
                    password:"null"
                }]
            }
            else {
                isMatch =false
                console.log("######   does not  match")
                return []
            }
        }
        return await checkMatchPassword();        
    }
    catch{
        console.log("catch")
        return []
    }
}
module.exports = logIn;