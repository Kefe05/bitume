import Comment from "./Comment";
import CreateComment from "./CreatComment";






export default function Comments() {

  return (
    <section className="space-y-4">
          <h3>Comments(2)</h3>
          <div className="flex flex-col gap-2">
              {
                  [1, 2].map((num) => <Comment key={num} />)
              }
          </div>
          <hr />
          <CreateComment />
          
        </section>
  )
}
