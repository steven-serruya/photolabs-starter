const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);



server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

// app.get('/api/photos', (req, res) => {
//   getAllPhotos()
//     .then(photos => {
//       res.json(photos);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Failed to retrieve photos." });
//     });
// });

// app.get('/api/topics', (req, res) => {
//   db.getAllTopics()
//     .then(topics => {
//       res.json(topics);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Failed to retrieve topics." });
//     });
// });

// app.get('/api/topics/photos/:topic_id', (req, res) => {
//   const topicId = req.params.topic_id;

//   getPhotosByTopic(topicId)
//     .then(photos => {
//       res.json(photos);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Failed to retrieve photos for the specified topic." });
//     });
// });

