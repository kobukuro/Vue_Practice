var app = new Vue({
	el:'#app',
	data:{
		message:'Hello Vue'
	}
})

app.message = 'changed'

var app2 = new Vue({
	el:'#app-2',
	data:{
		message:'You loaded this page on ' + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el:'#app-3',
	data:{
		isExist:true
	}
})

var app4 = new Vue({
	el:'#app-4',
	data:{
		todos:[
			{text:'Study Vue'},
			{text:'Study Vuex'},
			{text:'Study Django ORM'}
		]
	}
})
/*
In the console, enter app4.todos.push({ text: 'New item' }). 
You should see a new item appended to the list.
*/
var app5 = new Vue({
	el:'#app-5',
	data:{
		message:'HELLO'
	},
	methods:{
		ReverseMessage:function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el:'#app-6',
	data:{
		message:'123'
	}
})

var data = {a:1}

var vm = new Vue({
	data:data
})
/*
// Getting the property on the instance
// returns the one from the original data
vm.a == data.a // => true

// Setting the property on the instance
// also affects the original data
vm.a = 2
data.a // => 2

// ... and vice-versa
data.a = 3
vm.a // => 3
*/

var app7 = new Vue({
	el:'#app-7',
	data:{
		isVisible:false
	}
})