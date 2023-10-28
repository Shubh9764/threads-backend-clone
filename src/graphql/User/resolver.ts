const quries = {
    hello : () => "Hello"
}

const mutations = {
    createUser: async (_:any, {}:{}) => {
        return "random id"
    }
}

export const resolvers = {quries, mutations}