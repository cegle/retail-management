import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => {
        require(['../views/Home.vue'], resolve)
      },
      redirect: '/home/homepage',
      children: [{
          path: '/home/homepage',
          name: 'homepage',
          component: resolve => {
            require(['../views/index/Homepage.vue'], resolve)
          }
        },
        {
          path: '/home/logs',
          name: 'logs',
          component: resolve => {
            require(['../views/index/Logs.vue'], resolve)
          }
        },
        {
          path: '/home/account',
          name: 'account',
          component: resolve => {
            require(['../views/index/Account.vue'], resolve)
          }
        },
        {
          path: '/home/system',
          name: 'system',
          component: resolve => {
            require(['../views/index/System.vue'], resolve)
          }
        },
        {
          path: '/goods/list',
          name: 'goodsList',
          component: resolve => {
            require(['../views/goods/List'], resolve)
          }
        },
        {
          path: '/goods/add', //添加商品
          name: 'add',
          component: resolve => {
            require(['../views/goods/Add'], resolve)
          },
        },
        {
          path: '/goods/recycle', //商品回收站
          name: 'recycle',
          component: resolve => {
            require(['../views/goods/Recycle'], resolve)
          },
        },
        {
          path: '/goods/comment', //商品评价
          name: 'comment',
          component: resolve => {
            require(['../views/goods/Comment'], resolve)
          },
        },
        {
          path: '/goods/comment/detail', //商品详情
          name: 'commentDetail',
          component: resolve => {
            require(['../views/goods/CommentDetail'], resolve)
          },
        },
        {
          path: '/goods/category', //商品分类
          name: 'category',
          component: resolve => {
            require(['../views/goods/Category'], resolve)
          },
        },
        {
          path: '/goods/category/addCategory', //添加商品分类
          name: 'addCategory',
          component: resolve => {
            require(['../views/goods/AddCategory'], resolve)
          },
        },
        {
          path: '/goods/type', //商品类型
          name: 'type',
          component: resolve => {
            require(['../views/goods/Type'], resolve)
          },
        },
        {
          path: '/goods/type/prop/:id', //商品类型属性
          name: 'prop',
          component: resolve => {
            require(['../views/goods/Prop'], resolve)
          },
        },
        {
          path: '/goods/type/addProp', //添加商品类型属性
          name: 'addProp',
          component: resolve => {
            require(['../views/goods/AddProp'], resolve)
          },
        },
        {
          path: '/goods/type/params/:id', //商品参数列表
          name: 'params',
          component: resolve => {
            require(['../views/goods/Params'], resolve)
          },
        },
        {
          path: '/goods/type/addParams', //添加商品参数
          name: 'addParams',
          component: resolve => {
            require(['../views/goods/AddParams'], resolve)
          },
        },
        {
          path: '/goods/brand', //商品品牌
          name: 'brand',
          component: resolve => {
            require(['../views/goods/Brand'], resolve)
          },
        },
        {
          path: '/goods/brand/addBrand', //添加商品品牌
          name: 'addBrand',
          component: resolve => {
            require(['../views/goods/AddBrand'], resolve)
          },
        },
        {
          path: '/goods/image', //商品图片库
          name: 'image',
          component: resolve => {
            require(['../views/goods/Image'], resolve)
          },
        },
        {
          path: '/goods/image/addImage', //添加商品图片库
          name: 'addImage',
          component: resolve => {
            require(['../views/goods/AddImage'], resolve)
          },
        },
        {
          path: '/goods/image/:id', //相册图片列表
          name: 'imageList',
          component: resolve => {
            require(['../views/goods/ImageList'], resolve)
          },
        }
      ]
    }
  ]
})
