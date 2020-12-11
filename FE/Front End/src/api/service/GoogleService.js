import Axios from "axios";
class GoogleService {


  getVisitPerDay() {
    const data= {
      reportRequests: [
        {
          viewId: "232483442", //enter your view ID here
          dateRanges: [
            {
              startDate: "10daysAgo",
              endDate: "today",
            },
          ],
          metrics: [
            {
              expression: "ga:users",
            },
            { expression: "ga:pageviews"},
          ],
          dimensions: [
            {
              name: "ga:date",
            },
          ],
        },
      ],
    }
    return Axios.post("https://content-analyticsreporting.googleapis.com/v4/reports:batchGet?alt=json",data,
    {headers:
      {
        Authorization:"Bearer ya29.A0AfH6SMCNwBnIXbCJFW3w_Hifu2NIvEXggREaNKPbHa7ZW6EthnPRuIZMuRgRO8hAhFswiGJYO5f-vH3cWBcZ3jYD17m_MBpjNt0PaTNyRsrrnZtyJS5xTf5C8-5bQO-7rr-qBG7r1nNcmLb8LG7E3SvALHN7YFvV-6myEQdtMXLH"
      }});




  }

  displayResults(response) {
    const queryResult = response.data.reports[0].data.rows;
    const result = queryResult.map((row) => {
      const dateSting = row.dimensions[0];
      const formattedDate = `${dateSting}`;
      return {
        date: formattedDate,
        visits: row.metrics[0].values[0],
      };
    });
    console.log(result);
    return result;

  }



}
export default new GoogleService();
