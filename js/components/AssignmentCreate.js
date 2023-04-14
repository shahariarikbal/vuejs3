export default {
    template: `
    
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black mt-5">
                <input v-model="newAssigment" placeholder="New assignments..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    
    `,

    data() {
        return {
            newAssigment: ''
        };
    },

    methods: {
        add(){
            this.$emit('add', this.newAssigment);

            this.newAssigment = '';
        }
    }
}