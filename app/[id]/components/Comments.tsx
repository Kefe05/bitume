import Comment from "./Comment";
import CreateComment from "./CreatComment";






export default function Comments() {

  return (
    <section className="space-y-4 w-full ">
      <h3 className="text-2xl font-bold">Comments(2)</h3>
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
