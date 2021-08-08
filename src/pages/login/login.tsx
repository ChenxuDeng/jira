interface props{

}
const Login:React.FC<props>=(props)=>{
    const login=(param:{username:string,password:string})=>{
        fetch('http://localhost:3001/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(param)
        }).then(async (response)=>{

        })
    }

    const submitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const username=(event.currentTarget.elements[0] as HTMLInputElement).value
        const password=(event.currentTarget.elements[1] as HTMLInputElement).value
        login({username,password})
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">
                    用户名
                </label>
                <input type="text" id={'username'}/>
            </div>
            <div>
                <label htmlFor="password">
                    密码
                </label>
                <input type="text" id={'password'}/>
            </div>
            <button type={'submit'}>
                登录
            </button>
        </form>
    )
}

export default Login

