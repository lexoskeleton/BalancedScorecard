const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const kpiSchema = new Schema({
  date: {
    type: Date,
  },
  title: {
    type: String,
    trim: true,
  },
  sessions: {
    type: Number,
  },
  pageViews: {
    type: Number,
  },
  totalRevenue: {
    type: Number,
  },
  totalSales: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
  totalProfit: {
    type: Number,
  },
  customerSatisfaction: {
    type: Number,
  },
  employeeSatisfaction: {
    type: Number,
  },
  customerRetentionRate: {
    type: Number,
  },
  stockTotal:{
    type:Number
  }
  // returnedItems: {
  //   type: Number,
  //   required: true,
  //   validate: {
  //     validator: Number.isInteger,
  //     message: '{VALUE} is not an integer value'
  //   }
  // },
  // numOfCustomers: {
  //   type: Number,
  //   required: true,
  //   validate: {
  //     validator: Number.isInteger,
  //     message: '{VALUE} is not an integer value'
  //   }
  // },
  // wordsThatConvert:
  // {
  //   type: String
  // }
});


const KPI = mongoose.model("KPI", kpiSchema);
module.exports = KPI;