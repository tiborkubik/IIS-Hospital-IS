import axios_instance from "@/http-common";

class HealthConcernsService {
  getAll() {
    return axios_instance.get("api/health-concerns/");
  }

  getAllByPatient(patientId) {
    return axios_instance.get("api/health-concerns/", {
      'params': {
          ...({ 'patient': patientId }),
      }
    })
  }

  getFiltered(filter) {
    const patient_name = filter.patient_name;
    const state_of_concern = filter.state_of_concern;

    return http.get("/health-concerns/",{
      'params': {
        ...(patient_name !== -1 ? { 'patient': patient_name} : {}),
        ...(state_of_concern !== -1 ? { 'state': state_of_concern} : {}),
      }
    })
  }

  get(id) {
    return axios_instance.get(`api/health-concerns/${id}/`);
  }

  create(data) {
    return axios_instance.post("api/health-concerns/", data);
  }

  update(id, data) {
    return axios_instance.put(`api/health-concerns/${id}/`, data);
  }

  delete(id) {
    return axios_instance.delete(`api/health-concerns/${id}/`);
  }

  deleteAll() {
    return axios_instance.delete(`api/health-concerns/`);
  }
}

export default new HealthConcernsService();
