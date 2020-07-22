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

var obj = {
	foo:'bar'
}
//下面這個會讓obj變成read-only，無法修改值
Object.freeze(obj)

var app8 = new Vue({
	el:'#app-8',
	data:obj
})

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
/*
In addition to data properties, 
Vue instances expose a number of useful instance properties and methods. 
These are prefixed with $ to differentiate them from user-defined properties. 
For example:

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
})
*/

vm.$watch('a', function (newValue, oldValue) {
	// This callback will be called when `vm.a` changes
	console.log('hello')
  })

//the created hook can be used to run code after an instance is created:
  new Vue({
	data: {
	  a: 1
	},
	created: function () {
	  // `this` points to the vm instance
	  console.log('a is: ' + this.a)
	}
  })

/*Javascript Array.prototype.map() & Arrow function expressions

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32] 
*/