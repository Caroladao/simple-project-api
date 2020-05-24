const projects = [];

module.exports = {
  checkProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);
  
    if (!project) {
      return res.status(400).json({ error: 'Project not found' });
    }
  
    return next();
  },

  create( req, res ) {
    const { id, title } = req.body;

    const project = {
      id,
      title,
      tasks: []
    };
  
    projects.push(project);
  
    return res.json(project);
  },

  list( req, res ) {
    return res.json(projects);
  },

  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;
  
    const project = projects.find(p => p.id == id);
  
    project.title = title;
  
    return res.json(project);
  },

  delete(req, res) {
    const { id } = req.params;
  
    const projectIndex = projects.findIndex(p => p.id == id);
  
    projects.splice(projectIndex, 1);
  
    return res.send();
  },

  newTask(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.tasks.push(title);

    return res.json(project);
  }
}