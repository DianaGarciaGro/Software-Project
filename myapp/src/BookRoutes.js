import { Route, Routes } from "react-router-dom";
import { NewBook } from "./Pages/NewBook";
import { BookList } from './Pages/BookList';
import { Book } from "./Pages/Book";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
    return(
        <>
            <BookLayout />
            <Routes>
                <Route index element= {<BookList />}/>
                <Route path= ":id" element= {<Book />}/>
                <Route path= "new" element= {<NewBook />}/>
            </Routes>
        </>
    )
}