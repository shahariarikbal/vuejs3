import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <assignment-list :assignments="filter.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filter.completed" title="Completed"></assignment-list>
        
        <assignment-create @add="add"></assignment-create>
    `,

    data(){
        return {
            assignments: [
                { name: 'Finish Project', complete: false, id: 1, tag: 'math' },
                { name: 'Read Chapter 4', complete: false, id: 2, tag: 'science' },
                { name: 'Turn in homework', complete: false, id: 3, tag: 'math' },
            ],
            newAssigment:''
        }
    },

    computed: {
        filter(){
            return {
                inProgress:this.assignments.filter(assignment => !assignment.complete),
                completed:this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    methods:{
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })

            this.newAssigment = ''
        }
    }
}