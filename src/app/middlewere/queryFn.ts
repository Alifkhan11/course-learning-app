import { Model } from "mongoose"

export type QueryParameter = {
    page?: number,
    limit?: number,
    searchTerm?: string
}

const QueryBilder = async (model: typeof Model, query: QueryParameter) => {
    let mongoQuery = model.find()
    const searchableFields = ['title', 'name', 'description', 'code', 'email']

    if (query.searchTerm) {
        const search = {
            $or: searchableFields.map((field) => ({
                [field]: { $regex: query.searchTerm, $options: 'i' }
            }))
        }
        mongoQuery = mongoQuery.find(search)
    }

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    const skip = (page - 1) * limit
    mongoQuery = mongoQuery.skip(skip).limit(limit)


    const resualt = await mongoQuery
    const total = await model.countDocuments(mongoQuery.getFilter())
    const totalPage = Math.ceil(total / limit)

    return {
        resualt,
        totalItem:total,
        totalPage,
        limit,
    }
}

export default QueryBilder