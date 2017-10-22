var task_id=-1;
var task =  {
    id: -1,
    title: 'New task',
    desc: 'Task description',
    use_dd: false,
    due_date: new Date(),
    files: [],
    create: function(title,desc,due_date,use_dd,files){
 
        this.id = ++task_id;
        this.title = title;
        this.desc = desc;
        this.use_dd = use_dd;
        this.due_date = due_date;  
        this.files = files;
    }

};
var tasks = [
    new task.create('task1','anp publishing softons of Lorem Ipsumnp publishing softons of Lorem Ipsumnp publishing softons of Lorem Ipsum.',new Date(),false,[]),
    new task.create('task2','a2 Lorem Ipsum.',new Date(),false,[])
    
];
