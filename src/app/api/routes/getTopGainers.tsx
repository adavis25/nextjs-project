export async function getTopGainers(){
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const dynamicData = await fetch('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=', {cache:'no-store'})
    const data = await dynamicData.json();
    return data;
}