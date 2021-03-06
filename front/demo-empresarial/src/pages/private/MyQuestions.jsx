import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserQuestion , deleteQuestion} from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"



 
const MyQuestions = () => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)
    const {
        isLoading,
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)
    
    useEffect(() =>{
        dispatch(getUserQuestion(user.uid));
       console.log(myQuestions)
    },[])

    const onDelete = (id) =>{
        dispatch(deleteQuestion(id));
    }


    return (
        <section>
        {myQuestions && myQuestions.map((question)=>{
            return(
                <QuestionsPrivate key={question.id} question={question} onDelete={onDelete}/>
                )
        })}
        
        
        {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}

        </section>
    )
}

export default MyQuestions
