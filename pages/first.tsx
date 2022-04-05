import Link from 'next/link'
import React, { useEffect, useState, SetStateAction } from 'react'
import styles from '../styles/first.module.scss'
const First = () => {
    let [idList, setIdList] = useState([1] as number[])



    const onclickHandler = (action: string) => {
        if (action === 'add') {
            setIdList(idList = [...idList, idList.length + 1])
        } else if (action === 'remove') {
            setIdList(idList = idList.filter((id, index) =>
                index < idList.length - 1
            ))
        }
        return action
    }
    return (
        <div className={styles.first_page}>
            first
            <div className={styles['btn-section-control']}>
                <button className={styles['btn-add']} onClick={() => onclickHandler('add')}>
                    Add list
                </button>
                <button className={styles['btn-remove']} onClick={() => onclickHandler('remove')}>
                    Remove list from last
                </button>
            </div>
            <div className={styles['list-wrap']}>
                {idList.map((id, index) => {
                    return (
                        <div>
                            <Link href={`/firstItem/${id}`}><a className={`${styles[`btn-list`]} ${id % 2 == 0 ? styles.even : ''}`}>
                                <div>
                                    {index + 1} value : {id}
                                </div>
                            </a></Link>
                        </div>)
                })}
            </div>

        </div>

    )

}
export default First