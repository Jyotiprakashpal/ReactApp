export const fetchSalesHierarchy = async (dataAreaId: string, smCode: string): Promise<any> => {
  try {
    console.log("Sales hierarchy...");
    // UAT
    const url =
      "https://kandharigroup.azure-api.net/mdmuat/saleshierarchy" +
      `?$top=1` +
      `&$filter=dataAreaId eq '${dataAreaId}' and SMCode eq '${smCode}'` +
      `&$orderby=ValidTo desc` +
      `&cross-company=true`;

    // Production
    // const url =
    //   "https://kandharigroup.azure-api.net/mdmprod/saleshierarchy" +
    //   `?$top=1` +
    //   `&$filter=dataAreaId eq '${dataAreaId}' and SMCode eq '${smCode}'` +
    //   `&$orderby=ValidTo desc` +
    //   `&cross-company=true`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}` // if required
      },
    });
    console.log("Response in fetch ", response);
    const result = await response.json();
    console.log("Sales heiarchy ", result);

    return result;
  } catch (error) {
    console.error("Sales hierarchy fetch failed", error);
    return null;
  }
};
