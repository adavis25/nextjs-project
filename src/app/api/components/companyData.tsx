import Card from "@/components/card/card";
import {use} from 'react'
import getCompanyData from "../routes/getCompanyData";

export default function CompanyData(){
    const companyData = use(getCompanyData());
    return (
        <Card title={companyData.Name} 
            subtitle={companyData.Address}>
                {companyData.Description}
        </Card>
    )
}