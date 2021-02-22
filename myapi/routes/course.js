const express = require('express');
const router = express.Router();
const course = require('../models/course_model');

router.get('/:id_course?',
 function(request, response) {
  if (request.params.id_course) {
    course.getById(request.params.id_course, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult[0]);
        response.json(dbResult[0]);
      }
    });
  } else {
    course.getcourse(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult);
        response.json(dbResult);
      }
    });
  }
});


router.post('/', 
function(request, response) {
  course.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.insertId);
    }
  });
});


router.delete('/:id_course', 
function(request, response) {
  course.delete(request.params.id_course, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.affectedRows);
    }
  });
});


router.put('/:id', 
function(request, response) {
  course.update(request.params.id_course, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.affectedRows);
    }
  });
});

module.exports = router;
