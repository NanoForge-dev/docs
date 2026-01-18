# @nanoforge-dev/config

## Functions

### Allow()

```ts
function Allow(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/Allow.d.ts:5

If object has both allowed and not allowed properties a validation error will be thrown.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ArrayContains()

```ts
function ArrayContains(values, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/array/ArrayContains.d.ts:12

Checks if array contains all values from the given array of values.
If null or undefined is given then this function returns false.

#### Parameters

##### values

`any`[]

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ArrayMaxSize()

```ts
function ArrayMaxSize(max, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/array/ArrayMaxSize.d.ts:12

Checks if the array's length is less or equal to the specified number.
If null or undefined is given then this function returns false.

#### Parameters

##### max

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ArrayMinSize()

```ts
function ArrayMinSize(min, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/array/ArrayMinSize.d.ts:12

Checks if the array's length is greater than or equal to the specified number.
If null or undefined is given then this function returns false.

#### Parameters

##### min

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ArrayNotContains()

```ts
function ArrayNotContains(values, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/array/ArrayNotContains.d.ts:12

Checks if array does not contain any of the given values.
If null or undefined is given then this function returns false.

#### Parameters

##### values

`any`[]

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ArrayNotEmpty()

```ts
function ArrayNotEmpty(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/array/ArrayNotEmpty.d.ts:12

Checks if given array is not empty.
If null or undefined is given then this function returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ArrayUnique()

```ts
function ArrayUnique<T>(identifierOrOptions?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/array/ArrayUnique.d.ts:13

Checks if all array's values are unique. Comparison for objects is reference-based.
If null or undefined is given then this function returns false.

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### identifierOrOptions?

`ValidationOptions` | `ArrayUniqueIdentifier`\<`T`\>

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### Contains()

```ts
function Contains(seed, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/Contains.d.ts:12

Checks if the string contains the seed.
If given value is not a string, then it returns false.

#### Parameters

##### seed

`string`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### Default()

```ts
function Default(defaultValue): PropertyDecorator;
```

Defined in: [packages/config/src/default.ts:4](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/config/src/default.ts#L4)

#### Parameters

##### defaultValue

`unknown`

#### Returns

`PropertyDecorator`

***

### Equals()

```ts
function Equals(comparison, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/Equals.d.ts:10

Checks if value matches ("===") the comparison.

#### Parameters

##### comparison

`any`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### Expose()

```ts
function Expose(options?): PropertyDecorator & ClassDecorator;
```

Defined in: node\_modules/.pnpm/class-transformer@0.5.1/node\_modules/class-transformer/types/decorators/expose.decorator.d.ts:9

Marks the given class or property as included. By default the property is included in both
constructorToPlain and plainToConstructor transformations. It can be limited to only one direction
via using the `toPlainOnly` or `toClassOnly` option.

Can be applied to class definitions and properties.

#### Parameters

##### options?

`ExposeOptions`

#### Returns

`PropertyDecorator` & `ClassDecorator`

***

### IsAlpha()

```ts
function IsAlpha(locale?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsAlpha.d.ts:13

Checks if the string contains only letters (a-zA-Z).
If given value is not a string, then it returns false.

#### Parameters

##### locale?

`AlphaLocale`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsAlphanumeric()

```ts
function IsAlphanumeric(locale?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsAlphanumeric.d.ts:13

Checks if the string contains only letters and numbers.
If given value is not a string, then it returns false.

#### Parameters

##### locale?

`AlphanumericLocale`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsArray()

```ts
function IsArray(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsArray.d.ts:10

Checks if a given value is an array

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsAscii()

```ts
function IsAscii(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsAscii.d.ts:12

Checks if the string contains ASCII chars only.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsBase32()

```ts
function IsBase32(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsBase32.d.ts:12

Check if a string is base32 encoded.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsBase58()

```ts
function IsBase58(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsBase58.d.ts:12

Checks if a string is base58 encoded.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsBase64()

```ts
function IsBase64(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsBase64.d.ts:13

Checks if a string is base64 encoded.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsBase64Options`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsBIC()

```ts
function IsBIC(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsBIC.d.ts:12

Check if a string is a BIC (Bank Identification Code) or SWIFT code.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsBoolean()

```ts
function IsBoolean(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsBoolean.d.ts:10

Checks if a value is a boolean.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsBooleanString()

```ts
function IsBooleanString(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsBooleanString.d.ts:12

Checks if a string is a boolean.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsBtcAddress()

```ts
function IsBtcAddress(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsBtcAddress.d.ts:12

Check if the string is a valid BTC address.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsByteLength()

```ts
function IsByteLength(
   min, 
   max?, 
   validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsByteLength.d.ts:12

Checks if the string's length (in bytes) falls in a range.
If given value is not a string, then it returns false.

#### Parameters

##### min

`number`

##### max?

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsCreditCard()

```ts
function IsCreditCard(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsCreditCard.d.ts:12

Checks if the string is a credit card.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsCurrency()

```ts
function IsCurrency(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsCurrency.d.ts:13

Checks if the string is a valid currency amount.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsCurrencyOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsDataURI()

```ts
function IsDataURI(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsDataURI.d.ts:12

Check if the string is a data uri format.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsDate()

```ts
function IsDate(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsDate.d.ts:10

Checks if a value is a date.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsDateString()

```ts
function IsDateString(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsDateString.d.ts:11

Alias for IsISO8601 validator

#### Parameters

##### options?

`IsISO8601Options`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsDecimal()

```ts
function IsDecimal(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsDecimal.d.ts:13

Checks if the string is a valid decimal.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsDecimalOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsDefined()

```ts
function IsDefined(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsDefined.d.ts:10

Checks if value is defined (!== undefined, !== null).

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsDivisibleBy()

```ts
function IsDivisibleBy(num, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/number/IsDivisibleBy.d.ts:10

Checks if value is a number that's divisible by another.

#### Parameters

##### num

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsEAN()

```ts
function IsEAN(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsEAN.d.ts:12

Check if the string is an EAN (European Article Number).
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsEmail()

```ts
function IsEmail(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsEmail.d.ts:13

Checks if the string is an email.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsEmailOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsEmpty()

```ts
function IsEmpty(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsEmpty.d.ts:10

Checks if given value is empty (=== '', === null, === undefined).

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsEnum()

```ts
function IsEnum(entity, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsEnum.d.ts:10

Checks if a given value is the member of the provided enum.

#### Parameters

##### entity

`object`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsEthereumAddress()

```ts
function IsEthereumAddress(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsEthereumAddress.d.ts:12

Check if the string is an Ethereum address using basic regex. Does not validate address checksums.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsFirebasePushId()

```ts
function IsFirebasePushId(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsFirebasePushId.d.ts:12

Checks if the string is a Firebase Push Id
If given value is not a Firebase Push Id, it returns false

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsFQDN()

```ts
function IsFQDN(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsFQDN.d.ts:13

Checks if the string is a fully qualified domain name (e.g. domain.com).
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsFQDNOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsFullWidth()

```ts
function IsFullWidth(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsFullWidth.d.ts:12

Checks if the string contains any full-width chars.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsHalfWidth()

```ts
function IsHalfWidth(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsHalfWidth.d.ts:12

Checks if the string contains any half-width chars.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsHash()

```ts
function IsHash(algorithm, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsHash.d.ts:15

Check if the string is a hash of type algorithm.
Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128',
'tiger160', 'tiger192', 'crc32', 'crc32b']

#### Parameters

##### algorithm

`string`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsHexadecimal()

```ts
function IsHexadecimal(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsHexadecimal.d.ts:12

Checks if the string is a hexadecimal number.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsHexColor()

```ts
function IsHexColor(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsHexColor.d.ts:12

Checks if the string is a hexadecimal color.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsHSL()

```ts
function IsHSL(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsHSL.d.ts:14

Check if the string is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsIBAN()

```ts
function IsIBAN(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsIBAN.d.ts:12

Check if a string is a IBAN (International Bank Account Number).
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsIdentityCard()

```ts
function IsIdentityCard(locale?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsIdentityCard.d.ts:17

Check if the string is a valid identity card code.
locale is one of ['ES', 'zh-TW', 'he-IL', 'ar-TN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
Defaults to 'any'.
If given value is not a string, then it returns false.

#### Parameters

##### locale?

`IdentityCardLocale`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsIn()

```ts
function IsIn(values, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsIn.d.ts:10

Checks if given value is in a array of allowed values.

#### Parameters

##### values

readonly `any`[]

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsInstance()

```ts
function IsInstance(targetType, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/object/IsInstance.d.ts:10

Checks if the value is an instance of the specified object.

#### Parameters

##### targetType

(...`args`) => `any`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsInt()

```ts
function IsInt(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsInt.d.ts:10

Checks if value is an integer.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsIP()

```ts
function IsIP(version?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsIP.d.ts:13

Checks if the string is an IP (version 4 or 6).
If given value is not a string, then it returns false.

#### Parameters

##### version?

`IsIpVersion`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsIpOrFQDN()

```ts
function IsIpOrFQDN(validationOptions?): (object, propertyName) => void;
```

Defined in: [packages/config/src/validators/is-ip-or-fqdn.validator.ts:3](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/config/src/validators/is-ip-or-fqdn.validator.ts#L3)

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

```ts
(object, propertyName): void;
```

##### Parameters

###### object

`object`

###### propertyName

`string`

##### Returns

`void`

***

### IsISBN()

```ts
function IsISBN(version?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsISBN.d.ts:13

Checks if the string is an ISBN (version 10 or 13).
If given value is not a string, then it returns false.

#### Parameters

##### version?

`IsISBNVersion`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsISIN()

```ts
function IsISIN(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsISIN.d.ts:12

Checks if the string is an ISIN (stock/security identifier).
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsISO31661Alpha2()

```ts
function IsISO31661Alpha2(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsISO31661Alpha2.d.ts:10

Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsISO31661Alpha3()

```ts
function IsISO31661Alpha3(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsISO31661Alpha3.d.ts:10

Check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsISO4217CurrencyCode()

```ts
function IsISO4217CurrencyCode(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/is-iso4217-currency-code.d.ts:10

Check if the string is a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) officially assigned currency code.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsISO8601()

```ts
function IsISO8601(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsISO8601.d.ts:15

Checks if the string is a valid ISO 8601 date.
If given value is not a string, then it returns false.
Use the option strict = true for additional checks for a valid date, e.g. invalidates dates like 2019-02-29.

#### Parameters

##### options?

`IsISO8601Options`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsISRC()

```ts
function IsISRC(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsISRC.d.ts:12

Check if the string is a ISRC.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsISSN()

```ts
function IsISSN(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsISSN.d.ts:13

Checks if the string is a ISSN.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsISSNOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsJSON()

```ts
function IsJSON(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsJSON.d.ts:12

Checks if the string is valid JSON (note: uses JSON.parse).
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsJWT()

```ts
function IsJWT(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsJWT.d.ts:12

Checks if the string is valid JWT token.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsLatitude()

```ts
function IsLatitude(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsLatitude.d.ts:10

Checks if a given value is a latitude.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsLatLong()

```ts
function IsLatLong(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsLatLong.d.ts:10

Checks if a value is string in format a "latitude,longitude".

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsLocale()

```ts
function IsLocale(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsLocale.d.ts:12

Check if the string is a locale.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsLongitude()

```ts
function IsLongitude(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsLongitude.d.ts:10

Checks if a given value is a longitude.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsLowercase()

```ts
function IsLowercase(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsLowercase.d.ts:12

Checks if the string is lowercase.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsMACAddress()

#### Call Signature

```ts
function IsMACAddress(optionsArg?, validationOptionsArg?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMacAddress.d.ts:13

Check if the string is a MAC address.
If given value is not a string, then it returns false.

##### Parameters

###### optionsArg?

`IsMACAddressOptions`

###### validationOptionsArg?

`ValidationOptions`

##### Returns

`PropertyDecorator`

#### Call Signature

```ts
function IsMACAddress(validationOptionsArg?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMacAddress.d.ts:14

Check if the string is a MAC address.
If given value is not a string, then it returns false.

##### Parameters

###### validationOptionsArg?

`ValidationOptions`

##### Returns

`PropertyDecorator`

***

### IsMagnetURI()

```ts
function IsMagnetURI(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMagnetURI.d.ts:12

Check if the string is a magnet uri format.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsMilitaryTime()

```ts
function IsMilitaryTime(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMilitaryTime.d.ts:12

Checks if the string represents a time without a given timezone in the format HH:MM (military)
If the given value does not match the pattern HH:MM, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsMimeType()

```ts
function IsMimeType(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMimeType.d.ts:12

Check if the string matches to a valid MIME type format
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsMobilePhone()

```ts
function IsMobilePhone(
   locale?, 
   options?, 
   validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMobilePhone.d.ts:29

Checks if the string is a mobile phone number (locale is either an array of locales (e.g ['sk-SK', 'sr-RS'])
OR one of ['am-Am', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'be-BY',
'bg-BG', 'bn-BD', 'cs-CZ', 'da-DK', 'de-DE', 'de-AT', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-GG', 'en-GH', 'en-HK',
'en-MO', 'en-IE', 'en-IN', 'en-KE', 'en-MT', 'en-MU', 'en-NG', 'en-NZ', 'en-PK', 'en-RW', 'en-SG', 'en-SL', 'en-UG',
'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'es-CL', 'es-CR', 'es-EC', 'es-ES', 'es-MX', 'es-PA', 'es-PY', 'es-UY', 'et-EE',
'fa-IR', 'fi-FI', 'fj-FJ', 'fo-FO', 'fr-BE', 'fr-FR', 'fr-GF', 'fr-GP', 'fr-MQ', 'fr-RE', 'he-IL', 'hu-HU', 'id-ID',
'it-IT', 'ja-JP', 'kk-KZ', 'kl-GL', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'ne-NP', 'nl-BE', 'nl-NL', 'nn-NO', 'pl-PL',
'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN',
'zh-HK', 'zh-MO', 'zh-TW']
If given value is not a string, then it returns false.

#### Parameters

##### locale?

`MobilePhoneLocale`

##### options?

`IsMobilePhoneOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsMongoId()

```ts
function IsMongoId(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMongoId.d.ts:12

Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsMultibyte()

```ts
function IsMultibyte(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsMultibyte.d.ts:12

Checks if the string contains one or more multibyte chars.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsNegative()

```ts
function IsNegative(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/number/IsNegative.d.ts:10

Checks if the value is a negative number smaller than zero.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsNotEmpty()

```ts
function IsNotEmpty(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsNotEmpty.d.ts:10

Checks if given value is not empty (!== '', !== null, !== undefined).

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsNotEmptyObject()

```ts
function IsNotEmptyObject(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/object/IsNotEmptyObject.d.ts:14

Checks if the value is valid Object & not empty.
Returns false if the value is not an object or an empty valid object.

#### Parameters

##### options?

###### nullable?

`boolean`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsNotIn()

```ts
function IsNotIn(values, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsNotIn.d.ts:10

Checks if given value not in a array of allowed values.

#### Parameters

##### values

readonly `any`[]

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsNumber()

```ts
function IsNumber(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsNumber.d.ts:18

Checks if a value is a number.

#### Parameters

##### options?

`IsNumberOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsNumberString()

```ts
function IsNumberString(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsNumberString.d.ts:13

Checks if the string is numeric.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsNumericOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsObject()

```ts
function IsObject(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsObject.d.ts:12

Checks if the value is valid Object.
Returns false if the value is not an object.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsOctal()

```ts
function IsOctal(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsOctal.d.ts:12

Check if the string is a valid octal number.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsOptional()

```ts
function IsOptional(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/IsOptional.d.ts:6

Checks if value is missing and if so, ignores all validators.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsPassportNumber()

```ts
function IsPassportNumber(countryCode, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsPassportNumber.d.ts:12

Check if the string is a valid passport number relative to a specific country code.
If given value is not a string, then it returns false.

#### Parameters

##### countryCode

`string`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsPhoneNumber()

```ts
function IsPhoneNumber(region?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsPhoneNumber.d.ts:20

Checks if the string is a valid phone number. To successfully validate any phone number the text must include
the intl. calling code, if the calling code wont be provided then the region must be set.

#### Parameters

##### region?

`CountryCode`

2 characters uppercase country code (e.g. DE, US, CH) for country specific validation.
If text doesn't start with the international calling code (e.g. +41), then you must set this parameter.

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsPort()

```ts
function IsPort(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsPort.d.ts:10

Check if the string is a valid port number.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsPositive()

```ts
function IsPositive(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/number/IsPositive.d.ts:10

Checks if the value is a positive number greater than zero.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsPostalCode()

```ts
function IsPostalCode(locale?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsPostalCode.d.ts:13

Check if the string is a postal code, in the specified locale.
If given value is not a string, then it returns false.

#### Parameters

##### locale?

`"any"` | `PostalCodeLocale`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsRFC3339()

```ts
function IsRFC3339(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsRFC3339.d.ts:12

Check if the string is a valid RFC 3339 date.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsRgbColor()

```ts
function IsRgbColor(includePercentValues?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsRgbColor.d.ts:14

Check if the string is a rgb or rgba color.
`includePercentValues` defaults to true. If you don't want to allow to set rgb or rgba values with percents, like rgb(5%,5%,5%), or rgba(90%,90%,90%,.3), then set it to false.
If given value is not a string, then it returns false.

#### Parameters

##### includePercentValues?

`boolean`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsSemVer()

```ts
function IsSemVer(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsSemVer.d.ts:12

Check if the string is a Semantic Versioning Specification (SemVer).
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsString()

```ts
function IsString(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/typechecker/IsString.d.ts:10

Checks if a given value is a real string.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsStrongPassword()

```ts
function IsStrongPassword(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsStrongPassword.d.ts:17

Checks if the string is a strong password.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsStrongPasswordOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsSurrogatePair()

```ts
function IsSurrogatePair(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsSurrogatePair.d.ts:12

Checks if the string contains any surrogate pairs chars.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsTaxId()

```ts
function IsTaxId(locale?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/is-tax-id.d.ts:20

Checks if the string is a valid tax ID. Default locale is `en-US`.
If given value is not a string, then it returns false.

Supported locales: bg-BG, cs-CZ, de-AT, de-DE, dk-DK, el-CY, el-GR, en-CA,
en-IE, en-US, es-ES, et-EE, fi-FI, fr-BE, fr-FR, fr-LU, hr-HR, hu-HU, it-IT,
lv-LV, mt-MT, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, sk-SK, sl-SI, sv-SE.

#### Parameters

##### locale?

`string`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsTimeZone()

```ts
function IsTimeZone(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsTimeZone.d.ts:12

Checks if the string represents a valid IANA timezone
If the given value is not a valid IANA timezone, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsUppercase()

```ts
function IsUppercase(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsUppercase.d.ts:12

Checks if the string is uppercase.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsUrl()

```ts
function IsUrl(options?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsUrl.d.ts:13

Checks if the string is a url.
If given value is not a string, then it returns false.

#### Parameters

##### options?

`IsURLOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsUUID()

```ts
function IsUUID(version?, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsUUID.d.ts:13

Checks if the string is a UUID (version 3, 4 or 5).
If given value is not a string, then it returns false.

#### Parameters

##### version?

`UUIDVersion`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### IsVariableWidth()

```ts
function IsVariableWidth(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/IsVariableWidth.d.ts:12

Checks if the string contains variable-width chars.
If given value is not a string, then it returns false.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### Length()

```ts
function Length(
   min, 
   max?, 
   validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/Length.d.ts:12

Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
If given value is not a string, then it returns false.

#### Parameters

##### min

`number`

##### max?

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### Matches()

#### Call Signature

```ts
function Matches(pattern, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/Matches.d.ts:13

Checks if string matches the pattern. Either matches('foo', /foo/i)
If given value is not a string, then it returns false.

##### Parameters

###### pattern

`RegExp`

###### validationOptions?

`ValidationOptions`

##### Returns

`PropertyDecorator`

#### Call Signature

```ts
function Matches(
   pattern, 
   modifiers?, 
   validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/Matches.d.ts:14

Checks if string matches the pattern. Either matches('foo', /foo/i)
If given value is not a string, then it returns false.

##### Parameters

###### pattern

`string`

###### modifiers?

`string`

###### validationOptions?

`ValidationOptions`

##### Returns

`PropertyDecorator`

***

### Max()

```ts
function Max(maxValue, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/number/Max.d.ts:10

Checks if the value is less than or equal to the allowed maximum value.

#### Parameters

##### maxValue

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### MaxDate()

```ts
function MaxDate(date, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/date/MaxDate.d.ts:10

Checks if the value is a date that's before the specified date.

#### Parameters

##### date

`Date` | () => `Date`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### MaxLength()

```ts
function MaxLength(max, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/MaxLength.d.ts:12

Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
If given value is not a string, then it returns false.

#### Parameters

##### max

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### Min()

```ts
function Min(minValue, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/number/Min.d.ts:10

Checks if the value is greater than or equal to the allowed minimum value.

#### Parameters

##### minValue

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### MinDate()

```ts
function MinDate(date, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/date/MinDate.d.ts:10

Checks if the value is a date that's after the specified date.

#### Parameters

##### date

`Date` | () => `Date`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### MinLength()

```ts
function MinLength(min, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/MinLength.d.ts:12

Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
If given value is not a string, then it returns false.

#### Parameters

##### min

`number`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### NotContains()

```ts
function NotContains(seed, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/string/NotContains.d.ts:12

Checks if the string does not contain the seed.
If given value is not a string, then it returns false.

#### Parameters

##### seed

`string`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### NotEquals()

```ts
function NotEquals(comparison, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/NotEquals.d.ts:10

Checks if value does not match ("!==") the comparison.

#### Parameters

##### comparison

`any`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### Transform()

```ts
function Transform(transformFn, options?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-transformer@0.5.1/node\_modules/class-transformer/types/decorators/transform.decorator.d.ts:7

Defines a custom logic for value transformation.

Can be applied to properties only.

#### Parameters

##### transformFn

(`params`) => `any`

##### options?

`TransformOptions`

#### Returns

`PropertyDecorator`

***

### Validate()

#### Call Signature

```ts
function Validate(constraintClass, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/Validate.d.ts:13

Performs validation based on the given custom validation class.
Validation class must be decorated with ValidatorConstraint decorator.

##### Parameters

###### constraintClass

`Function`

###### validationOptions?

`ValidationOptions`

##### Returns

`PropertyDecorator`

#### Call Signature

```ts
function Validate(
   constraintClass, 
   constraints?, 
   validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/Validate.d.ts:14

Performs validation based on the given custom validation class.
Validation class must be decorated with ValidatorConstraint decorator.

##### Parameters

###### constraintClass

`Function`

###### constraints?

`any`[]

###### validationOptions?

`ValidationOptions`

##### Returns

`PropertyDecorator`

***

### ValidateBy()

```ts
function ValidateBy(options, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/ValidateBy.d.ts:11

#### Parameters

##### options

`ValidateByOptions`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ValidateIf()

```ts
function ValidateIf(condition, validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/ValidateIf.d.ts:5

Ignores the other validators on a property when the provided condition function returns false.

#### Parameters

##### condition

(`object`, `value`) => `boolean`

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ValidateNested()

```ts
function ValidateNested(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/ValidateNested.d.ts:5

Objects / object arrays marked with this decorator will also be validated.

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`

***

### ValidatePromise()

```ts
function ValidatePromise(validationOptions?): PropertyDecorator;
```

Defined in: node\_modules/.pnpm/class-validator@0.14.3/node\_modules/class-validator/types/decorator/common/ValidatePromise.d.ts:5

Resolve promise before validation

#### Parameters

##### validationOptions?

`ValidationOptions`

#### Returns

`PropertyDecorator`
