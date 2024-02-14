import styles from "./Buttons.module.css"


const Buttons =({click})=>{
    const value =["1","2","3","4","5","6","7","8","9","C","+","-","*","/","="];
    return(
        <div className={`${styles.buttons}`}>
       {value.map((item)=> <button onClick={()=>click(item)}  className={styles.butt}>{item}</button>)}
        </div>
    )
}
export default Buttons