import UserDetail from './components/user/userDetail.vue'
import UserList from './components/user/userList.vue'
const routes = [
	{
		path: '/users',
		components: {
			main: UserList,
			userDetail: UserDetail
		},
		children: [
	        {
				name: 'user',
				path: 'user/:userId',
				props: true
			}
		]
	}
	
]

export default routes