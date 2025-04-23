import styles from "./../styles/form.module.css"

export default function SuccessMessage({isActive}:{isActive: boolean}){
    if(isActive){
        return (
            <div>
                <div className="max-w-lg rounded-xl bg-gray-200 overflow-hidden">
                    <h1 className="px-5 text-gray-700">Sent</h1>
                </div>
                <div className={styles.formFooter}>
                    <button className={styles.button}>Reset</button>
                </div>
            </div>
        )
    }
}