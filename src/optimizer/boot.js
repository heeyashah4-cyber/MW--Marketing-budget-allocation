// @ts-nocheck
import Chart from "chart.js/auto";

export function destroyOptimizerCharts() {
  if (typeof document === "undefined") return;
  document.querySelectorAll("canvas").forEach((canvas) => {
    const inst = Chart.getChart(canvas);
    if (inst) inst.destroy();
  });
}

function resetClicks(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.replaceWith(el.cloneNode(true));
  });
}

export function initOptimizer() {
  if (typeof document === "undefined") return;
  if (!document.getElementById("roasChart")) return;
  try {
  destroyOptimizerCharts();
  resetClicks(".tabbtn, .subtabbtn, #btnApproach1, #btnApproach2");

const DATA = {"channels":["Affiliate","Email","Google Display","Google Search","Influencer","Instagram Reels","Meta Ads","Organic Social","SMS","YouTube"],"channel_stats":{"Affiliate":{"avg_roas":5.4882191780821925,"weighted_roas":5.5315,"std_roas":2.3447,"cv_roas":0.4272,"avg_daily_spend":249356.96,"avg_cpa":264.4,"avg_new_customers":688.55,"spend_roas_corr":0.0315},"Email":{"avg_roas":9.288018264840183,"weighted_roas":9.3573,"std_roas":4.0123,"cv_roas":0.432,"avg_daily_spend":42083.2,"avg_cpa":156.86,"avg_new_customers":201.99,"spend_roas_corr":0.0339},"Google Display":{"avg_roas":1.3897077625570777,"weighted_roas":1.3725,"std_roas":0.7051,"cv_roas":0.5074,"avg_daily_spend":257237.35,"avg_cpa":1178.41,"avg_new_customers":173.68,"spend_roas_corr":-0.0441},"Google Search":{"avg_roas":3.5867397260273974,"weighted_roas":3.5713,"std_roas":1.5729,"cv_roas":0.4385,"avg_daily_spend":251030.85,"avg_cpa":424.7,"avg_new_customers":445.19,"spend_roas_corr":-0.017},"Influencer":{"avg_roas":3.584849315068493,"weighted_roas":3.5589,"std_roas":1.7359,"cv_roas":0.4842,"avg_daily_spend":242157.68,"avg_cpa":428.7,"avg_new_customers":446.25,"spend_roas_corr":-0.0252},"Instagram Reels":{"avg_roas":3.3328584474885843,"weighted_roas":3.3296,"std_roas":1.5164,"cv_roas":0.455,"avg_daily_spend":249178.37,"avg_cpa":446.44,"avg_new_customers":433.2,"spend_roas_corr":-0.0038},"Meta Ads":{"avg_roas":2.389150684931507,"weighted_roas":1.8915,"std_roas":1.3851,"cv_roas":0.5798,"avg_daily_spend":250165.33,"avg_cpa":739.8,"avg_new_customers":237.64,"spend_roas_corr":-0.6244},"Organic Social":{"avg_roas":4.331607305936073,"weighted_roas":4.2673,"std_roas":1.9941,"cv_roas":0.4604,"avg_daily_spend":254834.35,"avg_cpa":341.74,"avg_new_customers":553.66,"spend_roas_corr":-0.0566},"SMS":{"avg_roas":6.082191780821918,"weighted_roas":6.1323,"std_roas":2.722,"cv_roas":0.4475,"avg_daily_spend":22454.79,"avg_cpa":249.36,"avg_new_customers":69.61,"spend_roas_corr":0.0398},"YouTube":{"avg_roas":2.2051415525114155,"weighted_roas":2.2278,"std_roas":0.9898,"cv_roas":0.4489,"avg_daily_spend":260078.43,"avg_cpa":689.9,"avg_new_customers":299.68,"spend_roas_corr":0.0422}},"diminishing":{"Affiliate":[{"decile":1,"mean_spend":25426.55,"mean_roas":5.334},{"decile":2,"mean_spend":70507.72,"mean_roas":5.307},{"decile":3,"mean_spend":121535.72,"mean_roas":5.167},{"decile":4,"mean_spend":170136.64,"mean_roas":5.844},{"decile":5,"mean_spend":222931.31,"mean_roas":5.45},{"decile":6,"mean_spend":277022.04,"mean_roas":5.69},{"decile":7,"mean_spend":329863.75,"mean_roas":5.463},{"decile":8,"mean_spend":376154.2,"mean_roas":5.679},{"decile":9,"mean_spend":426845.86,"mean_roas":5.394},{"decile":10,"mean_spend":473396.59,"mean_roas":5.556}],"Email":[{"decile":1,"mean_spend":8810.93,"mean_roas":9.176},{"decile":2,"mean_spend":15984.82,"mean_roas":9.03},{"decile":3,"mean_spend":23034.82,"mean_roas":9.092},{"decile":4,"mean_spend":30652.23,"mean_roas":9.338},{"decile":5,"mean_spend":38771.48,"mean_roas":9.183},{"decile":6,"mean_spend":46071.53,"mean_roas":9.141},{"decile":7,"mean_spend":53187.91,"mean_roas":9.574},{"decile":8,"mean_spend":60652.75,"mean_roas":9.508},{"decile":9,"mean_spend":68169.04,"mean_roas":8.693},{"decile":10,"mean_spend":75529.68,"mean_roas":10.141}],"Google Display":[{"decile":1,"mean_spend":29821.41,"mean_roas":1.506},{"decile":2,"mean_spend":79738.81,"mean_roas":1.366},{"decile":3,"mean_spend":135292.23,"mean_roas":1.373},{"decile":4,"mean_spend":186405.27,"mean_roas":1.458},{"decile":5,"mean_spend":237630.05,"mean_roas":1.45},{"decile":6,"mean_spend":284755.18,"mean_roas":1.282},{"decile":7,"mean_spend":334007.7,"mean_roas":1.386},{"decile":8,"mean_spend":382572.75,"mean_roas":1.34},{"decile":9,"mean_spend":427628.25,"mean_roas":1.333},{"decile":10,"mean_spend":474761.41,"mean_roas":1.402}],"Google Search":[{"decile":1,"mean_spend":29903.17,"mean_roas":3.589},{"decile":2,"mean_spend":73904.27,"mean_roas":3.68},{"decile":3,"mean_spend":118846.99,"mean_roas":3.549},{"decile":4,"mean_spend":172637.13,"mean_roas":3.669},{"decile":5,"mean_spend":224710.88,"mean_roas":3.445},{"decile":6,"mean_spend":276993.17,"mean_roas":3.586},{"decile":7,"mean_spend":328422.28,"mean_roas":3.67},{"decile":8,"mean_spend":378731.36,"mean_roas":3.536},{"decile":9,"mean_spend":428920.85,"mean_roas":3.688},{"decile":10,"mean_spend":477472.22,"mean_roas":3.458}],"Influencer":[{"decile":1,"mean_spend":28077.88,"mean_roas":3.686},{"decile":2,"mean_spend":72360.33,"mean_roas":3.639},{"decile":3,"mean_spend":117917.23,"mean_roas":3.804},{"decile":4,"mean_spend":162370.76,"mean_roas":3.384},{"decile":5,"mean_spend":210146.99,"mean_roas":3.464},{"decile":6,"mean_spend":260179.68,"mean_roas":3.727},{"decile":7,"mean_spend":310479.9,"mean_roas":3.429},{"decile":8,"mean_spend":367855.42,"mean_roas":3.465},{"decile":9,"mean_spend":419134.65,"mean_roas":3.785},{"decile":10,"mean_spend":473178.83,"mean_roas":3.466}],"Instagram Reels":[{"decile":1,"mean_spend":32287.78,"mean_roas":3.356},{"decile":2,"mean_spend":77269.25,"mean_roas":3.455},{"decile":3,"mean_spend":124044.66,"mean_roas":3.088},{"decile":4,"mean_spend":174885.53,"mean_roas":3.464},{"decile":5,"mean_spend":223383.99,"mean_roas":3.388},{"decile":6,"mean_spend":274322.08,"mean_roas":3.369},{"decile":7,"mean_spend":321499.38,"mean_roas":3.259},{"decile":8,"mean_spend":370447.98,"mean_roas":3.161},{"decile":9,"mean_spend":420114.93,"mean_roas":3.552},{"decile":10,"mean_spend":473729.9,"mean_roas":3.241}],"Meta Ads":[{"decile":1,"mean_spend":30227.81,"mean_roas":3.291},{"decile":2,"mean_spend":77004.31,"mean_roas":3.284},{"decile":3,"mean_spend":123544.53,"mean_roas":3.213},{"decile":4,"mean_spend":171097.54,"mean_roas":3.27},{"decile":5,"mean_spend":220031.35,"mean_roas":3.136},{"decile":6,"mean_spend":277456.99,"mean_roas":2.794},{"decile":7,"mean_spend":328818.32,"mean_roas":1.222},{"decile":8,"mean_spend":373604.44,"mean_roas":1.213},{"decile":9,"mean_spend":422931.09,"mean_roas":1.246},{"decile":10,"mean_spend":477177.61,"mean_roas":1.221}],"Organic Social":[{"decile":1,"mean_spend":29609.89,"mean_roas":4.659},{"decile":2,"mean_spend":75435.09,"mean_roas":4.25},{"decile":3,"mean_spend":127893.06,"mean_roas":4.672},{"decile":4,"mean_spend":180079.06,"mean_roas":4.27},{"decile":5,"mean_spend":231985.78,"mean_roas":4.311},{"decile":6,"mean_spend":284621.0,"mean_roas":4.29},{"decile":7,"mean_spend":332178.61,"mean_roas":4.245},{"decile":8,"mean_spend":378599.22,"mean_roas":4.073},{"decile":9,"mean_spend":431133.31,"mean_roas":4.291},{"decile":10,"mean_spend":477074.65,"mean_roas":4.251}],"SMS":[{"decile":1,"mean_spend":6596.83,"mean_roas":6.217},{"decile":2,"mean_spend":9718.7,"mean_roas":5.504},{"decile":3,"mean_spend":13269.97,"mean_roas":6.137},{"decile":4,"mean_spend":16889.09,"mean_roas":5.731},{"decile":5,"mean_spend":20731.67,"mean_roas":6.295},{"decile":6,"mean_spend":24169.8,"mean_roas":6.244},{"decile":7,"mean_spend":27830.2,"mean_roas":6.168},{"decile":8,"mean_spend":31543.04,"mean_roas":6.213},{"decile":9,"mean_spend":35223.63,"mean_roas":5.639},{"decile":10,"mean_spend":38589.15,"mean_roas":6.662}],"YouTube":[{"decile":1,"mean_spend":31280.27,"mean_roas":2.213},{"decile":2,"mean_spend":88118.69,"mean_roas":2.115},{"decile":3,"mean_spend":141088.03,"mean_roas":2.103},{"decile":4,"mean_spend":193193.16,"mean_roas":2.165},{"decile":5,"mean_spend":237042.67,"mean_roas":2.108},{"decile":6,"mean_spend":281581.5,"mean_roas":2.347},{"decile":7,"mean_spend":333469.79,"mean_roas":2.232},{"decile":8,"mean_spend":384148.15,"mean_roas":2.289},{"decile":9,"mean_spend":432749.88,"mean_roas":2.218},{"decile":10,"mean_spend":478373.24,"mean_roas":2.262}]},"weekday_weekend":{"Affiliate":{"weekday":5.484,"weekend":5.499},"Email":{"weekday":9.353,"weekend":9.127},"Google Display":{"weekday":1.381,"weekend":1.411},"Google Search":{"weekday":4.028,"weekend":2.485},"Influencer":{"weekday":3.564,"weekend":3.638},"Instagram Reels":{"weekday":3.314,"weekend":3.38},"Meta Ads":{"weekday":2.355,"weekend":2.475},"Organic Social":{"weekday":4.353,"weekend":4.278},"SMS":{"weekday":6.024,"weekend":6.228},"YouTube":{"weekday":2.197,"weekend":2.226}},"monthly":{"Affiliate":[5.119,4.98,4.985,4.978,5.076,3.678,3.397,4.954,5.026,4.914,9.68,9.113],"Email":[8.315,8.619,8.212,8.307,8.821,6.167,5.91,8.575,8.811,7.783,16.005,16.014],"Google Display":[1.306,1.292,1.269,1.2,1.261,0.834,0.833,1.295,1.315,1.228,2.409,2.444],"Google Search":[3.397,3.423,3.284,3.242,3.227,2.284,2.264,3.326,3.311,3.282,6.062,5.968],"Influencer":[3.334,3.434,3.342,3.231,3.258,2.299,2.192,3.108,3.226,3.14,6.168,6.322],"Instagram Reels":[3.08,2.981,3.012,3.07,2.996,2.139,2.145,3.121,2.972,3.145,5.816,5.532],"Meta Ads":[2.303,2.029,2.343,2.201,2.078,1.467,1.48,2.365,2.243,2.165,3.949,4.043],"Organic Social":[4.156,4.053,3.862,3.878,3.865,2.867,2.753,3.966,3.924,3.769,7.523,7.4],"SMS":[5.552,5.502,5.576,5.581,5.739,3.819,3.821,5.313,5.655,5.382,10.897,10.197],"YouTube":[2.046,2.01,2.063,1.996,2.042,1.386,1.441,1.985,2.046,1.947,3.676,3.833]},"yearly":{"Affiliate":{"2023":5.46,"2024":5.435,"2025":5.57},"Email":{"2023":9.165,"2024":9.371,"2025":9.328},"Google Display":{"2023":1.388,"2024":1.402,"2025":1.379},"Google Search":{"2023":3.61,"2024":3.593,"2025":3.558},"Influencer":{"2023":3.578,"2024":3.601,"2025":3.576},"Instagram Reels":{"2023":3.335,"2024":3.323,"2025":3.341},"Meta Ads":{"2023":2.293,"2024":2.467,"2025":2.407},"Organic Social":{"2023":4.251,"2024":4.448,"2025":4.295},"SMS":{"2023":6.017,"2024":6.204,"2025":6.025},"YouTube":{"2023":2.199,"2024":2.22,"2025":2.197}},"meta":{"total_rows":10950,"date_min":"2023-01-01","date_max":"2025-12-30","total_spend_3yr":2276042149.44,"total_revenue_3yr":7656127657.59},"fits":{"Affiliate":{"a":5.361882735087374,"b":5.066489624845855e-07},"Email":{"a":9.022428300846853,"b":6.311068407878209e-06},"Google Display":{"a":1.445605546197334,"b":-2.1730041378680166e-07},"Google Search":{"a":3.632636623588897,"b":-1.828336962407481e-07},"Influencer":{"a":3.6586969237216667,"b":-3.0495670635405857e-07},"Instagram Reels":{"a":3.342887486505045,"b":-4.02484337054631e-08},"Meta Ads":{"a":3.8905872634501497,"b":-6.001777319549379e-06},"Organic Social":{"a":4.530069631654886,"b":-7.787895283495122e-07},"SMS":{"a":5.848337573524482,"b":1.0414445139522423e-05},"YouTube":{"a":2.1287564028667205,"b":2.937004451565306e-07}},"channel_full":{"Affiliate":{"avg_roas":5.4882191780821925,"weighted_roas":5.5315,"std_roas":2.3447,"cv_roas":0.4272,"avg_cpa":264.4,"avg_cpc":3.97,"avg_ctr":3.151,"avg_conv_rate":0.983,"avg_aov":1259.83,"revenue_per_click":10.77,"revenue_per_conversion":1096.51,"total_spend":273045866.71,"total_revenue":1510363693.26,"total_conversions":1377423,"total_clicks":140184472,"total_new_customers":753966,"pct_of_total_spend":12.0,"pct_of_total_revenue":19.73,"spend_roas_corr":0.0315,"cac":362.15,"new_cust_per_1000":2.761,"new_customer_rate":54.737,"revenue_per_new_customer":2003.23,"pct_of_total_new_customers":19.4,"budget_efficiency_gap":7.73,"dow":{"Mon":{"roas":5.653,"cpa":254.57,"conv_rate":0.958,"ctr":3.322,"aov":1256.3},"Tue":{"roas":5.489,"cpa":276.91,"conv_rate":0.861,"ctr":3.316,"aov":1300.4},"Wed":{"roas":5.42,"cpa":259.84,"conv_rate":1.136,"ctr":2.885,"aov":1262.02},"Thu":{"roas":5.4,"cpa":269.71,"conv_rate":0.959,"ctr":3.11,"aov":1262.12},"Fri":{"roas":5.457,"cpa":260.2,"conv_rate":1.077,"ctr":3.049,"aov":1210.08},"Sat":{"roas":5.556,"cpa":251.17,"conv_rate":0.983,"ctr":3.262,"aov":1231.39},"Sun":{"roas":5.442,"cpa":278.32,"conv_rate":0.926,"ctr":3.114,"aov":1296.05}},"best_dow":"Mon","worst_dow":"Thu","monthly_roas":[5.119,4.98,4.985,4.978,5.076,3.678,3.397,4.954,5.026,4.914,9.68,9.113],"monthly_cpa":[257.02,276.46,261.44,253.0,255.17,366.16,396.2,254.6,275.5,278.93,150.58,147.15],"monthly_conv_rate":[0.946,0.937,0.889,0.919,0.943,0.547,0.608,1.047,0.846,0.898,1.48,1.673],"quarterly_roas":{"Q1":5.03,"Q2":4.583,"Q3":4.453,"Q4":7.879},"yearly_roas":{"2023":5.46,"2024":5.435,"2025":5.57},"total_impressions":4543113180,"avg_impressions_daily":4148961.8,"avg_cpm":60.1},"Email":{"avg_roas":9.288018264840183,"weighted_roas":9.3573,"std_roas":4.0123,"cv_roas":0.432,"avg_cpa":156.86,"avg_cpc":3.73,"avg_ctr":3.352,"avg_conv_rate":1.638,"avg_aov":1247.63,"revenue_per_click":17.58,"revenue_per_conversion":1073.33,"total_spend":46081105.73,"total_revenue":431194673.93,"total_conversions":401734,"total_clicks":24525898,"total_new_customers":221181,"pct_of_total_spend":2.02,"pct_of_total_revenue":5.63,"spend_roas_corr":0.0339,"cac":208.34,"new_cust_per_1000":4.8,"new_customer_rate":55.057,"revenue_per_new_customer":1949.51,"pct_of_total_new_customers":5.69,"budget_efficiency_gap":3.61,"dow":{"Mon":{"roas":9.538,"cpa":155.62,"conv_rate":1.645,"ctr":3.195,"aov":1265.44},"Tue":{"roas":9.606,"cpa":145.68,"conv_rate":1.751,"ctr":3.386,"aov":1198.04},"Wed":{"roas":9.179,"cpa":149.75,"conv_rate":1.625,"ctr":3.443,"aov":1179.98},"Thu":{"roas":9.085,"cpa":167.15,"conv_rate":1.593,"ctr":3.26,"aov":1310.91},"Fri":{"roas":9.352,"cpa":153.24,"conv_rate":1.723,"ctr":3.26,"aov":1232.8},"Sat":{"roas":9.321,"cpa":160.76,"conv_rate":1.604,"ctr":3.418,"aov":1282.25},"Sun":{"roas":8.933,"cpa":165.84,"conv_rate":1.524,"ctr":3.504,"aov":1264.08}},"best_dow":"Tue","worst_dow":"Sun","monthly_roas":[8.315,8.619,8.212,8.307,8.821,6.167,5.91,8.575,8.811,7.783,16.005,16.014],"monthly_cpa":[161.08,144.86,158.29,158.51,152.21,215.42,231.58,153.2,166.16,174.56,82.95,81.5],"monthly_conv_rate":[1.599,1.63,1.544,1.48,1.412,1.11,0.924,1.444,1.288,1.168,3.214,3.119],"quarterly_roas":{"Q1":8.375,"Q2":7.777,"Q3":7.754,"Q4":13.228},"yearly_roas":{"2023":9.165,"2024":9.371,"2025":9.328},"total_impressions":730499374,"avg_impressions_daily":667122.7,"avg_cpm":63.08},"Google Display":{"avg_roas":1.3897077625570777,"weighted_roas":1.3725,"std_roas":0.7051,"cv_roas":0.5074,"avg_cpa":1178.41,"avg_cpc":4.02,"avg_ctr":3.236,"avg_conv_rate":0.227,"avg_aov":1278.88,"revenue_per_click":2.54,"revenue_per_conversion":1118.4,"total_spend":281674903.51,"total_revenue":386596449.21,"total_conversions":345669,"total_clicks":152216616,"total_new_customers":190177,"pct_of_total_spend":12.38,"pct_of_total_revenue":5.05,"spend_roas_corr":-0.0441,"cac":1481.12,"new_cust_per_1000":0.675,"new_customer_rate":55.017,"revenue_per_new_customer":2032.82,"pct_of_total_new_customers":4.89,"budget_efficiency_gap":-7.33,"dow":{"Mon":{"roas":1.443,"cpa":1164.37,"conv_rate":0.272,"ctr":3.099,"aov":1242.53},"Tue":{"roas":1.337,"cpa":1285.42,"conv_rate":0.227,"ctr":2.959,"aov":1351.86},"Wed":{"roas":1.382,"cpa":1091.08,"conv_rate":0.232,"ctr":3.361,"aov":1239.46},"Thu":{"roas":1.399,"cpa":1164.96,"conv_rate":0.189,"ctr":3.574,"aov":1270.77},"Fri":{"roas":1.344,"cpa":1276.72,"conv_rate":0.21,"ctr":3.301,"aov":1293.84},"Sat":{"roas":1.441,"cpa":1161.12,"conv_rate":0.249,"ctr":3.224,"aov":1289.06},"Sun":{"roas":1.381,"cpa":1105.08,"conv_rate":0.22,"ctr":3.141,"aov":1264.53}},"best_dow":"Mon","worst_dow":"Tue","monthly_roas":[1.306,1.292,1.269,1.2,1.261,0.834,0.833,1.295,1.315,1.228,2.409,2.444],"monthly_cpa":[1182.04,1152.17,1105.23,1221.04,1179.39,1808.7,1836.64,1160.26,1108.31,1189.07,575.94,613.82],"monthly_conv_rate":[0.204,0.219,0.23,0.187,0.211,0.15,0.117,0.172,0.218,0.204,0.439,0.476],"quarterly_roas":{"Q1":1.289,"Q2":1.1,"Q3":1.146,"Q4":2.021},"yearly_roas":{"2023":1.388,"2024":1.402,"2025":1.379},"total_impressions":4695052427,"avg_impressions_daily":4287719.1,"avg_cpm":59.99},"Google Search":{"avg_roas":3.5867397260273974,"weighted_roas":3.5713,"std_roas":1.5729,"cv_roas":0.4385,"avg_cpa":424.7,"avg_cpc":3.9,"avg_ctr":3.323,"avg_conv_rate":0.618,"avg_aov":1275.14,"revenue_per_click":6.74,"revenue_per_conversion":1089.43,"total_spend":274878777.07,"total_revenue":981667239.15,"total_conversions":901083,"total_clicks":145718383,"total_new_customers":487485,"pct_of_total_spend":12.08,"pct_of_total_revenue":12.82,"spend_roas_corr":-0.017,"cac":563.87,"new_cust_per_1000":1.773,"new_customer_rate":54.1,"revenue_per_new_customer":2013.74,"pct_of_total_new_customers":12.54,"budget_efficiency_gap":0.74,"dow":{"Mon":{"roas":3.982,"cpa":365.24,"conv_rate":0.802,"ctr":3.261,"aov":1264.83},"Tue":{"roas":4.083,"cpa":352.84,"conv_rate":0.766,"ctr":3.266,"aov":1285.36},"Wed":{"roas":3.987,"cpa":356.67,"conv_rate":0.709,"ctr":3.357,"aov":1240.84},"Thu":{"roas":4.065,"cpa":357.23,"conv_rate":0.628,"ctr":3.314,"aov":1297.73},"Fri":{"roas":4.022,"cpa":349.84,"conv_rate":0.647,"ctr":3.506,"aov":1253.4},"Sat":{"roas":2.426,"cpa":597.61,"conv_rate":0.449,"ctr":3.238,"aov":1256.75},"Sun":{"roas":2.544,"cpa":593.26,"conv_rate":0.371,"ctr":3.318,"aov":1326.77}},"best_dow":"Tue","worst_dow":"Sat","monthly_roas":[3.397,3.423,3.284,3.242,3.227,2.284,2.264,3.326,3.311,3.282,6.062,5.968],"monthly_cpa":[406.73,429.87,448.07,442.17,398.26,608.27,632.5,445.83,421.44,414.01,218.48,228.86],"monthly_conv_rate":[0.573,0.489,0.576,0.487,0.557,0.373,0.402,0.611,0.589,0.589,1.425,1.007],"quarterly_roas":{"Q1":3.366,"Q2":2.921,"Q3":2.963,"Q4":5.091},"yearly_roas":{"2023":3.61,"2024":3.593,"2025":3.558},"total_impressions":4377991870,"avg_impressions_daily":3998166.1,"avg_cpm":62.79},"Influencer":{"avg_roas":3.584849315068493,"weighted_roas":3.5589,"std_roas":1.7359,"cv_roas":0.4842,"avg_cpa":428.7,"avg_cpc":4.35,"avg_ctr":3.188,"avg_conv_rate":0.628,"avg_aov":1250.68,"revenue_per_click":6.69,"revenue_per_conversion":1066.07,"total_spend":265162660.11,"total_revenue":943697155.02,"total_conversions":885208,"total_clicks":141034877,"total_new_customers":488647,"pct_of_total_spend":11.65,"pct_of_total_revenue":12.33,"spend_roas_corr":-0.0252,"cac":542.65,"new_cust_per_1000":1.843,"new_customer_rate":55.201,"revenue_per_new_customer":1931.25,"pct_of_total_new_customers":12.57,"budget_efficiency_gap":0.68,"dow":{"Mon":{"roas":3.519,"cpa":429.62,"conv_rate":0.67,"ctr":3.225,"aov":1230.74},"Tue":{"roas":3.602,"cpa":409.76,"conv_rate":0.71,"ctr":2.991,"aov":1196.11},"Wed":{"roas":3.608,"cpa":426.49,"conv_rate":0.707,"ctr":3.167,"aov":1284.8},"Thu":{"roas":3.416,"cpa":417.58,"conv_rate":0.534,"ctr":3.424,"aov":1212.51},"Fri":{"roas":3.673,"cpa":417.86,"conv_rate":0.572,"ctr":3.189,"aov":1262.97},"Sat":{"roas":3.62,"cpa":447.76,"conv_rate":0.618,"ctr":3.231,"aov":1276.62},"Sun":{"roas":3.655,"cpa":451.79,"conv_rate":0.608,"ctr":3.092,"aov":1291.26}},"best_dow":"Fri","worst_dow":"Thu","monthly_roas":[3.334,3.434,3.342,3.231,3.258,2.299,2.192,3.108,3.226,3.14,6.168,6.322],"monthly_cpa":[428.51,367.48,400.09,468.09,417.11,599.52,654.49,465.12,449.89,425.64,237.59,224.69],"monthly_conv_rate":[0.581,0.639,0.538,0.52,0.548,0.465,0.347,0.592,0.547,0.534,1.147,1.134],"quarterly_roas":{"Q1":3.368,"Q2":2.933,"Q3":2.838,"Q4":5.195},"yearly_roas":{"2023":3.578,"2024":3.601,"2025":3.576},"total_impressions":4334344450,"avg_impressions_daily":3958305.4,"avg_cpm":61.18},"Instagram Reels":{"avg_roas":3.3328584474885843,"weighted_roas":3.3296,"std_roas":1.5164,"cv_roas":0.455,"avg_cpa":446.44,"avg_cpc":3.72,"avg_ctr":3.321,"avg_conv_rate":0.57,"avg_aov":1235.64,"revenue_per_click":6.02,"revenue_per_conversion":1055.91,"total_spend":272850312.72,"total_revenue":908472077.73,"total_conversions":860371,"total_clicks":150925377,"total_new_customers":474354,"pct_of_total_spend":11.99,"pct_of_total_revenue":11.87,"spend_roas_corr":-0.0038,"cac":575.2,"new_cust_per_1000":1.739,"new_customer_rate":55.134,"revenue_per_new_customer":1915.18,"pct_of_total_new_customers":12.2,"budget_efficiency_gap":-0.12,"dow":{"Mon":{"roas":3.363,"cpa":460.85,"conv_rate":0.598,"ctr":3.526,"aov":1268.7},"Tue":{"roas":3.339,"cpa":454.33,"conv_rate":0.551,"ctr":3.364,"aov":1225.95},"Wed":{"roas":3.344,"cpa":437.07,"conv_rate":0.61,"ctr":3.264,"aov":1210.97},"Thu":{"roas":3.203,"cpa":454.79,"conv_rate":0.565,"ctr":3.197,"aov":1205.33},"Fri":{"roas":3.321,"cpa":445.38,"conv_rate":0.584,"ctr":3.249,"aov":1237.4},"Sat":{"roas":3.42,"cpa":438.77,"conv_rate":0.489,"ctr":3.439,"aov":1266.67},"Sun":{"roas":3.341,"cpa":433.84,"conv_rate":0.597,"ctr":3.208,"aov":1234.31}},"best_dow":"Sat","worst_dow":"Thu","monthly_roas":[3.08,2.981,3.012,3.07,2.996,2.139,2.145,3.121,2.972,3.145,5.816,5.532],"monthly_cpa":[419.29,443.31,463.94,420.32,461.79,667.54,653.25,438.37,469.34,432.59,247.38,238.29],"monthly_conv_rate":[0.501,0.462,0.483,0.556,0.453,0.356,0.374,0.569,0.439,0.584,1.136,1.047],"quarterly_roas":{"Q1":3.026,"Q2":2.738,"Q3":2.743,"Q4":4.818},"yearly_roas":{"2023":3.335,"2024":3.323,"2025":3.341},"total_impressions":4561878508,"avg_impressions_daily":4166099.1,"avg_cpm":59.81},"Meta Ads":{"avg_roas":2.389150684931507,"weighted_roas":1.8915,"std_roas":1.3851,"cv_roas":0.5798,"avg_cpa":739.8,"avg_cpc":4.01,"avg_ctr":3.185,"avg_conv_rate":0.32,"avg_aov":1258.59,"revenue_per_click":3.48,"revenue_per_conversion":1089.75,"total_spend":273931031.75,"total_revenue":518138842.87,"total_conversions":475467,"total_clicks":148799825,"total_new_customers":260218,"pct_of_total_spend":12.04,"pct_of_total_revenue":6.77,"spend_roas_corr":-0.6244,"cac":1052.7,"new_cust_per_1000":0.95,"new_customer_rate":54.729,"revenue_per_new_customer":1991.17,"pct_of_total_new_customers":6.7,"budget_efficiency_gap":-5.27,"dow":{"Mon":{"roas":2.21,"cpa":787.37,"conv_rate":0.287,"ctr":3.258,"aov":1272.02},"Tue":{"roas":2.446,"cpa":739.95,"conv_rate":0.322,"ctr":3.208,"aov":1271.77},"Wed":{"roas":2.482,"cpa":669.84,"conv_rate":0.316,"ctr":3.451,"aov":1212.17},"Thu":{"roas":2.236,"cpa":783.18,"conv_rate":0.298,"ctr":3.228,"aov":1243.82},"Fri":{"roas":2.4,"cpa":735.97,"conv_rate":0.324,"ctr":2.911,"aov":1246.16},"Sat":{"roas":2.467,"cpa":700.94,"conv_rate":0.343,"ctr":3.15,"aov":1254.68},"Sun":{"roas":2.484,"cpa":760.9,"conv_rate":0.351,"ctr":3.089,"aov":1309.04}},"best_dow":"Sun","worst_dow":"Mon","monthly_roas":[2.303,2.029,2.343,2.201,2.078,1.467,1.48,2.365,2.243,2.165,3.949,4.043],"monthly_cpa":[729.76,806.3,646.07,730.82,839.15,1064.78,1076.44,701.39,681.19,825.18,400.01,375.64],"monthly_conv_rate":[0.255,0.298,0.33,0.294,0.316,0.256,0.166,0.344,0.339,0.257,0.479,0.522],"quarterly_roas":{"Q1":2.23,"Q2":1.917,"Q3":2.027,"Q4":3.377},"yearly_roas":{"2023":2.293,"2024":2.467,"2025":2.407},"total_impressions":4590401795,"avg_impressions_daily":4192147.8,"avg_cpm":59.67},"Organic Social":{"avg_roas":4.331607305936073,"weighted_roas":4.2673,"std_roas":1.9941,"cv_roas":0.4604,"avg_cpa":341.74,"avg_cpc":4.14,"avg_ctr":3.207,"avg_conv_rate":0.777,"avg_aov":1231.65,"revenue_per_click":8.24,"revenue_per_conversion":1061.22,"total_spend":279043616.73,"total_revenue":1190764704.28,"total_conversions":1122068,"total_clicks":144480587,"total_new_customers":606257,"pct_of_total_spend":12.26,"pct_of_total_revenue":15.55,"spend_roas_corr":-0.0566,"cac":460.27,"new_cust_per_1000":2.173,"new_customer_rate":54.03,"revenue_per_new_customer":1964.13,"pct_of_total_new_customers":15.6,"budget_efficiency_gap":3.29,"dow":{"Mon":{"roas":4.363,"cpa":349.74,"conv_rate":0.83,"ctr":3.054,"aov":1270.76},"Tue":{"roas":4.533,"cpa":328.45,"conv_rate":0.791,"ctr":3.173,"aov":1227.52},"Wed":{"roas":4.376,"cpa":333.51,"conv_rate":0.709,"ctr":3.445,"aov":1217.77},"Thu":{"roas":4.216,"cpa":354.28,"conv_rate":0.797,"ctr":3.257,"aov":1250.09},"Fri":{"roas":4.275,"cpa":330.06,"conv_rate":0.829,"ctr":3.275,"aov":1162.09},"Sat":{"roas":4.249,"cpa":354.15,"conv_rate":0.688,"ctr":3.214,"aov":1258.37},"Sun":{"roas":4.307,"cpa":342.03,"conv_rate":0.81,"ctr":3.033,"aov":1234.71}},"best_dow":"Tue","worst_dow":"Thu","monthly_roas":[4.156,4.053,3.862,3.878,3.865,2.867,2.753,3.966,3.924,3.769,7.523,7.4],"monthly_cpa":[310.24,342.58,339.96,374.43,357.17,435.48,537.95,335.22,355.36,347.93,183.43,178.88],"monthly_conv_rate":[0.749,0.784,0.731,0.668,0.657,0.512,0.514,0.762,0.687,0.704,1.539,1.061],"quarterly_roas":{"Q1":4.023,"Q2":3.54,"Q3":3.544,"Q4":6.212},"yearly_roas":{"2023":4.251,"2024":4.448,"2025":4.295},"total_impressions":4551068824,"avg_impressions_daily":4156227.2,"avg_cpm":61.31},"SMS":{"avg_roas":6.082191780821918,"weighted_roas":6.1323,"std_roas":2.722,"cv_roas":0.4475,"avg_cpa":249.36,"avg_cpc":3.64,"avg_ctr":3.307,"avg_conv_rate":1.04,"avg_aov":1265.89,"revenue_per_click":11.31,"revenue_per_conversion":1087.35,"total_spend":24587998.07,"total_revenue":150781852.2,"total_conversions":138669,"total_clicks":13328362,"total_new_customers":76222,"pct_of_total_spend":1.08,"pct_of_total_revenue":1.97,"spend_roas_corr":0.0398,"cac":322.58,"new_cust_per_1000":3.1,"new_customer_rate":54.967,"revenue_per_new_customer":1978.19,"pct_of_total_new_customers":1.96,"budget_efficiency_gap":0.89,"dow":{"Mon":{"roas":6.168,"cpa":243.2,"conv_rate":1.064,"ctr":3.164,"aov":1295.36},"Tue":{"roas":6.117,"cpa":245.71,"conv_rate":1.165,"ctr":3.118,"aov":1214.87},"Wed":{"roas":5.948,"cpa":256.84,"conv_rate":1.023,"ctr":3.218,"aov":1298.22},"Thu":{"roas":5.94,"cpa":252.31,"conv_rate":1.023,"ctr":3.357,"aov":1265.5},"Fri":{"roas":5.944,"cpa":262.6,"conv_rate":0.862,"ctr":3.333,"aov":1308.31},"Sat":{"roas":6.302,"cpa":247.72,"conv_rate":1.19,"ctr":3.461,"aov":1272.09},"Sun":{"roas":6.154,"cpa":237.27,"conv_rate":1.001,"ctr":3.498,"aov":1207.41}},"best_dow":"Sat","worst_dow":"Thu","monthly_roas":[5.552,5.502,5.576,5.581,5.739,3.819,3.821,5.313,5.655,5.382,10.897,10.197],"monthly_cpa":[222.33,251.04,253.75,251.9,237.19,368.52,376.41,267.57,244.31,260.46,121.06,136.33],"monthly_conv_rate":[0.954,0.94,0.888,1.204,1.035,0.601,0.548,0.825,1.15,0.906,1.764,1.631],"quarterly_roas":{"Q1":5.545,"Q2":5.054,"Q3":4.922,"Q4":8.798},"yearly_roas":{"2023":6.017,"2024":6.204,"2025":6.025},"total_impressions":402447235,"avg_impressions_daily":367531.7,"avg_cpm":61.1},"YouTube":{"avg_roas":2.2051415525114155,"weighted_roas":2.2278,"std_roas":0.9898,"cv_roas":0.4489,"avg_cpa":689.9,"avg_cpc":3.81,"avg_ctr":3.297,"avg_conv_rate":0.39,"avg_aov":1256.74,"revenue_per_click":4.14,"revenue_per_conversion":1062.17,"total_spend":284785877.04,"total_revenue":634450969.94,"total_conversions":597317,"total_clicks":153348588,"total_new_customers":328151,"pct_of_total_spend":12.51,"pct_of_total_revenue":8.29,"spend_roas_corr":0.0422,"cac":867.85,"new_cust_per_1000":1.152,"new_customer_rate":54.937,"revenue_per_new_customer":1933.41,"pct_of_total_new_customers":8.44,"budget_efficiency_gap":-4.22,"dow":{"Mon":{"roas":2.202,"cpa":699.95,"conv_rate":0.403,"ctr":3.294,"aov":1238.06},"Tue":{"roas":2.239,"cpa":685.66,"conv_rate":0.38,"ctr":3.452,"aov":1271.5},"Wed":{"roas":2.161,"cpa":693.1,"conv_rate":0.377,"ctr":3.28,"aov":1229.58},"Thu":{"roas":2.224,"cpa":687.24,"conv_rate":0.375,"ctr":3.176,"aov":1275.51},"Fri":{"roas":2.158,"cpa":643.45,"conv_rate":0.426,"ctr":3.196,"aov":1170.86},"Sat":{"roas":2.222,"cpa":677.58,"conv_rate":0.395,"ctr":3.302,"aov":1282.57},"Sun":{"roas":2.23,"cpa":741.92,"conv_rate":0.374,"ctr":3.379,"aov":1328.66}},"best_dow":"Tue","worst_dow":"Fri","monthly_roas":[2.046,2.01,2.063,1.996,2.042,1.386,1.441,1.985,2.046,1.947,3.676,3.833],"monthly_cpa":[682.13,698.27,631.26,705.45,680.96,1078.3,982.73,666.3,695.8,743.93,366.4,347.07],"monthly_conv_rate":[0.347,0.329,0.416,0.4,0.334,0.199,0.261,0.395,0.283,0.362,0.654,0.695],"quarterly_roas":{"Q1":2.041,"Q2":1.81,"Q3":1.822,"Q4":3.144},"yearly_roas":{"2023":2.199,"2024":2.22,"2025":2.197},"total_impressions":4650863114,"avg_impressions_daily":4247363.6,"avg_cpm":61.23}}};

const COLORS = {
  'Email':'#C9A15C','SMS':'#D9BE8C','Affiliate':'#4FA89B','Organic Social':'#7FC4B8',
  'Google Search':'#6E8FB0','Influencer':'#9C8FCE','Instagram Reels':'#C77FA6',
  'Meta Ads':'#C1554B','YouTube':'#D98A6E','Google Display':'#7A828C'
};
const CH = DATA.channels;
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DOW = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const TOTAL_BUDGET = 5000000;
const CAPS = {'Email':1500000,'SMS':1200000};
const inr = (v) => '₹' + Math.round(v).toLocaleString('en-IN');
const inr2 = (v) => '₹' + v.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
const inrSigned = (v) => (v>=0?'+':'−') + '₹' + Math.round(Math.abs(v)).toLocaleString('en-IN');
const fmtBig = (v) => v>=1e9 ? (v/1e9).toFixed(2)+'B' : v>=1e6 ? (v/1e6).toFixed(1)+'M' : v.toLocaleString('en-IN');

Chart.defaults.font.family = "'IBM Plex Sans', sans-serif";
Chart.defaults.color = '#9BA3AC';
Chart.defaults.borderColor = '#232a32';
Chart.defaults.elements.point.hitRadius = 14;

/* ================= TAB SWITCHING ================= */
document.querySelectorAll('.tabbtn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tabbtn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById('panel-'+btn.dataset.tab);
    panel.classList.add('active');
    if (btn.dataset.tab === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
document.querySelectorAll('.subtabbtn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.subtabbtn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.subpanel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('sub-'+btn.dataset.sub).classList.add('active');
  });
});

/* ================= Hero stats ================= */
document.getElementById('heroStats').innerHTML = `
  <div class="hstat"><div class="n">${DATA.meta.total_rows.toLocaleString('en-IN')}</div><div class="l">daily records</div></div>
  <div class="hstat"><div class="n">10</div><div class="l">channels tracked</div></div>
  <div class="hstat"><div class="n">₹${(DATA.meta.total_spend_3yr/10000000).toFixed(1)}Cr</div><div class="l">total 3yr spend</div></div>
  <div class="hstat"><div class="n">₹${(DATA.meta.total_revenue_3yr/10000000).toFixed(1)}Cr</div><div class="l">total 3yr revenue</div></div>
`;

/* ================= 01 ROAS bar chart ================= */
const sortedByRoas = [...CH].sort((a,b)=>DATA.channel_stats[b].avg_roas - DATA.channel_stats[a].avg_roas);
new Chart(document.getElementById('roasChart'), {
  type:'bar',
  data:{
    labels: sortedByRoas,
    datasets:[{
      label:'Avg ROAS',
      data: sortedByRoas.map(c=>DATA.channel_stats[c].avg_roas),
      backgroundColor: sortedByRoas.map(c=>COLORS[c]),
      borderRadius:4, maxBarThickness:26
    }]
  },
  options:{
    indexAxis:'y', responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{display:false}, tooltip:{callbacks:{label:(ctx)=>` ${ctx.parsed.x.toFixed(2)}x avg ROAS`}} },
    scales:{
      x:{ grid:{color:'#1e242b'}, ticks:{callback:(v)=>v+'x'} },
      y:{ grid:{display:false} }
    }
  }
});
document.getElementById('roasTable').innerHTML = sortedByRoas.map(c=>{
  const s = DATA.channel_stats[c];
  return `<tr><td class="name"><span class="swatch" style="background:${COLORS[c]}"></span>${c}</td>
    <td class="num">${s.avg_roas.toFixed(2)}x</td>
    <td class="num">${(s.cv_roas*100).toFixed(0)}% CV</td></tr>`;
}).join('');

/* ================= 02 Diminishing returns ================= */
new Chart(document.getElementById('diminishChart'), {
  type:'line',
  data:{
    labels:[1,2,3,4,5,6,7,8,9,10],
    datasets: CH.map(c=>({
      label:c,
      data: DATA.diminishing[c].map(d=>d.mean_roas),
      borderColor: COLORS[c],
      backgroundColor: COLORS[c],
      borderWidth: c==='Meta Ads' ? 3 : 1.5,
      pointRadius: c==='Meta Ads' ? 3 : 0,
      pointHoverRadius: 5,
      tension:0.25,
      order: c==='Meta Ads' ? 0 : 1
    }))
  },
  options:{
    responsive:true, maintainAspectRatio:false,
    interaction:{ mode:'nearest', intersect:false, axis:'xy' },
    plugins:{ legend:{display:false},
      tooltip:{ callbacks:{
        title:(items)=>'Spend decile '+items[0].label+' (lowest → highest)',
        label:(ctx)=>` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}x ROAS`
      } } },
    scales:{
      x:{ title:{display:true, text:'Daily spend decile (1 = cheapest days, 10 = most expensive days)', color:'#5E6670', font:{size:11}}, grid:{display:false} },
      y:{ title:{display:true, text:'Avg ROAS', color:'#5E6670', font:{size:11}}, grid:{color:'#1e242b'} }
    }
  }
});

/* ================= 03 Weekday vs weekend ================= */
const wwSorted = [...CH].sort((a,b)=>DATA.channel_stats[b].avg_roas - DATA.channel_stats[a].avg_roas);
new Chart(document.getElementById('weekendChart'), {
  type:'bar',
  data:{
    labels: wwSorted,
    datasets:[
      {label:'Weekday', data: wwSorted.map(c=>DATA.weekday_weekend[c].weekday), backgroundColor:'#4FA89B', borderRadius:3, maxBarThickness:16},
      {label:'Weekend', data: wwSorted.map(c=>DATA.weekday_weekend[c].weekend), backgroundColor:'#C9A15C', borderRadius:3, maxBarThickness:16}
    ]
  },
  options:{
    responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{ position:'top', align:'end', labels:{boxWidth:10, boxHeight:10, font:{size:11.5}} },
      tooltip:{ callbacks:{ label:(ctx)=>` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}x` } } },
    scales:{ x:{ grid:{display:false}, ticks:{maxRotation:55, minRotation:55, font:{size:10.5}} }, y:{ grid:{color:'#1e242b'}, ticks:{callback:(v)=>v+'x'} } }
  }
});

/* ================= 03b Monthly seasonality ================= */
new Chart(document.getElementById('monthChart'), {
  type:'line',
  data:{
    labels: MONTHS,
    datasets: CH.map(c=>({
      label:c, data: DATA.monthly[c], borderColor:COLORS[c], backgroundColor:COLORS[c],
      borderWidth:1.5, pointRadius:0, pointHoverRadius:5, tension:0.3
    }))
  },
  options:{
    responsive:true, maintainAspectRatio:false,
    interaction:{ mode:'nearest', intersect:false, axis:'xy' },
    plugins:{ legend:{display:false},
      tooltip:{ callbacks:{ label:(ctx)=>` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}x` } } },
    scales:{ x:{ grid:{display:false} }, y:{ grid:{color:'#1e242b'}, ticks:{callback:(v)=>v+'x'} } }
  }
});

/* ================= 04 Yearly trend ================= */
new Chart(document.getElementById('trendChart'), {
  type:'line',
  data:{
    labels:['2023','2024','2025'],
    datasets: CH.map(c=>({
      label:c, data:[DATA.yearly[c]['2023'],DATA.yearly[c]['2024'],DATA.yearly[c]['2025']],
      borderColor:COLORS[c], backgroundColor:COLORS[c], borderWidth:2, pointRadius:3, pointHoverRadius:6, tension:0.15
    }))
  },
  options:{
    responsive:true, maintainAspectRatio:false,
    interaction:{ mode:'nearest', intersect:false, axis:'xy' },
    plugins:{ legend:{ position:'top', align:'end', labels:{boxWidth:10, boxHeight:10, font:{size:10.5}} },
      tooltip:{ callbacks:{ label:(ctx)=>` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}x` } } },
    scales:{ x:{ grid:{display:false} }, y:{ grid:{color:'#1e242b'}, ticks:{callback:(v)=>v+'x'} } }
  }
});

/* ================= TAB 2: CHANNEL DEEP-DIVE ================= */
document.getElementById('channelPills').innerHTML = CH.map(c=>
  `<button class="pill" data-ch="${c}"><span class="dot" style="background:${COLORS[c]}"></span>${c}</button>`
).join('');

function median(arr){ const s=[...arr].sort((a,b)=>a-b); const m=Math.floor(s.length/2); return s.length%2 ? s[m] : (s[m-1]+s[m])/2; }
const MED = {
  impressions: median(CH.map(c=>DATA.channel_full[c].total_impressions)),
  ctr: median(CH.map(c=>DATA.channel_full[c].avg_ctr)),
  cpc: median(CH.map(c=>DATA.channel_full[c].avg_cpc)),
  convRate: median(CH.map(c=>DATA.channel_full[c].avg_conv_rate)),
  cpa: median(CH.map(c=>DATA.channel_full[c].avg_cpa)),
  aov: median(CH.map(c=>DATA.channel_full[c].avg_aov)),
  roas: median(CH.map(c=>DATA.channel_full[c].avg_roas)),
  cpm: median(CH.map(c=>DATA.channel_full[c].avg_cpm)),
};
const cvSorted = [...CH].sort((a,b)=>DATA.channel_full[a].cv_roas - DATA.channel_full[b].cv_roas);
const cvTercile = Math.ceil(CH.length/3);
const volLabel = {}; cvSorted.forEach((c,i)=>{ volLabel[c] = i < cvTercile ? 'low' : (i < cvTercile*2 ? 'mod' : 'high'); });
const medianNewCustRate = median(CH.map(c=>DATA.channel_full[c].new_customer_rate));

function tagHtml(value, med, higherBetter, unit, decimals){
  const above = value > med;
  const good = higherBetter ? above : !above;
  const cls = good ? 'pos' : 'neg';
  const dir = above ? 'Above' : 'Below';
  return `<span class="tag ${cls}">${dir} median</span>`;
}

let chCurveChart, chDowChart, chMonthChart, chFunnelChart;
let selectedChannel = 'Email';

function renderChannelDetail(c){
  selectedChannel = c;
  document.querySelectorAll('#channelPills .pill').forEach(p=>p.classList.toggle('active', p.dataset.ch===c));
  const s = DATA.channel_full[c];
  const col = COLORS[c];

  /* ---- funnel steps ---- */
  const impressionsNote = (c==='Email' || c==='SMS')
    ? `<div class="fnote">Reflects messages sent to an owned list, not purchased ad impressions — not directly comparable to the paid channels above.</div>` : '';
  const aovNote = `<div class="fnote">AOV sits within a ~4% band across all 10 channels (₹1,232–₹1,279) — it's a weak differentiator in this dataset; treat the tag as marginal.</div>`;

  document.getElementById('funnelSteps').innerHTML = `
    <div class="funnel-step">
      <div><div class="fname">Impressions</div><div class="fq">Are people noticing the ad?</div>${impressionsNote}</div>
      <div></div>
      <div><div class="fval">${fmtBig(s.total_impressions)}</div>${tagHtml(s.total_impressions, MED.impressions, true)}</div>
    </div>
    <div class="funnel-arrow">↓</div>
    <div class="funnel-step">
      <div><div class="fname">CTR</div><div class="fq">Are they interested enough to click?</div></div>
      <div></div>
      <div><div class="fval">${s.avg_ctr.toFixed(2)}%</div>${tagHtml(s.avg_ctr, MED.ctr, true)}</div>
    </div>
    <div class="funnel-arrow">↓</div>
    <div class="funnel-step">
      <div><div class="fname">CPC</div><div class="fq">How expensive is that interest?</div></div>
      <div></div>
      <div><div class="fval">₹${s.avg_cpc.toFixed(2)}</div>${tagHtml(s.avg_cpc, MED.cpc, false)}</div>
    </div>
    <div class="funnel-arrow">↓</div>
    <div class="funnel-step">
      <div><div class="fname">Conversion Rate</div><div class="fq">Do those visitors actually buy?</div></div>
      <div></div>
      <div><div class="fval">${s.avg_conv_rate.toFixed(2)}%</div>${tagHtml(s.avg_conv_rate, MED.convRate, true)}</div>
    </div>
    <div class="funnel-arrow">↓</div>
    <div class="funnel-step">
      <div><div class="fname">CPA</div><div class="fq">How expensive is each customer/conversion?</div></div>
      <div></div>
      <div><div class="fval">₹${s.avg_cpa.toFixed(0)}</div>${tagHtml(s.avg_cpa, MED.cpa, false)}</div>
    </div>
    <div class="funnel-arrow">↓</div>
    <div class="funnel-step">
      <div><div class="fname">AOV</div><div class="fq">How valuable is each conversion?</div>${aovNote}</div>
      <div></div>
      <div><div class="fval">₹${s.avg_aov.toFixed(0)}</div>${tagHtml(s.avg_aov, MED.aov, true)}</div>
    </div>
    <div class="funnel-arrow">↓</div>
    <div class="funnel-step">
      <div><div class="fname">Revenue / ROAS</div><div class="fq">The bottom line this channel delivers</div></div>
      <div></div>
      <div><div class="fval">${s.avg_roas.toFixed(2)}x</div>${tagHtml(s.avg_roas, MED.roas, true)}</div>
    </div>
  `;

  /* ---- funnel drop-off chart ---- */
  if(chFunnelChart) chFunnelChart.destroy();
  const funnelVals = [s.total_impressions, s.total_clicks, s.total_conversions, s.total_new_customers];
  const funnelLabels = ['Impressions','Clicks','Conversions','New customers'];
  chFunnelChart = new Chart(document.getElementById('ch-funnelChart'), {
    type:'bar',
    data:{ labels: funnelLabels, datasets:[{ data: funnelVals, backgroundColor:[col+'55',col+'88',col+'BB',col], borderRadius:4, maxBarThickness:46 }] },
    options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},
        tooltip:{ callbacks:{ label:(ctx)=> ' '+ctx.parsed.x.toLocaleString('en-IN') } } },
      scales:{ x:{ type:'logarithmic', grid:{color:'#1e242b'}, ticks:{callback:(v)=> [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,10000000000].includes(v) ? fmtBig(v) : '' } }, y:{ grid:{display:false} } } }
  });

  /* ---- diagnosis ---- */
  const hi = {
    impressions: s.total_impressions > MED.impressions,
    ctr: s.avg_ctr > MED.ctr,
    cpc: s.avg_cpc > MED.cpc,
    convRate: s.avg_conv_rate > MED.convRate,
    cpa: s.avg_cpa > MED.cpa,
    aov: s.avg_aov > MED.aov,
    roas: s.avg_roas > MED.roas,
  };
  const patterns = [];
  if(hi.impressions && !hi.ctr) patterns.push({
    tag:'Pattern · Reach vs engagement', title:'High impressions, low CTR — an attention/creative problem',
    body:`${c} is reaching a lot of people (${fmtBig(s.total_impressions)} impressions, above the 10-channel median) but comparatively few are clicking (CTR ${s.avg_ctr.toFixed(2)}%, below median). Worth checking CPM (₹${s.avg_cpm.toFixed(2)}) alongside CTR and impressions — the channel has strong reach but weak engagement.`
  });
  if(hi.ctr && hi.cpc) patterns.push({
    tag:'Pattern · Expensive interest', title:'High CTR, high CPC — interest is expensive',
    body:`${c} pulls an above-median CTR (${s.avg_ctr.toFixed(2)}%) alongside an above-median CPC (₹${s.avg_cpc.toFixed(2)}). People want to click, but you're paying more to get them there — the channel generates strong interest, but traffic is expensive.`
  });
  if(hi.ctr && !hi.convRate) patterns.push({
    tag:'Pattern · Post-click drop-off', title:'High CTR, low conversion rate — clicks that don\u2019t convert',
    body:`${c} has an above-median CTR (${s.avg_ctr.toFixed(2)}%) but a below-median conversion rate (${s.avg_conv_rate.toFixed(2)}%) and CPA of ₹${s.avg_cpa.toFixed(0)}. People click, but don't buy — the channel successfully generates interest, but post-click conversion is weak. Could point to landing page, targeting quality, offer, or a mismatch between ad and destination.`
  });
  if(!hi.ctr && hi.convRate) patterns.push({
    tag:'Pattern · Quality over quantity', title:'Low CTR, high conversion rate — few clicks, highly qualified',
    body:`${c} has a below-median CTR (${s.avg_ctr.toFixed(2)}%) but an above-median conversion rate (${s.avg_conv_rate.toFixed(2)}%). Few people click, but the ones who do are highly qualified. The opportunity here is improving creative or targeting to get more people clicking without diluting that traffic quality.`
  });
  if(hi.convRate && hi.aov) patterns.push({
    tag:'Pattern · Scale candidate', title:'High conversion rate + high AOV — a very attractive channel',
    body:`${c} combines an above-median conversion rate (${s.avg_conv_rate.toFixed(2)}%) with above-median AOV (₹${s.avg_aov.toFixed(0)}) — qualified traffic, strong conversion, and valuable purchases together. This is exactly the type of channel worth investigating for scaling.`
  });
  if(hi.roas && !hi.aov) patterns.push({
    tag:'Pattern · Cheap but small tickets', title:'High ROAS, low AOV — efficient, but each sale is small',
    body:`${c}'s ROAS (${s.avg_roas.toFixed(2)}x) is above median while its AOV (₹${s.avg_aov.toFixed(0)}) is below median. Efficiency here may come from cheap acquisition rather than valuable transactions — compare AOV against CPA (₹${s.avg_cpa.toFixed(0)}) directly. A 5x revenue/CPA relationship means something different at ₹500 AOV / ₹100 CPA than at ₹5,000 AOV / ₹1,000 CPA, even with an identical ratio.`
  });
  if(hi.aov && hi.cpa) patterns.push({
    tag:'Pattern · Don\u2019t judge in isolation', title:'High AOV + high CPA — not automatically bad',
    body:`${c} pairs above-median AOV (₹${s.avg_aov.toFixed(0)}) with above-median CPA (₹${s.avg_cpa.toFixed(0)}). That's not automatically bad — the real question is how much revenue each ₹1 of acquisition cost generates, which is exactly what ROAS (${s.avg_roas.toFixed(2)}x) answers. CPA and AOV explain why you got that ROAS; ROAS is the outcome that actually matters.`
  });

  document.getElementById('diagCards').innerHTML = patterns.length ? patterns.map(p=>
    `<div class="diag-card"><span class="match-tag">${p.tag}</span><h4>${p.title}</h4><p>${p.body}</p></div>`
  ).join('') : `<div class="diag-card"><span class="match-tag">No strong pattern match</span><h4>${c} sits close to the median across the board</h4><p>None of the seven diagnostic patterns cleanly apply — this channel's funnel metrics don't show a sharp High/Low split against the other nine channels.</p></div>`;

  /* ---- trends sub-tab ---- */
  const deciles = DATA.diminishing[c];
  if(chCurveChart) chCurveChart.destroy();
  chCurveChart = new Chart(document.getElementById('ch-curveChart'), {
    type:'line',
    data:{ labels: deciles.map(d=>d.decile), datasets:[{ label:c, data: deciles.map(d=>d.mean_roas), borderColor:col, backgroundColor:col, borderWidth:2.5, pointRadius:3, pointHoverRadius:6, tension:0.25 }] },
    options:{ responsive:true, maintainAspectRatio:false, interaction:{mode:'nearest', intersect:false},
      plugins:{legend:{display:false}, tooltip:{callbacks:{label:(ctx)=>` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}x`}}},
      scales:{ x:{ title:{display:true,text:'Spend decile',color:'#5E6670',font:{size:10.5}}, grid:{display:false} }, y:{ grid:{color:'#1e242b'}, ticks:{callback:(v)=>v+'x'} } } }
  });
  const corr = s.spend_roas_corr;
  const corrTag = Math.abs(corr) > 0.3 ? `<b>Real diminishing-returns signal</b> (corr ${corr.toFixed(2)}) — ROAS meaningfully drops as daily spend rises.` : `Correlation of ${corr.toFixed(2)} — statistically flat. No real evidence that spending more per day hurts this channel's ROAS.`;
  document.getElementById('ch-curveInsight').innerHTML = corrTag;
  document.getElementById('ch-curveInsight').className = 'insight' + (Math.abs(corr)>0.3 ? ' warn' : '');

  const spendPct = s.pct_of_total_spend, revPct = s.pct_of_total_revenue;
  document.getElementById('ch-effBars').innerHTML = `
    <div style="margin-bottom:12px;"><div style="display:flex; justify-content:space-between; font-size:12px; color:var(--ink-dim); margin-bottom:5px;"><span>Share of total spend</span><span>${spendPct.toFixed(1)}%</span></div>
      <div class="gauge-track"><div style="height:100%; width:${Math.min(spendPct*3,100)}%; background:var(--ink-faint); border-radius:5px;"></div></div></div>
    <div><div style="display:flex; justify-content:space-between; font-size:12px; color:var(--ink-dim); margin-bottom:5px;"><span>Share of total revenue</span><span>${revPct.toFixed(1)}%</span></div>
      <div class="gauge-track"><div style="height:100%; width:${Math.min(revPct*3,100)}%; background:${col}; border-radius:5px;"></div></div></div>
  `;
  const gap = s.budget_efficiency_gap;
  const effText = gap > 1.5 ? `<b>Underallocated</b> — generates ${revPct.toFixed(1)}% of revenue from just ${spendPct.toFixed(1)}% of spend. A candidate for more budget.` :
    (gap < -1.5 ? `<b>Overallocated</b> — takes ${spendPct.toFixed(1)}% of spend but returns only ${revPct.toFixed(1)}% of revenue.` : `Roughly balanced — spend share and revenue share are close.`);
  document.getElementById('ch-effInsight').innerHTML = effText;

  const dowVals = DOW.map(d=>s.dow[d].roas);
  if(chDowChart) chDowChart.destroy();
  chDowChart = new Chart(document.getElementById('ch-dowChart'), {
    type:'bar',
    data:{ labels: DOW, datasets:[{ label:c, data: dowVals, backgroundColor: DOW.map(d=> d===s.best_dow ? col : (d===s.worst_dow ? '#3a4048' : col+'55')), borderRadius:4, maxBarThickness:34 }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}, tooltip:{callbacks:{label:(ctx)=>` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}x ROAS`}}},
      scales:{ x:{grid:{display:false}}, y:{ grid:{color:'#1e242b'}, ticks:{callback:(v)=>v+'x'} } } }
  });
  document.getElementById('ch-dowTable').innerHTML = `<tr><th>Day</th><th class="num">ROAS</th><th class="num">CPA</th><th class="num">Conv%</th><th class="num">AOV</th></tr>` +
    DOW.map(d=>{ const dd=s.dow[d]; return `<tr><td class="name">${d}</td><td class="num">${dd.roas.toFixed(2)}x</td><td class="num">₹${dd.cpa.toFixed(0)}</td><td class="num">${dd.conv_rate.toFixed(2)}%</td><td class="num">₹${dd.aov.toFixed(0)}</td></tr>`; }).join('');
  document.getElementById('ch-dowInsight').innerHTML = `Strongest on <b>${s.best_dow}</b> (${s.dow[s.best_dow].roas.toFixed(2)}x), weakest on <b>${s.worst_dow}</b> (${s.dow[s.worst_dow].roas.toFixed(2)}x).`;

  if(chMonthChart) chMonthChart.destroy();
  chMonthChart = new Chart(document.getElementById('ch-monthChart'), {
    type:'line',
    data:{ labels: MONTHS, datasets:[{ label:c, data: s.monthly_roas, borderColor:col, backgroundColor:col, borderWidth:2.5, pointRadius:2, pointHoverRadius:6, tension:0.3 }] },
    options:{ responsive:true, maintainAspectRatio:false, interaction:{mode:'nearest', intersect:false},
      plugins:{legend:{display:false}, tooltip:{callbacks:{label:(ctx)=>` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}x`}}},
      scales:{ x:{grid:{display:false}, ticks:{font:{size:9.5}}}, y:{ grid:{color:'#1e242b'}, ticks:{callback:(v)=>v+'x'} } } }
  });
  document.getElementById('ch-quarterTiles').innerHTML = Object.entries(s.quarterly_roas).map(([q,v])=>
    `<div class="stile" style="flex:1;"><div class="l">${q}</div><div class="v">${v.toFixed(2)}x</div></div>`
  ).join('') + `<div class="stile" style="flex:1;"><div class="l">2023 → 2025</div><div class="v" style="font-size:14px;">${s.yearly_roas['2023'].toFixed(1)}x → ${s.yearly_roas['2025'].toFixed(1)}x</div></div>`;

  /* ---- customer quality sub-tab ---- */
  document.getElementById('ch-custTiles').innerHTML = `
    <div class="stile"><div class="l">Customer acquisition cost</div><div class="v">₹${s.cac.toFixed(0)}</div></div>
    <div class="stile"><div class="l">New customers / ₹1,000</div><div class="v">${s.new_cust_per_1000.toFixed(2)}</div></div>
    <div class="stile"><div class="l">New customer rate</div><div class="v">${s.new_customer_rate.toFixed(1)}<small> % of conversions</small></div></div>
    <div class="stile"><div class="l">Revenue / new customer</div><div class="v">₹${s.revenue_per_new_customer.toFixed(0)}</div></div>
  `;
  const custTag = s.new_customer_rate >= medianNewCustRate
    ? `<b>${c}</b> skews toward new-customer acquisition — ${s.new_customer_rate.toFixed(1)}% of its conversions are new customers, above the 10-channel median of ${medianNewCustRate.toFixed(1)}%. Its ROAS is doing real acquisition work, not just harvesting repeat buyers.`
    : `<b>${c}</b> skews toward existing customers — only ${s.new_customer_rate.toFixed(1)}% of its conversions are new, below the 10-channel median of ${medianNewCustRate.toFixed(1)}%. A strong ROAS here may be flattering, since it's largely retention rather than acquisition.`;
  document.getElementById('ch-custInsight').innerHTML = custTag;

  const vl = volLabel[c];
  const vlBadge = vl==='low' ? '<span class="tag pos">Low volatility</span>' : vl==='mod' ? '<span class="tag">Moderate volatility</span>' : '<span class="tag neg">High volatility</span>';
  document.getElementById('ch-volCard').innerHTML = `
    <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap;">
      <div class="stile" style="flex:1; min-width:140px;"><div class="l">Std deviation</div><div class="v">${s.std_roas.toFixed(2)}</div></div>
      <div class="stile" style="flex:1; min-width:140px;"><div class="l">Coefficient of variation</div><div class="v">${(s.cv_roas*100).toFixed(0)}%</div></div>
      <div style="flex:1; min-width:220px;">${vlBadge}<div style="font-size:12.5px; color:var(--ink-dim); margin-top:8px;">Ranked ${cvSorted.indexOf(c)+1} of 10 for consistency (1 = steadiest).</div></div>
    </div>`;
}

document.getElementById('channelPills').addEventListener('click', (e)=>{
  const btn = e.target.closest('.pill'); if(!btn) return;
  renderChannelDetail(btn.dataset.ch);
});
renderChannelDetail('Email');

/* ================= TAB 3: BUDGET ALLOCATOR ================= */
let allocation = {};
let baseline = null;
let baselineRevenue = null;
let currentApproach = null;

function equalSplit(){ const a={}; CH.forEach(c=> a[c] = TOTAL_BUDGET/CH.length); return a; }

function proportionalAllocate(){
  const avg = {}; CH.forEach(c=>avg[c]=DATA.channel_stats[c].avg_roas);
  let uncapped = new Set(CH);
  let capped = {};
  let remaining = TOTAL_BUDGET;
  while(true){
    const roasSum = [...uncapped].reduce((s,c)=>s+avg[c],0);
    const alloc = {};
    uncapped.forEach(c=> alloc[c] = remaining * avg[c] / roasSum );
    const over = [...uncapped].filter(c=> CAPS[c] && alloc[c] > CAPS[c] + 1e-6);
    if(over.length===0){
      Object.assign(alloc, capped);
      return alloc;
    }
    over.forEach(c=>{ capped[c]=CAPS[c]; remaining -= CAPS[c]; uncapped.delete(c); });
  }
}

function fillCapsThenSplit(){
  const alloc = {};
  let remaining = TOTAL_BUDGET;
  CH.forEach(c => {
    if (CAPS[c]) {
      alloc[c] = CAPS[c];
      remaining -= CAPS[c];
    }
  });
  const others = CH.filter(c => !CAPS[c]);
  const roasSum = others.reduce((s,c)=> s + DATA.channel_stats[c].avg_roas, 0);
  others.forEach(c => {
    alloc[c] = remaining * DATA.channel_stats[c].avg_roas / roasSum;
  });
  return alloc;
}

function setActiveApproach(n){
  const a1 = document.getElementById('btnApproach1');
  const a2 = document.getElementById('btnApproach2');
  if (a1) a1.classList.toggle('active', n===1);
  if (a2) a2.classList.toggle('active', n===2);
}

// theoretical revenue ceiling: rank by avg ROAS, fill each to its cap (or exhaust budget) before moving on
function theoreticalMaxAllocate(){
  const ranked = [...CH].sort((a,b)=>DATA.channel_stats[b].avg_roas - DATA.channel_stats[a].avg_roas);
  const alloc = {}; CH.forEach(c=>alloc[c]=0);
  let remaining = TOTAL_BUDGET;
  for(const c of ranked){
    const cap = CAPS[c] || TOTAL_BUDGET;
    const give = Math.min(cap, remaining);
    alloc[c] = give;
    remaining -= give;
    if(remaining<=0) break;
  }
  return alloc;
}
const theoMax = theoreticalMaxAllocate();
const theoMaxRevenue = CH.reduce((s,c)=> s + theoMax[c]*DATA.channel_stats[c].avg_roas, 0);
document.getElementById('theoMaxDisplay').textContent = inr2(theoMaxRevenue);

function revenueFor(allocObj){
  return CH.reduce((s,c)=> s + (allocObj[c]||0)*DATA.channel_stats[c].avg_roas, 0);
}

// risk check using the diminishing-returns decile curves
function riskCheck(c, monthlySpend){
  const daily = monthlySpend/30;
  const deciles = DATA.diminishing[c];
  let nearest = deciles[0], minDiff = Infinity;
  deciles.forEach(d=>{ const diff = Math.abs(d.mean_spend-daily); if(diff<minDiff){ minDiff=diff; nearest=d; } });
  const decile1 = deciles[0];
  const dropPct = (decile1.mean_roas - nearest.mean_roas) / decile1.mean_roas;
  if(dropPct > 0.15 && nearest.decile > 1){
    return { risk:true, decile:nearest.decile, roasNow:nearest.mean_roas, roasCheap:decile1.mean_roas, dropPct };
  }
  return { risk:false };
}

function renderAllocRows(){
  const rows = CH.map(c=>{
    const s = DATA.channel_stats[c];
    const a = allocation[c] || 0;
    const rev = a * s.avg_roas;
    const pct = (a/TOTAL_BUDGET*100);
    const cap = CAPS[c];
    const overCap = cap && a > cap + 1;
    const rc = riskCheck(c, a);
    return `<div class="alloc-row" data-ch="${c}">
      <div class="ch"><span class="swatch" style="background:${COLORS[c]}"></span>${c}${cap?`<span style="color:var(--ink-faint); font-size:11px; margin-left:4px;">(cap ₹${(cap/100000).toFixed(0)}L)</span>`:''}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.min(pct,100)}%; background:${COLORS[c]}"></div></div>
      <div>
        <input type="number" step="1000" min="0" value="${Math.round(a)}" data-ch="${c}" class="allocInput">
        ${overCap ? `<span class="cap-flag">over cap</span>` : ''}
        ${rc.risk ? `<span class="risk-flag">diminishing returns</span>` : ''}
      </div>
      <div class="roas">${s.avg_roas.toFixed(2)}x</div>
      <div class="rev">${inr(rev)}</div>
    </div>`;
  }).join('');
  document.getElementById('allocRows').innerHTML = rows;
  document.querySelectorAll('.allocInput').forEach(inp=>{
    inp.addEventListener('input', (e)=>{
      const c = e.target.dataset.ch;
      allocation[c] = parseFloat(e.target.value) || 0;
      updateSummary();
      renderCapAndRiskFlagsOnly();
    });
  });
}

function renderCapAndRiskFlagsOnly(){
  CH.forEach(c=>{
    const row = document.querySelector(`.alloc-row[data-ch="${c}"]`);
    if(!row) return;
    const bar = row.querySelector('.bar-fill');
    if(bar) bar.style.width = Math.min((allocation[c]||0)/TOTAL_BUDGET*100,100)+'%';
    const cap = CAPS[c];
    const a = allocation[c]||0;
    const overCap = cap && a > cap+1;
    const rc = riskCheck(c, a);
    const flagWrap = row.children[2];
    const existingFlags = flagWrap.querySelectorAll('.cap-flag, .risk-flag');
    existingFlags.forEach(f=>f.remove());
    if(overCap){ const s=document.createElement('span'); s.className='cap-flag'; s.textContent='over cap'; flagWrap.appendChild(s); }
    if(rc.risk){ const s=document.createElement('span'); s.className='risk-flag'; s.textContent='diminishing returns'; flagWrap.appendChild(s); }
    row.querySelector('.rev').textContent = inr(a * DATA.channel_stats[c].avg_roas);
  });
}

function updateSummary(){
  let totalAlloc = 0, totalRev = 0;
  CH.forEach(c=>{
    const a = allocation[c] || 0;
    totalAlloc += a;
    totalRev += a * DATA.channel_stats[c].avg_roas;
  });
  document.getElementById('sumAlloc').textContent = inr(totalAlloc);
  document.getElementById('sumBlended').textContent = (totalAlloc>0 ? (totalRev/totalAlloc) : 0).toFixed(2) + 'x';
  document.getElementById('sumRevenue').textContent = inr2(totalRev);

  const warnEl = document.getElementById('budgetWarn');
  const diff = totalAlloc - TOTAL_BUDGET;
  let msgs = [];
  if(Math.abs(diff) > 1){
    msgs.push(diff > 0 ? `Over budget by ${inr(diff)}` : `${inr(-diff)} of the ₹50L is unallocated`);
  }
  CH.forEach(c=>{ if(CAPS[c] && (allocation[c]||0) > CAPS[c]+1) msgs.push(`${c} exceeds its ${inr(CAPS[c])} cap`); });
  if(msgs.length){ warnEl.style.display='block'; warnEl.textContent = msgs.join('  ·  '); }
  else { warnEl.style.display='none'; }

  // gauge: current revenue as % of theoretical ceiling
  const pctOfCeiling = Math.max(0, Math.min(100, totalRev/theoMaxRevenue*100));
  document.getElementById('gaugePct').textContent = pctOfCeiling.toFixed(0)+'%';
  document.getElementById('gaugeFill').style.width = pctOfCeiling+'%';

  updateImpactPanel(totalRev);
}

function updateImpactPanel(totalRev){
  const deltaEl = document.getElementById('impactDelta');
  const narrEl = document.getElementById('impactNarrative');
  const label = currentApproach || 'this approach';

  if(baseline===null){
    deltaEl.textContent = 'Click Approach 1 or Approach 2 to set a baseline';
    deltaEl.className = 'impact-delta flat';
    narrEl.innerHTML = 'Move any allocation above — this panel updates live to explain what that trade actually costs or earns you, not just what it changes.';
    return;
  }

  const delta = totalRev - baselineRevenue;
  const deltaPct = baselineRevenue>0 ? (delta/baselineRevenue*100) : 0;
  deltaEl.textContent = (Math.abs(delta)<1 ? `±₹0 vs ${label}` : `${inrSigned(delta)} vs ${label} (${deltaPct>=0?'+':''}${deltaPct.toFixed(1)}%)`);
  deltaEl.className = 'impact-delta ' + (Math.abs(delta)<1 ? 'flat' : (delta>0 ? 'pos' : 'neg'));

  const diffs = CH.map(c=>({ c, d:(allocation[c]||0)-(baseline[c]||0) })).filter(x=>Math.abs(x.d)>500);
  if(diffs.length===0){
    narrEl.innerHTML = `This matches ${label} exactly. Nudge any number to see what moving budget between channels actually costs or earns.`;
    return;
  }
  diffs.sort((a,b)=> b.d - a.d);
  const gained = diffs.filter(x=>x.d>0);
  const lost = diffs.filter(x=>x.d<0);

  let parts = [];
  if(gained.length){
    const top = gained[0];
    const s = DATA.channel_stats[top.c];
    parts.push(`moved <b>${inr(top.d)}</b> into <b>${top.c}</b> (${s.avg_roas.toFixed(2)}x ROAS)`);
  }
  if(lost.length){
    const top = lost[0];
    const s = DATA.channel_stats[top.c];
    parts.push(`pulled <b>${inr(Math.abs(top.d))}</b> out of <b>${top.c}</b> (${s.avg_roas.toFixed(2)}x ROAS)`);
  }
  let sentence = `You've ${parts.join(' and ')}. `;
  sentence += delta>=0
    ? `At the average ROAS each channel has historically delivered, that trade is worth <b>${inrSigned(delta)}/month</b> more than the ${label} baseline.`
    : `At the average ROAS each channel has historically delivered, that trade costs you <b>${inrSigned(delta)}/month</b> versus the ${label} baseline.`;

  const riskChannels = gained.map(g=>g.c).filter(c=>riskCheck(c, allocation[c]).risk);
  if(riskChannels.length){
    riskChannels.forEach(c=>{
      const rc = riskCheck(c, allocation[c]);
      sentence += ` <span class="risk">Careful with ${c}:</span> at this allocation its implied daily spend lands where its own history shows ROAS dropping to ~${rc.roasNow.toFixed(2)}x, down from ~${rc.roasCheap.toFixed(2)}x on its cheapest days — the ${DATA.channel_stats[c].avg_roas.toFixed(2)}x average this projection assumes may not hold at this spend level.`;
    });
  }

  narrEl.innerHTML = sentence;
}

function renderTakeaway(approach){
  const title = document.getElementById('takeawayTitle');
  const desc = document.getElementById('takeawayDesc');
  const recLabel = document.getElementById('takeawayRecLabel');
  const recValue = document.getElementById('takeawayRecValue');
  const recNote = document.getElementById('takeawayRecNote');
  const whyLabel = document.getElementById('takeawayWhyLabel');
  const whyCeiling = document.getElementById('takeawayWhyCeiling');
  const insight = document.getElementById('takeawayInsight');
  const ceilingNote = document.getElementById('takeawayCeilingNote');
  if (!title || !insight) return;

  if (approach === 2) {
    title.textContent = 'The honest takeaway — Approach 2';
    desc.textContent = 'Filling the two proven channels to their ceiling first buys more revenue than a flat ROAS split — without collapsing the mix into three channels.';
    recLabel.textContent = 'What Approach 2 does';
    recValue.textContent = inr2(baselineRevenue);
    recNote.textContent = 'Email and SMS filled to their known-safe caps (₹27L combined), remainder shared by ROAS so every other channel still gets a slice.';
    if (ceilingNote) ceilingNote.textContent = 'Rank-and-fill to cap: mathematically higher, but ~100% of the budget lands in three channels and seven go to zero.';
    whyLabel.textContent = 'Why we still don\'t take the ceiling';
    whyCeiling.textContent = 'Approach 2 already puts 54% of spend into two owned channels. Going further — Email, SMS and Affiliate only — would wipe seven channels: brand presence, learning, and competitive coverage you cannot buy back quickly. The extra rupees are real on paper; the coverage loss is real in market.';
    insight.innerHTML = '<b>The honest takeaway:</b> Approach 2 is the middle path. Approach 1 treats every rupee the same and leaves Email and SMS under-filled even though three years of data say more spend there does not hurt ROAS. The theoretical ceiling treats average ROAS as a license to concentrate everything. Approach 2 uses the one hard fact the data actually supports — Email and SMS can take their caps without a ROAS penalty — and then refuses to keep concentrating. The new risk to watch is the opposite of Approach 1\'s: if Email or SMS delivery wobbles, 54% of the plan sits in two channels. Meta Ads is still held small because that is the one place diminishing returns are real.';
    return;
  }

  title.textContent = 'The honest takeaway — Approach 1';
  desc.textContent = 'Two ways to read "optimal" here, and why the proportional split deliberately isn\'t the mathematically-highest one.';
  recLabel.textContent = 'What Approach 1 does';
  recValue.textContent = inr2(baselineRevenue);
  recNote.textContent = 'Spreads across all 10 channels in proportion to average ROAS, capped where required.';
  if (ceilingNote) ceilingNote.textContent = 'What you\'d get by ranking channels by avg ROAS and filling each to its cap before moving to the next — mathematically higher, but concentrates ~100% of budget into 3 channels.';
  whyLabel.textContent = 'Why we don\'t recommend the ceiling';
  whyCeiling.textContent = 'It assumes each channel\'s average ROAS holds unchanged at a completely different spend level, zeroes out 7 channels (brand and competitive risk), and 7 of 10 channels have a spend–ROAS slope statistically indistinguishable from zero — so any model that reallocates hard on that slope is fitting noise, not a real signal.';
  insight.innerHTML = '<b>The honest takeaway:</b> only Meta Ads shows real, statistically credible diminishing returns (corr = −0.62, n=1,095). Everywhere else, "marginal ROAS" isn\'t a fitted signal — it\'s a coin flip dressed up as a regression slope. That\'s exactly why Approach 1 uses the proportional method rather than chasing the ceiling: it\'s the allocation that\'s actually defensible once you account for what the data does and doesn\'t support. Watch the impact panel above as you nudge allocations toward the ceiling yourself — it\'ll flag the point where you\'re pushing a channel past the spend levels its own history actually supports.';
}

function showWhyApproach1(){
  const ranked = [...CH].sort((a,b)=>DATA.channel_stats[b].avg_roas-DATA.channel_stats[a].avg_roas);
  const top3 = ranked.slice(0,3);
  const blended = baselineRevenue/TOTAL_BUDGET;
  const metaDaily = (allocation['Meta Ads']/30).toFixed(0);
  document.getElementById('whyTitle').textContent = 'Why this allocation — Approach 1';
  document.getElementById('whyList').innerHTML = `
    <li>Budget is split in proportion to each channel's 3-year average ROAS — <b>${top3.map(c=>`${c} (${DATA.channel_stats[c].avg_roas.toFixed(2)}x)`).join(', ')}</b> lead the pack and get the largest shares.</li>
    <li>Email and SMS are capped at ₹15L and ₹12L — under this split, both land comfortably under cap, so no rebalancing was forced.</li>
    <li>Meta Ads' modest allocation (${inr(allocation['Meta Ads'])}) isn't only because of its lower average ROAS — at roughly ₹${metaDaily}/day it also sits at the cheap end of Meta's own spend range, right where its ROAS is strongest, well clear of the collapse to ~1.2x that shows up above ₹3.3L/day.</li>
    <li>Blended portfolio ROAS comes out to <b>${blended.toFixed(2)}x</b>, projecting <b>${inr2(baselineRevenue)}</b> in expected monthly revenue — about ${(baselineRevenue/theoMaxRevenue*100).toFixed(0)}% of the theoretical ceiling (see "The honest takeaway" below for why we don't chase that ceiling).</li>
  `;
  document.getElementById('whyHow').innerHTML = '';
  document.getElementById('whyPanel').classList.add('show');
  renderTakeaway(1);
}

function showWhyApproach2(){
  const remBudget = TOTAL_BUDGET - CAPS['Email'] - CAPS['SMS'];
  const emailRev = allocation['Email'] * DATA.channel_stats['Email'].avg_roas;
  const smsRev = allocation['SMS'] * DATA.channel_stats['SMS'].avg_roas;
  const blended = baselineRevenue/TOTAL_BUDGET;
  const propRev = revenueFor(proportionalAllocate());
  const rankedOthers = CH.filter(c => !CAPS[c]).sort((a,b)=>DATA.channel_stats[b].avg_roas - DATA.channel_stats[a].avg_roas);
  const topUncapped = rankedOthers[0];
  const low3 = rankedOthers.slice(-3);

  document.getElementById('whyTitle').textContent = 'Why this allocation — Approach 2';
  document.getElementById('whyList').innerHTML = `
    <li>Email and SMS are the two highest-ROAS channels, and their fitted slopes are flat-to-positive — three years of data show no evidence that spending more hurts them. Their caps are real constraints, not guesses, so Approach 2 fills them first: Email to ₹15L, SMS to ₹12L. That uses ₹27L (54% of the budget) and already produces <b>${inr(emailRev + smsRev)}</b> of expected revenue.</li>
    <li>The remaining ${inr(remBudget)} is split among the other 8 channels in proportion to their ROAS. <b>${topUncapped}</b> gets the largest remainder slice (${inr(allocation[topUncapped])}) simply because it has the best ROAS of the uncapped set — not because of any special adjustment.</li>
    <li>${low3.join(', ')} sit at the bottom of that remainder split (${low3.map(c=>inr(allocation[c])).join(', ')}) — small, but not zero. Every channel stays alive. Zeroing YouTube and Google Display and re-splitting their ~₹3.14L would push revenue a little higher; that's a different decision, not this one.</li>
    <li>Blended portfolio ROAS comes out to <b>${blended.toFixed(2)}x</b>, projecting <b>${inr2(baselineRevenue)}</b> in expected monthly revenue — up from ${(propRev/TOTAL_BUDGET).toFixed(2)}x / ${inr2(propRev)} under the pure proportional split (see "The honest takeaway" below for the trade-off this creates).</li>
  `;
  document.getElementById('whyHow').innerHTML = '';
  document.getElementById('whyPanel').classList.add('show');
  renderTakeaway(2);
}

document.getElementById('btnApproach1').addEventListener('click', ()=>{
  allocation = proportionalAllocate();
  baseline = {...allocation};
  baselineRevenue = revenueFor(baseline);
  currentApproach = 'Approach 1';
  setActiveApproach(1);
  renderAllocRows(); updateSummary();
  showWhyApproach1();
});

document.getElementById('btnApproach2').addEventListener('click', ()=>{
  allocation = fillCapsThenSplit();
  baseline = {...allocation};
  baselineRevenue = revenueFor(baseline);
  currentApproach = 'Approach 2';
  setActiveApproach(2);
  renderAllocRows(); updateSummary();
  showWhyApproach2();
});

// init: start from an equal split so either approach has a visible effect
allocation = equalSplit();
renderAllocRows();
updateSummary();

  } catch (err) {
    console.error("optimizer init failed", err);
  }
}
