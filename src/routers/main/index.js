import Main from '@views/main/Main.vue'
import Home from '@views/main/home/Home.vue'
import Box from '@views/main/box/Box.vue'
import Publish from '@views/main/publish/Publish.vue'
import Message from '@views/main/message/Message.vue'
import Me from '@views/main/me/Me.vue'

export const main_router = {
    path: '/',
    component: Main,
    children: [
        {
            path: 'home',
            name: 'Home',
            component: Home,
        },
        {
            path: 'box',
            name: 'Box',
            component: Box,
        },
        {
            path: 'publish',
            name: 'Publish',
            component: Publish,
        },
        {
            path: 'message',
            name: 'Message',
            component: Message,
        },
        {
            path: 'me',
            name: 'Me',
            component: Me,
        },
    ]
}