const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//this is where the kpi database will live
const kpiSchema = new Schema ({
  //to check: can I put these into 3 arrays based on KPIs?
 numberOfSales: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },
 revenue: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },

 profit: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },

 totalOperatingCost: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },
 returnedItems: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },
customersPerMonth: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },
 customerRetention: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },
 employeeProductivity: {
   type: Number,
   required: true,
   validate: {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
 },
 wordsThatConvert:
     {
       type: String
     }
 });


const KPI = mongoose.model("KPI", kpiSchema);
module.exports = KPI;