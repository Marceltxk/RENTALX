import { Category } from "../model/category"


interface ICategoriesRepository {
    findByName(name: string): Category
}