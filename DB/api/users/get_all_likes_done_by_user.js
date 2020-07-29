const connection = require("../../config_db");

const Procedure = "CALL all_likes_by_user(?)";

function get_all_likes_done_by_user(id) {
  console.log("get_all_likes_done_by_user", id);
  return new Promise((resolve, reject) => {
    connection.query(Procedure, id, (error, results, fields) => {
      if (error) {
        reject(error);
      }
      console.log("\n RESULT : ", results);
      resolve(results[0]);
    });
  });
}
module.exports = get_all_likes_done_by_user;
