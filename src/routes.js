import UserDetail from './components/user/userDetail.vue'
import UserDetailProfile from './components/user/userDetailProfile.vue'
import UserDetailCompany from './components/user/userDetailCompany.vue'
import UserDetailQuickPeek from './components/user/userDetailQuickPeek.vue'
import UserList from './components/user/userList.vue'

import Posts from './components/posts/postsList.vue'
import PostDetail from './components/posts/postDetail.vue'

const routes = [{
    path: '/',
    component: Posts
  },
  {
    name: 'users',
    path: '/users',
    component: UserList,
    children: [{
      name: 'quickPeek',
      path: ':userId',
      component: UserDetailQuickPeek,
      props: true
    }]
  },
  {
    name: 'user',
    path: '/users/:userId/detail',
    component: UserDetail,
    props: true,
    children: [{
        name: 'user-details-profile',
        path: 'profile',
        component: UserDetailProfile
      },
      {
        name: 'user-details-company',
        path: 'company',
        component: UserDetailCompany
      },
    ]
  },
  {
    name: 'post-details',
    path: '/posts/:postId/detail',
    component: PostDetail,
    props: true
  },
]

export default routes
