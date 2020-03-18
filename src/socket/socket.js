import store from '../store';
import { updateMachineHealth } from '../actions'

const ws = new WebSocket('ws://localhost:1337');

ws.onopen = function open(){
    console.log('WebScoket is established');
};

ws.onmessage = function msg(event){
    console.log(`[SOCKET_DATA] : ${event.data}`);
    
    const { data } = event;
    const msg = JSON.parse(data);

    if(msg){
        console.log(msg.type);
        switch ( msg.type ) {
            case 'HEALTH_UPDATE':
                store.dispatch(updateMachineHealth(
                    msg.id,
                    msg.health
                ));
                break;
            default:
                console.log('[SOCKET] invalid type');
                break;
        }
    }
};