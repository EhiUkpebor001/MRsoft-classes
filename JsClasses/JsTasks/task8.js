/*
        Problem : Best Time to Buy and Sell Stock
            You are given an integer array prices where prices[i] is the price of Neetcoin on the ith day.
            You may choose a single day to buy one Neetcoin and choose a different day in the future to sell it.
            Return the maximum profit you can achieve. You may choose to not make any transactions, in which case, the profit would be 0.

            Example 1:
            Input: prices = [7, 1, 5, 3, 6, 4]
            Output: 5
            Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
                Note that buying on day 2 and selling on day 1 is not allowed, because you must buy before you sell.
            
            Example 2:
            Input: prices = [7, 6, 4, 3, 1]
            Output: 0
            Explanation: In this case, no transactions are done and the max profit = 0.

        Hint:
            Math.max() is used in solving it.
*/

// console.log(Math.max(20, 25, 50, 40, 281));

const neetCoin = (prices) => {
    let buyStock;
    let sellStock;
    let profit = 0;
    // let newP = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++){
            buyStock = prices[i];
            sellStock = prices[j];

            let profitEqn = sellStock - buyStock;
            profit = Math.max(profit, profitEqn); 
            
            if (profitEqn <= 0 && profit <= 0) {
                console.log (`Profit = 0`);
            } else {
                // newP = profit;
                // if(profitEqn >= profit){
                //     console.log(`\nThe best days to buy and sell for max profit is to Buy on day ${i} and sell on day ${j} = ${profit}\n\n`)
                // }

                console.log (`Buy on day ${i} (price = ${prices[i]}) and sell on day ${j} (price = ${prices[j]}), current profit = ${prices[j]} - ${prices[i]} = ${profitEqn}, but Max Profit = ${profit}\n`);
            }
        };
    };
};

neetCoin([7, 1, 5, 3, 6, 4]);
neetCoin([7, 6, 4, 3, 1]);