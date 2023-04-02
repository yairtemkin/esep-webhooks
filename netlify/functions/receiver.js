exports.handler = async (event, context) => {
  const requestBody = JSON.parse(event.body);
  const eventType = event.headers["X-GitHub-Event"];

  if (eventType === "ping") {
    console.log("Received ping event");
    return { statusCode: 200, body: "Pong" };
  }

  if (eventType === "push") {
    const branchName = requestBody.ref.replace("refs/heads/", "");
    console.log(`Received push event for branch ${branchName}`);
    // Perform actions based on the push event
    return { statusCode: 200, body: "Push event processed" };
  }

  console.log(`Received unsupported event type ${eventType}`);
  return { statusCode: 400, body: `Unsupported event type ${eventType}` };
};
