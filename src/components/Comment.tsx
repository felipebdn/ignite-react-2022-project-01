import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'



export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)

  
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  
  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/71861370?v=4" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Barbosa</strong>
              <time title='11 de maio às 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Plaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}