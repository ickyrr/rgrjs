import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString
} from "graphql";

let counter = 42;

let schema = new GraphQLSchema({

	query: new GraphQLObjectType({

		name: "Query",
		fields: () => ({
			counter: {
				description: "The counter to be displayed.",
				type: GraphQLInt,
				resolve: () => counter,
			},
			message: {
				description: "The message to be displayed.",
				type: GraphQLString,
				resolve: () => "hello graphql",
			}
		}),

	}),

	mutation: new GraphQLObjectType({

		name: "Mutation",
		fields: () => ({
			incrementCounter: {
				type: GraphQLInt,
				resolve: () => ++counter,
			}
		}),

	}),

});

export default schema;
