import Card from "@/components/card/card";
import { Suspense } from "react";
import TopGainers from "@/app/api/components/topGainers";
import CompanyData from "./components/companyData";

export default async function Page(){
    return (
        <div className="container mx-auto flex justify-between items-center">
            <div className="grid grid-cols-2 gap-4 mx-auto">
                <div className="pt-5">
                    <Card title="Company Overview API">This API returns the company information, financial ratios, and other key metrics for the equity specified. I have set it to go to CGI's ticker GIB. I am only pulling in the name, address and description.</Card>
                </div>
                <div className="pt-5">
                    <Card title="Top Gainers API">This endpoint returns the top 20 gainers, losers, and the most active traded tickers in the US market. I have set it to only show the top gainers.</Card>
                </div>
                <div className="pt-5">
                    <Suspense fallback={<p>Loading company data...</p>}>
                        <CompanyData />
                    </Suspense>
                </div>
                <div className="pt-5">
                    <Suspense fallback={<p>Loading top gainers...</p>}>
                        <TopGainers />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}