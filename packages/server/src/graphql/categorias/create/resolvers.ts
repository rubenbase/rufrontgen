import { ResolverMap } from './../../../types/graphql-utils';
import { Categorias } from './../../../models/Categorias';


export const resolvers: ResolverMap = {
    Mutation: {
        createCategorias: async (_, {input: {name}}) => {
            await Categorias.create({
                name
            }).save();

            return true;
        }
    }
};