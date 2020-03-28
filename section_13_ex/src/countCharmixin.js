export const countCharmixin = {
    computed:{
        countChar(){
            return this.text + ' (' + this.text.length + ')';
        }
    }
}