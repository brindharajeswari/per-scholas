Instructions
Build 10 Routes and a view engine, say anything you want
Make at least 2 different views, and use them both in different routes
Bonus
Dynamically add links to your view engine so you can make anchor tags to link your pages together
Super Bonus
Create a route and view dedicated to displaying a single data resource, such as a single student.

We refer to this as the showroute/view, vs. the indexroute/view.

The key to implementing this feature is route parameters documented in the Route parameters section of the Express Routing guideLinks to an external site..

Basically, you can define a route as follows:

// have some object with a bunch of students
// edit your view engine as needed and don't copy this code
// word for word, bar for bar, its just an idea

app.get('/students/:id', function(req, res) {
  console.log(`The value for the :id route parameter is: ${req.params.id}`);
  res.render('students/show', { studentId: req.params.id, studentName: studentsObject[req.params.id].name });
});
To send a matching route from the browser, you can use an html a tag that generates a hyperlink that looks like:

<a href="/students/ ##studentId##">
  Click for Details for Student ##studentName##>
</a>