export default async function getCompanyData(){
    const staticData = await fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=GIB&apikey=', {cache: 'force-cache'})
    const data = await staticData.json()
    return data;
}
