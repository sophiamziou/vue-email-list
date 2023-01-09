const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            arrayMail: []
        }
    },
    mounted(){
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.mail = result.data.response,
                this.arrayMail.push(this.mail)
            })
        }
    }
}).mount('#app')