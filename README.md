# Fast-JWT for NextJS
This module provides a custom build of `fast-jwt` that is compatible with NextJS v15. Due to the limitations of NextJS v15, which lacks support for a full-fledged NodeJS crypto API, this module replaces the native `node:crypto` module with `browserify-crypto` to enable JWT functionality within the NextJS environment.

## Features
- **JWT Support in NextJS**: Enables the use of JSON Web Tokens within NextJS v15 projects.
- **Browserify Crypto**: Uses `browserify-crypto` to mimic NodeJS's crypto module, ensuring compatibility with browser environments.
- **ESM Bundle**: Provides an ECMAScript Module (ESM) bundle that can be easily integrated with modern JavaScript projects.

## Installation
To install the module, run the following command in your project directory:

```bash
npm install fast-jwt-nextjs
```

## Usage
Here is a simple example of how to use the JWT functionalities provided by this module:

```typescript
import { createSigner, createVerifier } from 'fast-jwt-nextjs';

const signer = createSigner({ key: 'secret' });
const verifier = createVerifier({ key: 'secret' });

// To sign a payload
const token = signer({ sub: '1234567890' });
console.log('JWT:', token);

// To verify a token
try {
  const payload = verifier(token);
  console.log('Payload:', payload);
} catch (error) {
  console.error('Invalid token:', error);
}

```

## Configuration
No additional configuration is required. The package is ready to use out of the box with NextJS v15 and other environments that support ESM.

## Contributing
Contributions to improve the compatibility or extend the functionality of this module are welcome. Please feel free to fork the repository, make changes, and submit a pull request.

## Version Semantics
This package version follows the version semantics of the parent package `fast-jwt`

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
