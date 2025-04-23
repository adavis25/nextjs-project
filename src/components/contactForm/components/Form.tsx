import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./../styles/form.module.css"

interface IFormInput{
    name: string
    email: string
    message: string
}

export default function Form(isActive){
    
    const {register, reset, handleSubmit, formState: {errors}} = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
    }

    if(isActive){
        return(
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label className={styles.label}>Name</label>
                <input {...register("name",{required:true})} className={styles.input}/>
                {errors.name?.type === "required" && (
                    <p className={styles.errorMessage}>Name is required</p>
                )}
                <label className={styles.label}>Email</label>
                <input {...register("email",{required:true})} className={styles.input}/>
                {errors.email?.type === "required" && (
                    <p className={styles.errorMessage}>Email is required</p>
                )}
                <label className={styles.label}>Message</label>
                <textarea {...register("message",{required:true})} className={styles.input}/>
                {errors.message?.type === "required" && (
                    <p className={styles.errorMessage}>Message is required</p>
                )}
                <div className={styles.formFooter}>
                    <button className={styles.button} type="submit">Save</button>
                    <button className={styles.button} type="reset">Reset</button>
                </div>
            </form>
        )
    }
}