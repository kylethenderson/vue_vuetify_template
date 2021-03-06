import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const options = {
	icons: {
		iconfont: 'mdi',
		},
		theme: {
		themes: {
			light: {
				primary: '#0069bd',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#0069bd',
				success: '#4CAF50',
				warning: '#FFC107',
			}
		}
	}
}


export default new Vuetify(options);
