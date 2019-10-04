import axios from 'axios';
import env from '../env'
export function getStatistics() {
    return axios.get(`${env.api}/interview/get-statistics`, {
        headers: { token: env.token }
    });
}

export function getApplications() {
    return axios.get(`${env.api}/interview/get-applications`, {
        headers: { token: env.token }
    });
}
