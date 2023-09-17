import {reactive} from 'vue';

export const store = reactive({
    name: '', 
    occupation: '',
    organization: '',
    email: '',
    phone: '',
    clear() {
        this.name = '';
        this.occupation = '';
        this.organization = '';
        this.email = '';
        this.phone = '';
        
    }
});