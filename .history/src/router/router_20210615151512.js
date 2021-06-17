import Hello from '../components/Hello'
import Test from '../components/Test'

export const routes = [{
        path: '/',
        component: Hello,
        name: 'hello'
    },
    {
        path: 'test',
        component: Test,
        name: 'test'
    }

];