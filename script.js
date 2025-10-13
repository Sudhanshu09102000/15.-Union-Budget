

const questions = {
  1: { text: "Under which Article is the Annual Financial Statement presented in India?", options: ["Article 112", "Article 72", "Article 324", "Article 280"], correct: "1", image: '' },
2: { text: "The budget speech of 2025 focused on the path towards which goal for India by 2047?", options: ["Garib Kalyan", "Viksit Bharat", "Digital India", "Swachh Bharat"], correct: "2", image: '' },
3: { text: "What was the speech duration for the 2025 Union Budget presentation?", options: ["1 Hr 14 min", "2 Hr 40 min", "1 Hr 30 min", "2 Hr"], correct: "1", image: '' },
4: { text: "Who holds the record for the longest Union Budget speech duration in India?", options: ["Morarji Desai", "Nirmala Sitharaman", "Arun Jaitley", "P. Chidambaram"], correct: "2", image: '' },
5: { text: "From which financial year was the Railway Budget merged with the General Budget?", options: ["2015-16", "2016-17", "2017-18", "2018-19"], correct: "3", image: '' },
6: { text: "The merger of the Railway Budget was recommended by which committee?", options: ["Kelkar Committee", "Narasimham Committee", "Niti Aayog Committee", "Bibek Debroy Committee"], correct: "4", image: '' },
7: { text: "Which Finance Minister has presented the Union Budget the highest number of times?", options: ["Nirmala Sitharaman", "Arun Jaitley", "Morarji Desai", "Manmohan Singh"], correct: "3", image: '' },
8: { text: "How many times has Nirmala Sitharaman presented the Union Budget continuously?", options: ["5 times", "6 times", "7 times", "8 times"], correct: "4", image: '' },
9: { text: "The Black Budget refers to which financial year in India?", options: ["1971-72", "1972-73", "1973-74", "1974-75"], correct: "3", image: '' },
10: { text: "The 2025 Budget’s development emphasis used the acronym 'GYAN'. What does 'A' stand for?", options: ["Agriculture", "Annadata (Farmers)", "Awaas Yojana", "Artisans"], correct: "2", image: '' },
11: { text: "In 'GYAN', focusing on development, what does 'N' stand for?", options: ["Nari (Women)", "Nutrition", "Nagar (Urban)", "Niti"], correct: "1", image: '' },
  12: { text: "What is the fiscal deficit estimated for 2025-26 as a percentage of GDP?", options: ["3.9%", "4.4%", "5.0%", "4.0%"], correct: "2", image: '' },
13: { text: "What are the net tax receipts projected in the Budget Estimates 2025-26?", options: ["₹ 30.5 lakh crore", "₹ 28.37 lakh crore", "₹ 31.8 lakh crore", "₹ 27.21 lakh crore"], correct: "2", image: '' },
14: { text: "What is the total expenditure proposed in the Union Budget 2025-26?", options: ["₹ 50.65 lakh crore", "₹ 47.10 lakh crore", "₹ 48.00 lakh crore", "₹ 53.00 lakh crore"], correct: "1", image: '' },
15: { text: "How much does the government plan to borrow from the market (gross market borrowings) in 2025-26?", options: ["₹ 10.00 lakh crore", "₹ 15.21 lakh crore", "₹ 14.82 lakh crore", "₹ 13.57 lakh crore"], correct: "3", image: '' },
16: { text: "What is the capital expenditure (capex) target for 2025-26?", options: ["₹ 10.50 lakh crore", "₹ 11.21 lakh crore", "₹ 12.70 lakh crore", "₹ 9.87 lakh crore"], correct: "2", image: '' },
17: { text: "Capital expenditure in 2025-26 is what percentage of GDP?", options: ["4.4%", "2.9%", "3.1%", "3.6%"], correct: "3", image: '' },
18: { text: "What is the estimated amount for total receipts (other than loans) in 2025-26?", options: ["₹ 28.12 lakh crore", "₹ 34.96 lakh crore", "₹ 31.00 lakh crore", "₹ 32.55 lakh crore"], correct: "2", image: '' },
  19: { text: "Up to what amount is there no income tax liability for individual taxpayers in FY 2025-26?", options: ["₹ 10 lakh", "₹ 12 lakh", "₹ 12.75 lakh", "₹ 15 lakh"], correct: "2", image: '' },
20: { text: "After accounting for the standard deduction, what is the effective income limit for salaried taxpayers to pay zero tax in FY 2025-26?", options: ["₹ 13 lakh", "₹ 12.75 lakh", "₹ 11.5 lakh", "₹ 12 lakh"], correct: "2", image: '' },
21: { text: "What is the value of the standard deduction for salaried taxpayers as per the new tax slabs (FY 2025-26)?", options: ["₹ 50,000", "₹ 75,000", "₹ 1,00,000", "₹ 60,000"], correct: "2", image: '' },
  22: { text: "What is the income tax rate for income between ₹ 4 lakh and ₹ 8 lakh in FY 2025-26?", options: ["Nil", "5%", "10%", "15%"], correct: "2", image: '' },
23: { text: "Which income range is taxed at 10% as per the new slabs for FY 2025-26?", options: ["₹ 8-12 lakh", "₹ 12-16 lakh", "₹ 16-20 lakh", "₹ 4-8 lakh"], correct: "1", image: '' },
24: { text: "What is the income tax rate for the slab above ₹ 24 lakh?", options: ["25%", "20%", "15%", "30%"], correct: "4", image: '' },
25: { text: "Which income slab attracts a 25% tax rate?", options: ["₹ 16-20 lakh", "₹ 20-24 lakh", "Above ₹ 24 lakh", "₹ 12-16 lakh"], correct: "2", image: '' },
26: { text: "What is the tax rate for annual income up to ₹ 4 lakh under the new slabs?", options: ["Nil", "5%", "10%", "30%"], correct: "1", image: '' },
27: { text: "What is the tax rate for the ₹ 16-20 lakh income slab?", options: ["15%", "20%", "25%", "30%"], correct: "2", image: '' },
28: { text: "Which range is applicable for the 15% tax rate according to new income slabs?", options: ["₹ 8-12 lakh", "₹ 16-20 lakh", "₹ 12-16 lakh", "₹ 20-24 lakh"], correct: "3", image: '' },
  29: { text: "Which sector has the highest allocation in the given pie chart for 2025-26?", options: ["Home Affairs", "Defence", "Rural Development", "Health"], correct: "2", image: '' },
30: { text: "What is the percentage allocation for Defence in the expenditure pie chart?", options: ["14.7%", "16.9%", "31.1%", "10.8%"], correct: "3", image: '' },
31: { text: "How much has been allocated to Rural Development in the 2025-26 budget, as per the chart?", options: ["₹ 2,66,817 crore", "₹ 2,33,211 crore", "₹ 1,28,650 crore", "₹ 1,71,437 crore"], correct: "1", image: '' },
32: { text: "What is the allocation for Home Affairs according to the 2025-26 expenditure pie chart?", options: ["₹ 98,311 crore", "₹ 95,298 crore", "₹ 2,33,211 crore", "₹ 1,28,650 crore"], correct: "3", image: '' },
33: { text: "Which sector is allocated ₹ 1,71,437 crore as shown in the chart?", options: ["Education", "Agriculture", "Urban Development", "Health"], correct: "2", image: '' },
34: { text: "Identify the sector with an allocation of ₹ 1,28,650 crore.", options: ["Health", "Urban Development", "Education", "Telecom"], correct: "3", image: '' },
35: { text: "What is the allocation for Health in the 2025-26 expenditure chart?", options: ["₹ 2,66,817 crore", "₹ 98,311 crore", "₹ 1,28,650 crore", "₹ 96,777 crore"], correct: "2", image: '' },
36: { text: "How much is allocated for Urban Development according to the chart?", options: ["₹ 95,298 crore", "₹ 98,311 crore", "₹ 96,777 crore", "₹ 2,33,211 crore"], correct: "3", image: '' },
37: { text: "According to the chart, what is the allocation for IT and Telecom?", options: ["₹ 95,298 crore", "₹ 96,777 crore", "₹ 1,28,650 crore", "₹ 98,311 crore"], correct: "1", image: '' },
  38: { text: "Which scheme targets 100 low-productivity districts to benefit 1.7 crore farmers?", options: ["PM Dhan-Dhaanya Krishi Yojana", "PM Kisan Samman Nidhi", "PM Fasal Bima Yojana", "PM Krishi Sinchai Yojana"], correct: "1", image: "" },

39: { text: "‘Mission for Aatmanirbharta in Pulses’ focuses on which pulses?", options: ["Tur, Urad, and Masoor", "Moong, Chana, and Arhar", "Rajma, Chana, and Urad", "Masoor, Chana, and Moong"], correct: "1", image: "" },

40: { text: "The Kisan Credit Card (KCC) loan limit has been enhanced from ₹3 lakh to what amount?", options: ["₹4 lakh", "₹5 lakh", "₹6 lakh", "₹7 lakh"], correct: "2", image: "" },

41: { text: "Where will the new Makhana Board be established?", options: ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "West Bengal"], correct: "1", image: "" },
  
  42: { text: "How many Atal Tinkering Labs are planned under the ‘Investing in People’ initiative?", options: ["40,000", "50,000", "60,000", "75,000"], correct: "2", image: "" },

43: { text: "What is the total outlay of the Nuclear Energy Mission under ‘Investing in the Economy’?", options: ["₹10,000 crore", "₹15,000 crore", "₹20,000 crore", "₹25,000 crore"], correct: "3", image: "" },

44: { text: "How much capital will be raised under the Asset Monetization Plan 2025-30?", options: ["₹5 lakh crore", "₹10 lakh crore", "₹12 lakh crore", "₹15 lakh crore"], correct: "2", image: "" },

45: { text: "What is the amount allocated for R&D under ‘Investing in Innovation’?", options: ["₹10,000 crore", "₹15,000 crore", "₹20,000 crore", "₹25,000 crore"], correct: "3", image: "" },

46: { text: "How many PM Research Fellowships will be created?", options: ["5,000", "10,000", "15,000", "20,000"], correct: "2", image: "" },
  
  47: { text: "What is the outlay for the Centre of Excellence in AI for Education?", options: ["₹300 crore", "₹400 crore", "₹500 crore", "₹600 crore"], correct: "3", image: "" },

48: { text: "By how many times were the investment and turnover limits for MSME classification enhanced?", options: ["1.5 and 2 times", "2 and 2.5 times", "2.5 and 2 times", "3 and 1.5 times"], correct: "3", image: "" },

49: { text: "What is the credit limit on customized Credit Cards for Micro Enterprises?", options: ["₹2 lakh", "₹3 lakh", "₹4 lakh", "₹5 lakh"], correct: "4", image: "" },

50: { text: "How much contribution is set for the new Fund of Funds for Startups?", options: ["₹5,000 crore", "₹7,500 crore", "₹10,000 crore", "₹15,000 crore"], correct: "3", image: "" },
  
  51: { text: "Under the First-time Entrepreneurs Scheme, term loans up to ₹2 crore are provided to how many beneficiaries?", options: ["2 lakh", "3 lakh", "4 lakh", "5 lakh"], correct: "4", image: "" },

52: { text: "Which sectors are covered under the Focus Product Scheme to boost manufacturing and employment?", options: ["Footwear and Leather", "Textiles and Handicrafts", "Automobile and Electronics", "Steel and Cement"], correct: "1", image: "" },

53: { text: "Which ministries are jointly driving the Export Promotion Mission?", options: ["Commerce, MSME, and Finance", "Commerce, Agriculture, and Education", "MSME, Labour, and Industry", "Finance, Defence, and Commerce"], correct: "1", image: "" },

54: { text: "What is the name of the unified platform for international trade documentation?", options: ["BharatNet", "TradeConnect", "BharatTradeNet", "GlobalTradeLink"], correct: "3", image: "" },
  
  55: { text: "Which ministry implements the Pradhan Mantri Dhan Dhanya Krishi Yojana (PMDDKY)?", options: ["Ministry of Agriculture & Farmers' Welfare", "Ministry of Rural Development", "Ministry of Food Processing Industries", "Ministry of Cooperation"], correct: "1", image: "" },

56: { text: "Who is the Minister of Agriculture & Farmers’ Welfare associated with PMDDKY?", options: ["Shri Rajiv Ranjan Singh", "Shri Shivraj Singh Chouhan", "Shri Arjun Munda", "Shri Piyush Goyal"], correct: "2", image: "" },

57: { text: "Who heads the Ministry of Fisheries, Animal Husbandry & Dairying under PMDDKY?", options: ["Shri Rajiv Ranjan Singh alias Lalan Singh", "Shri Shivraj Singh Chouhan", "Shri Giriraj Singh", "Shri Dharmendra Pradhan"], correct: "1", image: "" },
  
  58: { text: "What is the main goal of the Pradhan Mantri Dhan Dhanya Krishi Yojana?", options: ["To increase agricultural exports", "To boost agricultural productivity, farmers' income, and sustainable farming", "To promote organic farming only", "To focus on fisheries and animal husbandry"], correct: "2", image: "" },

59: { text: "How many low-performing districts are targeted under PMDDKY?", options: ["50", "75", "100", "150"], correct: "3", image: "" },

60: { text: "What framework will Public Sector Banks introduce under PMDDKY?", options: ["Rural Credit Index", "Grameen Credit Score", "Agri Finance Index", "Farmers’ Credit Rating"], correct: "2", image: "" },
  
  61: { text: "What is the purpose of the Grameen Credit Score framework?", options: ["To monitor crop yield", "To assess rural education", "To serve credit needs of SHG members and rural population", "To rate agricultural cooperatives"], correct: "3", image: "" },

62: { text: "What is the duration of the Mission for Atma Nirbharta in Pulses?", options: ["3 years", "5 years", "6 years", "8 years"], correct: "3", image: "" },

63: { text: "Which pulses are focused under the Mission for Atma Nirbharta in Pulses?", options: ["Moong, Chana, and Arhar", "Tur, Urad, and Masoor", "Rajma, Masoor, and Moong", "Chana, Urad, and Rajma"], correct: "2", image: "" },

64: { text: "What is the GDP growth target for FY 2026 as mentioned in Budget 2025?", options: ["5.8%–6.2%", "6.3%–6.8%", "6.5%–7.0%", "7.0%–7.5%"], correct: "2", image: "" },
  
  65: { text: "Which ministry implements the PM Surya Ghar Muft Bijli Yojana?", options: ["Ministry of Power", "Ministry of New and Renewable Energy", "Ministry of Rural Development", "Ministry of Petroleum and Natural Gas"], correct: "2", image: "" },

66: { text: "Who is the minister in charge of the Ministry of New and Renewable Energy for PM Surya Ghar Muft Bijli Yojana?", options: ["Shri Piyush Goyal", "Shri Pralhad Joshi", "Shri Hardeep Singh Puri", "Shri Dharmendra Pradhan"], correct: "2", image: "" },

67: { text: "How many households are targeted under the PM Surya Ghar Muft Bijli Yojana?", options: ["50 lakh", "75 lakh", "1 crore", "1.5 crore"], correct: "3", image: "" },
  
  68: { text: "What are the eligibility criteria for households under PM Surya Ghar Muft Bijli Yojana?", options: ["Household must own land", "Household must have a rooftop and valid electricity connection", "Household must be below poverty line", "Household must use electric vehicles"], correct: "2", image: "" },

69: { text: "What is the total outlay of the PM Surya Ghar Muft Bijli Yojana till FY 2026-27?", options: ["₹50,000 crore", "₹65,000 crore", "₹70,000 crore", "₹75,021 crore"], correct: "4", image: "" },

70: { text: "How many units of free electricity per month are provided under the PM Surya Ghar Muft Bijli Yojana?", options: ["100 units", "200 units", "300 units", "400 units"], correct: "3", image: "" },
  
  71: { text: "What is the main goal of the PM Surya Ghar Muft Bijli Yojana?", options: ["To promote rooftop solar and provide free/low-cost electricity", "To expand hydroelectric power generation", "To promote electric vehicles", "To modernize coal power plants"], correct: "1", image: "" },

72: { text: "Which fiscal year marks the completion of the PM Surya Ghar Muft Bijli Yojana’s current phase?", options: ["FY 2024-25", "FY 2025-26", "FY 2026-27", "FY 2027-28"], correct: "3", image: "" },
  
  73: { text: "Which ministry implements the Atma Nirbhar Oil Seeds Abhiyan?", options: ["Ministry of Food Processing Industries", "Ministry of Agriculture & Farmers’ Welfare", "Ministry of Commerce and Industry", "Ministry of Rural Development"], correct: "2", image: "" },

74: { text: "Who is the Minister of Agriculture & Farmers’ Welfare responsible for the Atma Nirbhar Oil Seeds Abhiyan?", options: ["Shri Rajiv Ranjan Singh", "Shri Piyush Goyal", "Shri Shivraj Singh Chouhan", "Shri Arjun Munda"], correct: "3", image: "" },

75: { text: "Who are the main beneficiaries of the Atma Nirbhar Oil Seeds Abhiyan?", options: ["Fishermen", "Oilseed farmers", "Dairy farmers", "Tea plantation workers"], correct: "2", image: "" },
  
  76: { text: "What is the primary goal of the Atma Nirbhar Oil Seeds Abhiyan?", options: ["To promote export of edible oils", "To achieve self-sufficiency in key oilseed crops", "To boost cotton and jute production", "To reduce dependence on fertilizers"], correct: "2", image: "" },

77: { text: "Which of the following crops are covered under the Atma Nirbhar Oil Seeds Abhiyan?", options: ["Groundnut, Mustard, Soybean, Sesame, Sunflower", "Rice, Wheat, Barley, Maize, Oats", "Tea, Coffee, Cocoa, Rubber, Coconut", "Tur, Urad, Masoor, Moong, Chana"], correct: "1", image: "" },

78: { text: "What national issue does the Atma Nirbhar Oil Seeds Abhiyan aim to address?", options: ["Rising fertilizer prices", "Dependence on edible oil imports", "Decline in sugar production", "Water scarcity in irrigation"], correct: "2", image: "" },
  
  79: { text: "What is the main goal of the expanded PM Awas Yojana?", options: ["To promote urban development", "To ensure 'Housing for All' by addressing the housing deficit", "To provide rental housing for migrants", "To modernize smart cities"], correct: "2", image: "" },

80: { text: "How many additional houses are targeted under the expansion of PM Awas Yojana?", options: ["1 crore", "2 crore", "3 crore", "4 crore"], correct: "3", image: "" },

81: { text: "The PM Awas Yojana (Expansion) covers which regions of India?", options: ["Only rural areas", "Only urban areas", "Both rural and urban areas", "Only hilly regions"], correct: "3", image: "" },

82: { text: "Which long-term national goal does PM Awas Yojana (Expansion) support?", options: ["Smart Villages Mission", "Housing for All", "Digital India", "Urban Rejuvenation"], correct: "2", image: "" },
  
  83: { text: "Which ministry implements the Revised Skill Loan Scheme?", options: ["Ministry of Education", "Ministry of Labour and Employment", "Ministry of Skill Development and Entrepreneurship", "Ministry of Finance"], correct: "3", image: "" },

84: { text: "Who is the target group under the Revised Skill Loan Scheme?", options: ["Farmers", "Women entrepreneurs", "Students pursuing skill development and vocational training", "Government employees"], correct: "3", image: "" },

85: { text: "What is the new maximum loan limit under the Revised Skill Loan Scheme?", options: ["₹3 lakh", "₹5 lakh", "₹7.5 lakh", "₹10 lakh"], correct: "3", image: "" },

86: { text: "Which organization provides the guarantee for loans under the Revised Skill Loan Scheme?", options: ["Private banks", "RBI", "Government-promoted Fund", "State governments"], correct: "3", image: "" },
  
  87: { text: "What is the main goal of the Revised Skill Loan Scheme?", options: ["To provide scholarships for higher education", "To make vocational training affordable and improve employability", "To promote startup funding", "To finance agricultural machinery"], correct: "2", image: "" },
  
  
  
  
};

const explanations = {
  1: { text: "The Annual Financial Statement is presented under Article 112 of the Indian Constitution, which mandates the government to present a statement of estimated receipts and expenditures before Parliament every financial year.", image: "" },
2: { text: "The budget focused on continuing India's journey towards 'Viksit Bharat', which means a 'Developed India' by the year 2047, marking the centenary of independence.", image: "" },
3: { text: "The speech duration for the 2025 Union Budget presentation was 1 hour and 14 minutes, highlighting concise yet comprehensive coverage of key schemes.", image: "" },
4: { text: "The record for the longest Union Budget speech is held by Nirmala Sitharaman, who spoke for 2 hours and 40 minutes during the 2020 budget session.", image: "" },
5: { text: "The Railway Budget was merged with the General Budget from the financial year 2017-18, streamlining the budgeting process for better fiscal management.", image: "" },
6: { text: "The Bibek Debroy Committee recommended the merger of the Railway Budget with the General Budget to enhance efficiency and optimize resources.", image: "" },
7: { text: "Morarji Desai holds the record for presenting the Union Budget the maximum number of times, doing so on 10 occasions.", image: "" },
8: { text: "Nirmala Sitharaman has presented the Union Budget continuously for 8 times, becoming the first woman to do so in Indian history.", image: "" },
9: { text: "The term 'Black Budget' refers to the financial year 1973-74, known for large fiscal deficits and economic challenges.", image: "" },
10: { text: "'A' in 'GYAN' stands for Annadata (Farmers), highlighting the focus on the welfare and development of India's agricultural sector.", image: "" },
11: { text: "'N' in 'GYAN' refers to Nari (Women), acknowledging the critical role of women in national development and growth.", image: "" },
  12: { text: "The estimated fiscal deficit for the financial year 2025-26 is 4.4% of GDP, representing the gap between total expenditure and total receipts (excluding borrowings).", image: "" },
13: { text: "Net tax receipts in the 2025-26 Budget are projected at ₹ 28.37 lakh crore, showing the government's expected revenue from taxes after adjusting for refunds.", image: "" },
14: { text: "The total expenditure proposed in the Budget Estimates for 2025-26 stands at ₹ 50.65 lakh crore, covering both revenue and capital expenditures.", image: "" },
15: { text: "Gross market borrowings for 2025-26 are planned at ₹ 14.82 lakh crore, which is the total amount to be borrowed from the market to finance the fiscal deficit and other requirements.", image: "" },
16: { text: "Capital expenditure (Capex) in the 2025-26 Budget is set at ₹ 11.21 lakh crore, which amounts to 3.1% of India's GDP and includes spending on physical and social infrastructure.", image: "" },
17: { text: "Capital expenditure as a percentage of GDP is targeted at 3.1% for 2025-26, emphasizing investment in growth-enhancing sectors.", image: "" },
18: { text: "Total receipts (excluding loans) are estimated at ₹ 34.96 lakh crore for 2025-26, representing the government's income excluding all borrowings.", image: "" },
  19: { text: "For FY 2025-26, no income tax is applicable on annual income up to ₹ 12 lakh for individual taxpayers under the new tax slabs.", image: "" },
20: { text: "Salaried taxpayers can earn up to ₹ 12.75 lakh without paying any income tax in FY 2025-26, factoring in the standard deduction of ₹ 75,000.", image: "" },
21: { text: "The standard deduction available for salaried taxpayers in the new tax regime for FY 2025-26 is ₹ 75,000, providing additional tax relief.", image: "" },
  22: { text: "The income tax rate for income between ₹ 4 lakh and ₹ 8 lakh in FY 2025-26 is 5%, as per the revised tax slabs.", image: "" },
23: { text: "Income between ₹ 8 lakh and ₹ 12 lakh is taxed at 10% under the new tax slabs for FY 2025-26.", image: "" },
24: { text: "Annual income above ₹ 24 lakh is taxed at a rate of 30% under the latest income tax regime.", image: "" },
25: { text: "The 25% tax rate applies to annual income falling in the ₹ 20-24 lakh slab as per the 2025-26 tax structure.", image: "" },
26: { text: "For annual income up to ₹ 4 lakh, no tax is levied according to the updated income tax slabs.", image: "" },
27: { text: "Income in the range of ₹ 16-20 lakh is taxed at 20% as per the new income tax rates.", image: "" },
28: { text: "The 15% tax rate is applicable to income in the slab of ₹ 12-16 lakh as per the FY 2025-26 tax slabs.", image: "" },
  29: { text: "Defence has the highest allocation in the presented expenditure chart, accounting for 31.1% of the total budgeted allocation for these sectors in 2025-26.", image: "" },
30: { text: "31.1% of the budget allocation, the largest share in the chart, goes to Defence for the year 2025-26.", image: "" },
31: { text: "An allocation of ₹ 2,66,817 crore is made for Rural Development in the 2025-26 budget, as shown in the pie chart.", image: "" },
32: { text: "Home Affairs is allocated ₹ 2,33,211 crore as per the 2025-26 expenditure pie chart.", image: "" },
33: { text: "₹ 1,71,437 crore is allocated to the Agriculture sector, reflecting a strong emphasis on rural and farmer welfare.", image: "" },
34: { text: "Education receives ₹ 1,28,650 crore in the 2025-26 budget, supporting national goals in human capital and literacy.", image: "" },
35: { text: "The allocation for Health in the 2025-26 expenditure is ₹ 98,311 crore, aiming to improve medical services and public health.", image: "" },
36: { text: "Urban Development receives ₹ 96,777 crore in the budget, reflecting ongoing investments in city infrastructure and urban amenities.", image: "" },
37: { text: "The amount allocated to IT and Telecom for 2025-26 is ₹ 95,298 crore, supporting connectivity and digital infrastructure.", image: "" },
  38: { text: "‘PM Dhan-Dhaanya Krishi Yojana’ aims to benefit 1.7 crore farmers in 100 low-productivity districts. It focuses on improving agricultural productivity and farmer income as part of India’s first engine of development.", image: "" },

39: { text: "The ‘Mission for Aatmanirbharta in Pulses’ is a 6-year plan focusing on the procurement of Tur, Urad, and Masoor by NAFED and NCCF to make India self-reliant in pulses production.", image: "" },

40: { text: "The Kisan Credit Card (KCC) loan limit has been increased from ₹3 lakh to ₹5 lakh to provide higher financial support to farmers for agricultural and allied activities.", image: "" },

41: { text: "A new Makhana Board will be established in Bihar to promote the Makhana industry, which is a major livelihood source for local farmers.", image: "" },
  42: { text: "Under the ‘Investing in People’ initiative, 50,000 Atal Tinkering Labs will be set up to promote innovation and creativity among students across India.", image: "" },

43: { text: "The Nuclear Energy Mission has a total outlay of ₹20,000 crore for the development of Small Modular Reactors (SMRs) to expand clean energy capacity.", image: "" },

44: { text: "The Asset Monetization Plan 2025–30 aims to raise ₹10 lakh crore capital through asset monetization of public infrastructure to fund new projects.", image: "" },

45: { text: "A total of ₹20,000 crore has been allocated for Research and Development (R&D) to strengthen India’s innovation ecosystem and scientific research capabilities.", image: "" },

46: { text: "10,000 PM Research Fellowships will be awarded to promote advanced research and innovation among India’s youth and researchers.", image: "" },

47: { text: "A Centre of Excellence in Artificial Intelligence (AI) for Education with an outlay of ₹500 crore will enhance the integration of AI in teaching and learning systems.", image: "" },

48: { text: "The MSME classification criteria have been revised, increasing investment and turnover limits by 2.5 times and 2 times respectively to include more enterprises under MSME benefits.", image: "" },

49: { text: "Micro Enterprises can now access customized Credit Cards with a ₹5 lakh limit through the Udyam portal to meet their short-term financial needs.", image: "" },

50: { text: "A new Fund of Funds with a ₹10,000 crore contribution has been launched to support startups and entrepreneurship development in India.", image: "" },

51: { text: "The First-time Entrepreneurs Scheme provides term loans up to ₹2 crore for 5 lakh women and SC/ST entrepreneurs over 5 years to promote inclusive growth.", image: "" },

52: { text: "The Focus Product Scheme supports the Footwear and Leather sectors, along with measures for the Toy sector, to boost domestic manufacturing and employment.", image: "" },

53: { text: "The Export Promotion Mission is jointly led by the Ministries of Commerce, MSME, and Finance to streamline export growth and policy alignment.", image: "" },

54: { text: "‘BharatTradeNet’ (BTN) is a unified digital platform designed for simplifying and integrating international trade documentation across ministries.", image: "" },
  
  55: { text: "The Pradhan Mantri Dhan Dhanya Krishi Yojana (PMDDKY) is implemented by the Ministry of Agriculture & Farmers’ Welfare to enhance productivity and sustainability in agriculture.", image: "" },

56: { text: "Shri Shivraj Singh Chouhan is the Minister of Agriculture & Farmers’ Welfare responsible for overseeing the implementation of PMDDKY.", image: "" },

57: { text: "Shri Rajiv Ranjan Singh alias Lalan Singh heads the Ministry of Fisheries, Animal Husbandry & Dairying, which collaborates in PMDDKY to support allied agricultural sectors.", image: "" },

58: { text: "The main goal of PMDDKY is to boost agricultural productivity, farmers' income, and promote sustainable farming in 100 low-performing districts, thereby reducing rural migration.", image: "" },
  
  59: { text: "PMDDKY focuses on 100 low-performing districts across India to uplift agricultural performance and improve the rural economy.", image: "" },

60: { text: "Under PMDDKY, Public Sector Banks will introduce a 'Grameen Credit Score' framework to enhance rural credit access and financial inclusion.", image: "" },

61: { text: "The Grameen Credit Score framework aims to serve the credit needs of Self-Help Group (SHG) members and the wider rural population, promoting financial empowerment.", image: "" },

62: { text: "The Mission for Atma Nirbharta in Pulses is a 6-year initiative under PMDDKY focusing on self-sufficiency in Tur, Urad, and Masoor pulses through procurement by NAFED and NCCF.", image: "" },
  
  63: { text: "The Mission for Atma Nirbharta in Pulses primarily targets Tur, Urad, and Masoor to boost production and reduce dependence on imports.", image: "" },

64: { text: "The GDP growth target for FY 2026, as announced in Budget 2025, is projected between 6.3% and 6.8%, reflecting stable and sustainable economic growth expectations.", image: "" },
  
  65: { text: "The PM Surya Ghar Muft Bijli Yojana is implemented by the Ministry of New and Renewable Energy, which oversees India’s renewable power initiatives.", image: "" },

66: { text: "Shri Pralhad Joshi is the Minister of New and Renewable Energy responsible for executing the PM Surya Ghar Muft Bijli Yojana.", image: "" },

67: { text: "The scheme targets 1 crore Indian households to promote rooftop solar installation and provide affordable electricity.", image: "" },

68: { text: "To be eligible, a household must own a home with a suitable rooftop and possess a valid electricity connection.", image: "" },

69: { text: "The scheme has an outlay of ₹75,021 crore till FY 2026-27 to support installation, subsidies, and incentives for rooftop solar systems.", image: "" },
  
  70: { text: "Under this scheme, households will receive up to 300 units of free electricity per month generated through rooftop solar panels.", image: "" },

71: { text: "The main goal of PM Surya Ghar Muft Bijli Yojana is to promote rooftop solar energy, reduce electricity bills, and encourage clean, renewable energy use.", image: "" },

72: { text: "The first phase of the PM Surya Ghar Muft Bijli Yojana is planned to continue till FY 2026-27, ensuring long-term adoption of solar energy across Indian homes.", image: "" },
  
  
  73: { text: "The Atma Nirbhar Oil Seeds Abhiyan is implemented by the Ministry of Agriculture & Farmers’ Welfare, focusing on strengthening India’s oilseed sector.", image: "" },

74: { text: "Shri Shivraj Singh Chouhan, the Minister of Agriculture & Farmers’ Welfare, leads the Atma Nirbhar Oil Seeds Abhiyan to promote domestic oilseed cultivation.", image: "" },

75: { text: "Oilseed farmers across India are the primary beneficiaries of this scheme, which aims to enhance their productivity and profitability.", image: "" },

76: { text: "The main goal of the Atma Nirbhar Oil Seeds Abhiyan is to achieve self-sufficiency in major oilseed crops and reduce India’s reliance on imported edible oils.", image: "" },
  
  77: { text: "Key crops under the Atma Nirbhar Oil Seeds Abhiyan include groundnut, mustard, soybean, sesame, and sunflower—major sources of edible oil in India.", image: "" },

78: { text: "The scheme aims to address India’s heavy dependence on edible oil imports by promoting domestic oilseed cultivation and sustainable farming practices.", image: "" },
  
  79: { text: "The expanded PM Awas Yojana aims to ensure 'Housing for All' by reducing the housing deficit and providing affordable homes to rural and urban populations.", image: "" },

80: { text: "Under its expansion, PM Awas Yojana targets the construction of 3 crore additional houses across rural and urban regions to meet growing housing demand.", image: "" },

81: { text: "The scheme covers both rural and urban areas, ensuring that housing benefits reach all sections of society across India.", image: "" },

82: { text: "PM Awas Yojana (Expansion) supports India’s vision of 'Housing for All' by promoting inclusive and affordable housing development nationwide.", image: "" },
  
  83: { text: "The Revised Skill Loan Scheme is implemented by the Ministry of Skill Development and Entrepreneurship to support India’s skilling initiatives.", image: "" },

84: { text: "The scheme targets students pursuing skill development and vocational training programs, helping them access credit easily.", image: "" },

85: { text: "Under the revised scheme, the loan limit has been increased to ₹7.5 lakh to cover higher costs of quality training and certification.", image: "" },

86: { text: "Loans under the Revised Skill Loan Scheme are backed by a government-promoted Fund that provides guarantees to banks, reducing risk and improving access.", image: "" },

87: { text: "The main objective of the scheme is to enhance access to credit for skill development, make training affordable, and improve youth employability across India.", image: "" },
  
  
  
};
