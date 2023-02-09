# Thinkers--A-Notes-Taking-Web-App
A full stack notes taking app in MERN with authentication.

## To Start the App

<ol>
  <li>Create a mongodb cluster and copy the connection string for VS Code.</li>
  <li>Open the project and in the backend folder create a new file and name it as `.env`.</li>
  <li>In the file create two variables as given below :
    <ol>
      <li>MONGO_URL=<paste connection string here></li>
      <li>PORT=4000 (If you use another port, then make sure to change it in the proxy field in `package.json` file within the client folder because that's where the client will send all it's requests.)</li>
    </ol>
  </li>
  <li>Now go to Google Cloud Console, create a new project, your project must have OAuth 2.0 to access Google APIs. Then go to the credentials page, Click Create credentials > OAuth client ID. Select the Web application application type. Name your OAuth 2.0 client and click Create. Now you will be able to view, copy and download your client id as well as other credentials. Copy the client id and download the credentials in json format. For details on this step check this blog : https://developers.google.com/identity/sign-in/web/sign-in</li>
  <li>Now go to frontend > src > Landing > Card.jsx and on line 41 aproximately, paste the copied client id for google authentication. </li>
  <li>Open the terminal in the root folder, run the command `cd backend` to move into backend folder and there run the command `npm run dev` to start the Express server.</li>
  <li>Once the server has started and you are connected to the database(you will be notified in the console), open a new terminal and run the command `cd frontend` to move into frontend folder where you Reactjs front end code is. Here run the command `npm start` to start the Reactjs app.</li>
</ol>
