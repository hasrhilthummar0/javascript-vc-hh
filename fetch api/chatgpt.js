// https://chatgpt.com/backend-anon/accounts/check/v4-2023-04-27?timezone_offset_min=-330

const ChatgptApi = require('axios')
ChatgptApi.get('https://chatgpt.com/backend-anon/accounts/check/v4-2023-04-27?timezone_offset_min=-330')
.then((response)=>{
    console.log('chatgpt data',response.data);
})
.catch((error)=>{
    console.log(error);
})

