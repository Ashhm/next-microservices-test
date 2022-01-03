## To store shared code

## Structure
src/common
├── constants
│   └── settings.ts
├── decorators
│   ├── metadata
│   │   └── user-types.decorator.ts
│   ├── requests
│   │   └── logged-in-user.decorator.ts
│   └── validations
│       ├── UserExists.ts
│       └── UniqueUserEmail.ts
├── exceptions
│   └── http-exception.filter.ts
├── guards
│   └── user-types.guard.ts
├── helpers
│   ├── exceptions
│   │   └── validation.helper.ts
│   ├── responses
│   │   ├── error.helper.ts
│   │   └── success.helper.ts
│   ├── number.helper.ts
│   ├── array.helper.ts
│   ├── query.helper.ts
│   ├── request.helper.ts
│   └── string.helper.ts
├── interceptors
│   └── http-cache.interceptor.ts
├── interfaces
│   ├── inputs.interface.ts
│   └── search.interface.ts
├── middleware
│   └── models
│       └── user.middleware.ts
├── pipes
│   ├── models
│   │   └── user-entity.pipe.ts
│   ├── search.pipe.ts
│   └── validation.pipe.ts
└── serializers
    ├── responses
    │   ├── error.serializer.ts
    │   └── success.serializer.ts
    ├── validation
    │   └── validation-error.serializer.ts
    └── model.serializer.ts
