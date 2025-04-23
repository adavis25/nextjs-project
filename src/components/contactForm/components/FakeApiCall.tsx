"use server"
export async function FakeApiCall(incomingData){
    return {success: true, data: incomingData}
}