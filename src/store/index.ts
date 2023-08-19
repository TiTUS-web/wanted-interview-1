import {defineStore} from 'pinia';
import Api from '@/api/Api';
import {TFeature} from '@/types/uniqueness.types';
import {TMainState} from '@/types/store.types';

const $Api: Api = new Api();

export const useMainStore = defineStore({
  id: 'mainState',
  state: () => ({
    features: []
  } as TMainState),
  getters: {
    getUniqueFeaturesByFigaro(state: TMainState): TFeature[] {
      return state.features.filter((feature: TFeature) => {
          return feature.model_name === 'Figaro'
              && feature.description !== null
              && feature.description !== ''
              && feature.image !== null;
      });
    }
  },
  actions: {
    async getUniqueFeaturesModel() {
      try {
        this.features = await $Api.getUniqueFeaturesModel();
      } catch (err) {
        this.features = [];
        return err;
      }
    },
    addFeature() {
      const newFeature: TFeature = {
        description: 'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.',
        image: '/assets/img4.png',
        image_alt: 'нестационарный гироскопический стабилизатор',
        model_name: 'Figaro',
        sorting: 7
      };

      if (this.features.some((feature: TFeature) => feature.description === newFeature.description)) {
        return;
      }

      this.features.splice(1, 0, newFeature);
    },
  }
});