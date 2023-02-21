URL obj = new URL("https://api.crewapp.com/connect/access-tokens");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());


{
  "code": "string",
  "accessToken": null,
  "clientSecret": "string",
  "clientId": "string",
  "expirationTime": 0
}