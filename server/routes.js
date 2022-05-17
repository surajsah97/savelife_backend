// const { route } = require("./routeConnect");



module.exports={
    "POST /login":"loginController.loginVerify",
    "GET /home":"homeController.home",
    "GET /dashboard":"dashboardController.dashboard",
    "POST /home":"homeController.verifyHome",
    "POST /about":"aboutController.about",
    "PUT /loginUpdate/:id":"loginController.loginUpdate",
    "DELETE /loginDelete/:id":"loginController.loginDelete",
    "POST /register":"registerController.register",
    "POST /recordCreate":"RecordController.recordCreate",
    "GET /getRecords":"RecordController.getRecords",
    "POST /findRecords":"RecordController.findRecords",
    "PUT /recordUpdate":"RecordController.recordUpdate",
    "POST /deleteCase":"RecordController.deleteCase",
    "Post /caseSearch":"RecordController.caseSearch"

}