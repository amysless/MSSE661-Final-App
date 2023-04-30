const IDEAS_API = `${BASE_API_URL}/tasks`; // http://localhost:3000/api/ideas

class IdeasService {
  getIdeas = () => _get(IDEAS_API, OPTIONS_WITH_AUTH);

  addIdea = (formData) => _post(IDEAS_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

  deleteIdea = (ideaId) => _delete(`${IDEAS_API}/${ideaId}`, OPTIONS_WITH_AUTH);
}
