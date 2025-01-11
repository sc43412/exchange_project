import { createClient } from 'redis';

async function main(){
    const client = createClient()
    await client.connect()
    await client.set('key','value')
    const value = await client.get('key')
    console.log(value)
    await client.disconnect()
}

main().then((result)=>{
 
}).catch((err)=>{
console.log(err)
})