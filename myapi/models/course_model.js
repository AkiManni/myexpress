const db = require('../database');

const course = {
  getcourse: function(callback) {
    return db.query('select * from course', callback);
  },
  getById: function(id_course, callback) {
    return db.query('select * from course where id_course=?', [id_course], callback);
  },
  add: function(course, callback) {
    return db.query(
      'insert into course (id_course,name,credits) values(NULL,?,?)',
      [course.name, course.credits],
      callback
    );
  },
  delete: function(id_course, callback) {
    return db.query('delete from course where id_course=?', [id_course], callback);
  },
  update: function(id_course, course, callback) {
    return db.query(
      'update course set name=?,credits=? where id_course=?',
      [course.name, course.credits, id_course],
      callback
    );
  }
};
module.exports = course;