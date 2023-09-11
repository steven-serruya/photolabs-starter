// const db = require;

// function getAllPhotos() {
//   return new Promise((resolve, reject) => {
//     const query = `
//           SELECT * FROM PHOTO;
//       `;

//     db.query(query)
//       .then(result => {
//         resolve(result.rows);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }

// function getAllTopics() {
//   return new Promise((resolve, reject) => {
//     const query = `
//           SELECT * FROM topic; 
//       `; 

//     db.query(query)
//       .then(result => {
//         resolve(result.rows);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }

// function getPhotosByTopic(topic_id) {
//   return new Promise((resolve, reject) => {
//     const query = `
//       SELECT * FROM photo
//       WHERE topic_id = $1;
//     `;

//     db.query(query, [topic_id]) 
//       .then(result => {
//         resolve(result.rows);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }

