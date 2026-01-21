import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql', // URL твоей GraphQL схемы Strapi
  documents: './graphql/queries/**/*.ts', // где лежат твои gql-запросы и фрагменты
  generates: {
    './graphql/generated.ts': {
      plugins: [
        'typescript', // базовые типы схемы
        'typescript-operations', // типы для запросов и мутаций
        'typescript-graphql-request', // функции для graphql-request
      ],
      config: {
        rawRequest: false, // отключает "raw" ответ
        // skipTypename: false,       // включаем __typename
        // nonOptionalTypename: true, // гарантирует, что __typename есть только там, где реально нужно
        // avoidOptionals: {
        //   field: true,  // убираем ненужные optionals, например в union/error
        // },
        // mappers: {
        //   Error: 'never', // убираем Error из union
        // },
        skipTypename: false,
        avoidOptionals: {
          field: true, // убирает optionals (title?: string → title: string)
          inputValue: false,
          object: true,
        },
        immutableTypes: false,
        namingConvention: {
          enumValues: 'camelCase',   // 'keep' = оставляет оригинал, можно менять на camelCase / pascalCase / snakeCase
        },
      },
    },
  },
};

export default config;
