import axios from '@/api/axios';
import {AxiosError, AxiosResponse} from 'axios';
import {TFeature, TResponseData} from '@/types/uniqueness.types';

class Api {
    public getUniqueFeaturesModel(): Promise<TFeature[]> {
        return new Promise((resolve, reject) => {
            axios.post('')
                .then((response: AxiosResponse<any, TResponseData>) => {
                    resolve(response.data.features);
                })
                .catch((err: AxiosError) => {
                    reject(err);
                });
        });
    }
}

export default Api;