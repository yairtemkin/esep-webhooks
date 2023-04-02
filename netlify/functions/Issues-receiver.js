const axios = require("axios");

exports.handler = async (event, context) => {
  const json = JSON.parse(event.body);
  const payload = `{"text": "Issue Created: ${json.issue.html_url}"}`;

  const response = await axios.post(process.env.SLACK_URL, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
