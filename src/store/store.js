import Vue from 'vue';
import Vuex from 'vuex';
import fish from '../assets/fish.jpg'
import pure from '../assets/pure.jpg'
import grechka from '../assets/grechka.jpg'

import kotleta from '../assets/kotleta.jpg'
import tea from '../assets/tea.jpg'
import zapekanka from '../assets/zapekanka.jpg'

import kakao from '../assets/kakao.jpeg'
import makaronu from '../assets/makaronu.jpeg'
import sup from '../assets/sup.jpg'


Vue.use(Vuex)

export
const store = new Vuex.Store({
    state :{
        allCategories:[
            {id:1,name:'Жареная рыба',price:12.5,url:fish,description:"Речная рыба, жаренная в мучной панировке с пряностями."},
            {id:2,name:'Порция пюре',price:18,url:pure,description:"Употребление одной порции картофельного пюре компенсирует 50% суточной потребности организма во входящих в состав пюре витаминах и микроэлементах.\n"},
            {id:3,name:'Порция гречки',price:16,url:grechka, description:"Порция гречневой каши содержит высококачественный белок и углеводы, несущие энергию и минимум жира – это идеально сбалансированный состав. Натуральные компоненты, богатые витаминами и микроэлементами, нормализуют обмен веществ и дарят заряд бодрости и энергии. Можно использовать на завтрак, на обед и на ужин."},
            {id:4,name:'Куриная котлета',price:14,url:kotleta,description:"Котлеты куриные, содержат большое количество минералов. Это калий, магний, фосфор, железо. Витамины в куриной котлете присутствуют: группы В, А и Е. Куриная котлета – это легкоусвояемые протеины, его рекомендуют для спортивного питания, чтобы нарастить мышечную массу." },
            {id:5,name:'Чай с сахаром',price:7,url:tea,description:"Черный чай - напиток особенный. Он хорош как сам по себе, так и с добавлением лимона, молока или пряностей.Выпив стакан сладкого чая, можно притупить чувство голода, кроме того, это заряд  бодрости, ведь с растворенным в чае сахаром, вы получаете быстрые углеводы."},
            {id:6,name:'Творожная запеканка',price:12,url:zapekanka, description:"Творожная запеканка очень вкусное и при этом весьма полезное блюдо. Концентрация кальция в ней гораздо выше, чем например в простом твороге (не прошедшим тепловую обработку). А главное, творог, прошедший тепловую обработку содержит кальций  в максимально усвояемом виде для человека. "},
            {id:7,name:'Какао',price:14,url:kakao,description:"Какао представляет собой полезный и вкусный напиток, состоящий из какао-порошка, молока и воды. Подается в горячем или холодном виде. " },
            {id:8,name:'Порция макарон',price:7,url:makaronu,description:"Макароны – это блюдо, давно получившее известность во всем мире.Макароны обладают не только отличными вкусовыми качествами, но и полезными свойствами."},
            {id:9,name:'Порция горохового супа',price:12,url:sup, description:"Гороховый суп - одно из самых популярных и любимых нами блюд из гороха. У этого супа необыкновенный аромат, а потрясающий вкус всегда. навивает воспоминания из детства."}
        ],

    cartItems:[],
    cartItemCount:0,
},
mutations:{
        addToCart(state, payload){
            let item = payload;
            item = {...item,quantity:1}
            if(state.cartItems.length>0){
                let bool = state.cartItems.some(i=>i.id === item.id)
                if (bool){
                    let itemIndex = state.cartItems.findIndex(el => el.id ===item.id)
                    state.cartItems[itemIndex]["quantity"] +=1;
                }else {
                    state.cartItems.push(item)
                }
                } else {
                    state.cartItems.push(item)
                }
            state.cartItemCount++
            },
    removeItem(state,payload){
        if (state.cartItems.length>0){
            let bool = state.cartItems.some(i=>i.id === payload.id)
        if (bool) {
            let index = state.cartItems.findIndex(el => el.id === payload.id)
            if (state.cartItems[index]["quantity"] !==0) {
                state.cartItems[index]["quantity"] -=1
                state.cartItemCount--
            }
            if (state.cartItems[index]["quantity"]===0){
                state.cartItems.splice(index,1)
            }

        }
        }
    }
        },
    actions:{
        addToCart:(context,payload) =>{
            context.commit("addToCart",payload)
        },
        removeItem:(context,payload) =>{
            context.commit("removeItem",payload)
        }

    }
})