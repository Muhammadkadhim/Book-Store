import { Book } from "./";

export default function BookList(props) {
    return (
        <div className="w-full px-10 flex flex-wrap justify-center gap-10">
            {props.books
                ? props.books.map((book, index) => {
                      return (
                          <Book
                              book={book}
                              index={index}
                              category={props.category}
                              subCategory={props.subCategory}
                              key={index}
                          />
                      );
                  })
                : ""}
        </div>
    );
}
