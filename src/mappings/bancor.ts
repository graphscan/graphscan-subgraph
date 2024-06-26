import { BigInt, ByteArray, Address, Bytes, crypto, log, BigDecimal } from '@graphprotocol/graph-ts'

export function hexToBI(hexString: string): BigInt {
  return BigInt.fromUnsignedBytes(changetype<Bytes>(Bytes.fromHexString(hexString).reverse()))
}
function BIZERO(): BigInt {
  return BigInt.fromI32(0)
}
// INIT CONSTANTS
let maxExpArray: BigInt[] = new Array<BigInt>(127)
maxExpArray[32] = hexToBI('0x1c35fedd14ffffffffffffffffffffffff')
maxExpArray[33] = hexToBI('0x1b0ce43b323fffffffffffffffffffffff')
maxExpArray[34] = hexToBI('0x19f0028ec1ffffffffffffffffffffffff')
maxExpArray[35] = hexToBI('0x18ded91f0e7fffffffffffffffffffffff')
maxExpArray[36] = hexToBI('0x17d8ec7f0417ffffffffffffffffffffff')
maxExpArray[37] = hexToBI('0x16ddc6556cdbffffffffffffffffffffff')
maxExpArray[38] = hexToBI('0x15ecf52776a1ffffffffffffffffffffff')
maxExpArray[39] = hexToBI('0x15060c256cb2ffffffffffffffffffffff')
maxExpArray[40] = hexToBI('0x1428a2f98d72ffffffffffffffffffffff')
maxExpArray[41] = hexToBI('0x13545598e5c23fffffffffffffffffffff')
maxExpArray[42] = hexToBI('0x1288c4161ce1dfffffffffffffffffffff')
maxExpArray[43] = hexToBI('0x11c592761c666fffffffffffffffffffff')
maxExpArray[44] = hexToBI('0x110a688680a757ffffffffffffffffffff')
maxExpArray[45] = hexToBI('0x1056f1b5bedf77ffffffffffffffffffff')
maxExpArray[46] = hexToBI('0x0faadceceeff8bffffffffffffffffffff')
maxExpArray[47] = hexToBI('0x0f05dc6b27edadffffffffffffffffffff')
maxExpArray[48] = hexToBI('0x0e67a5a25da4107fffffffffffffffffff')
maxExpArray[49] = hexToBI('0x0dcff115b14eedffffffffffffffffffff')
maxExpArray[50] = hexToBI('0x0d3e7a392431239fffffffffffffffffff')
maxExpArray[51] = hexToBI('0x0cb2ff529eb71e4fffffffffffffffffff')
maxExpArray[52] = hexToBI('0x0c2d415c3db974afffffffffffffffffff')
maxExpArray[53] = hexToBI('0x0bad03e7d883f69bffffffffffffffffff')
maxExpArray[54] = hexToBI('0x0b320d03b2c343d5ffffffffffffffffff')
maxExpArray[55] = hexToBI('0x0abc25204e02828dffffffffffffffffff')
maxExpArray[56] = hexToBI('0x0a4b16f74ee4bb207fffffffffffffffff')
maxExpArray[57] = hexToBI('0x09deaf736ac1f569ffffffffffffffffff')
maxExpArray[58] = hexToBI('0x0976bd9952c7aa957fffffffffffffffff')
maxExpArray[59] = hexToBI('0x09131271922eaa606fffffffffffffffff')
maxExpArray[60] = hexToBI('0x08b380f3558668c46fffffffffffffffff')
maxExpArray[61] = hexToBI('0x0857ddf0117efa215bffffffffffffffff')
maxExpArray[62] = hexToBI('0x07ffffffffffffffffffffffffffffffff')
maxExpArray[63] = hexToBI('0x07abbf6f6abb9d087fffffffffffffffff')
maxExpArray[64] = hexToBI('0x075af62cbac95f7dfa7fffffffffffffff')
maxExpArray[65] = hexToBI('0x070d7fb7452e187ac13fffffffffffffff')
maxExpArray[66] = hexToBI('0x06c3390ecc8af379295fffffffffffffff')
maxExpArray[67] = hexToBI('0x067c00a3b07ffc01fd6fffffffffffffff')
maxExpArray[68] = hexToBI('0x0637b647c39cbb9d3d27ffffffffffffff')
maxExpArray[69] = hexToBI('0x05f63b1fc104dbd39587ffffffffffffff')
maxExpArray[70] = hexToBI('0x05b771955b36e12f7235ffffffffffffff')
maxExpArray[71] = hexToBI('0x057b3d49dda84556d6f6ffffffffffffff')
maxExpArray[72] = hexToBI('0x054183095b2c8ececf30ffffffffffffff')
maxExpArray[73] = hexToBI('0x050a28be635ca2b888f77fffffffffffff')
maxExpArray[74] = hexToBI('0x04d5156639708c9db33c3fffffffffffff')
maxExpArray[75] = hexToBI('0x04a23105873875bd52dfdfffffffffffff')
maxExpArray[76] = hexToBI('0x0471649d87199aa990756fffffffffffff')
maxExpArray[77] = hexToBI('0x04429a21a029d4c1457cfbffffffffffff')
maxExpArray[78] = hexToBI('0x0415bc6d6fb7dd71af2cb3ffffffffffff')
maxExpArray[79] = hexToBI('0x03eab73b3bbfe282243ce1ffffffffffff')
maxExpArray[80] = hexToBI('0x03c1771ac9fb6b4c18e229ffffffffffff')
maxExpArray[81] = hexToBI('0x0399e96897690418f785257fffffffffff')
maxExpArray[82] = hexToBI('0x0373fc456c53bb779bf0ea9fffffffffff')
maxExpArray[83] = hexToBI('0x034f9e8e490c48e67e6ab8bfffffffffff')
maxExpArray[84] = hexToBI('0x032cbfd4a7adc790560b3337ffffffffff')
maxExpArray[85] = hexToBI('0x030b50570f6e5d2acca94613ffffffffff')
maxExpArray[86] = hexToBI('0x02eb40f9f620fda6b56c2861ffffffffff')
maxExpArray[87] = hexToBI('0x02cc8340ecb0d0f520a6af58ffffffffff')
maxExpArray[88] = hexToBI('0x02af09481380a0a35cf1ba02ffffffffff')
maxExpArray[89] = hexToBI('0x0292c5bdd3b92ec810287b1b3fffffffff')
maxExpArray[90] = hexToBI('0x0277abdcdab07d5a77ac6d6b9fffffffff')
maxExpArray[91] = hexToBI('0x025daf6654b1eaa55fd64df5efffffffff')
maxExpArray[92] = hexToBI('0x0244c49c648baa98192dce88b7ffffffff')
maxExpArray[93] = hexToBI('0x022ce03cd5619a311b2471268bffffffff')
maxExpArray[94] = hexToBI('0x0215f77c045fbe885654a44a0fffffffff')
maxExpArray[95] = hexToBI('0x01ffffffffffffffffffffffffffffffff')
maxExpArray[96] = hexToBI('0x01eaefdbdaaee7421fc4d3ede5ffffffff')
maxExpArray[97] = hexToBI('0x01d6bd8b2eb257df7e8ca57b09bfffffff')
maxExpArray[98] = hexToBI('0x01c35fedd14b861eb0443f7f133fffffff')
maxExpArray[99] = hexToBI('0x01b0ce43b322bcde4a56e8ada5afffffff')
maxExpArray[100] = hexToBI('0x019f0028ec1fff007f5a195a39dfffffff')
maxExpArray[101] = hexToBI('0x018ded91f0e72ee74f49b15ba527ffffff')
maxExpArray[102] = hexToBI('0x017d8ec7f04136f4e5615fd41a63ffffff')
maxExpArray[103] = hexToBI('0x016ddc6556cdb84bdc8d12d22e6fffffff')
maxExpArray[104] = hexToBI('0x015ecf52776a1155b5bd8395814f7fffff')
maxExpArray[105] = hexToBI('0x015060c256cb23b3b3cc3754cf40ffffff')
maxExpArray[106] = hexToBI('0x01428a2f98d728ae223ddab715be3fffff')
maxExpArray[107] = hexToBI('0x013545598e5c23276ccf0ede68034fffff')
maxExpArray[108] = hexToBI('0x01288c4161ce1d6f54b7f61081194fffff')
maxExpArray[109] = hexToBI('0x011c592761c666aa641d5a01a40f17ffff')
maxExpArray[110] = hexToBI('0x0110a688680a7530515f3e6e6cfdcdffff')
maxExpArray[111] = hexToBI('0x01056f1b5bedf75c6bcb2ce8aed428ffff')
maxExpArray[112] = hexToBI('0x00faadceceeff8a0890f3875f008277fff')
maxExpArray[113] = hexToBI('0x00f05dc6b27edad306388a600f6ba0bfff')
maxExpArray[114] = hexToBI('0x00e67a5a25da41063de1495d5b18cdbfff')
maxExpArray[115] = hexToBI('0x00dcff115b14eedde6fc3aa5353f2e4fff')
maxExpArray[116] = hexToBI('0x00d3e7a3924312399f9aae2e0f868f8fff')
maxExpArray[117] = hexToBI('0x00cb2ff529eb71e41582cccd5a1ee26fff')
maxExpArray[118] = hexToBI('0x00c2d415c3db974ab32a51840c0b67edff')
maxExpArray[119] = hexToBI('0x00bad03e7d883f69ad5b0a186184e06bff')
maxExpArray[120] = hexToBI('0x00b320d03b2c343d4829abd6075f0cc5ff')
maxExpArray[121] = hexToBI('0x00abc25204e02828d73c6e80bcdb1a95bf')
maxExpArray[122] = hexToBI('0x00a4b16f74ee4bb2040a1ec6c15fbbf2df')
maxExpArray[123] = hexToBI('0x009deaf736ac1f569deb1b5ae3f36c130f')
maxExpArray[124] = hexToBI('0x00976bd9952c7aa957f5937d790ef65037')
maxExpArray[125] = hexToBI('0x009131271922eaa6064b73a22d0bd4f2bf')
maxExpArray[126] = hexToBI('0x008b380f3558668c46c91c49a2f8e967b9')
maxExpArray[127] = hexToBI('0x00857ddf0117efa215952912839f6473e6')
let MAX_NUM = hexToBI('0x0200000000000000000000000000000000')
let MAX_RATIO = BigInt.fromI32(1000000)
let MAX_PRECISION: u8 = 127
let MIN_PRECISION: u8 = 32
let FIXED_1 = hexToBI('0x80000000000000000000000000000000')
let OPT_LOG_MAX_VAL = hexToBI('0x015bf0a8b1457695355fb8ac404e7a79e3')
let ONE = BigInt.fromI32(1)
let OPT_EXP_MAX_VAL = hexToBI('0x015bf0a8b1457695355fb8ac404e7a79e3')
let FIXED_2 = hexToBI('0x0100000000000000000000000000000000')
let LN2_NUMERATOR = hexToBI('0x03f80fe03f80fe03f80fe03f80fe03f8')
let LN2_DENOMINATOR = hexToBI('0x05b9de1d10bf4103d647b0955897ba80')

export function calculateSaleReturn(
  _supply: BigInt,
  _reserveBalance: BigInt,
  _reserveRatio: BigInt,
  _sellAmount: BigInt,
): BigInt {
  // validate input
  assert(
    _supply > BIZERO() &&
      _reserveBalance > BIZERO() &&
      _reserveRatio > BIZERO() &&
      _reserveRatio <= MAX_RATIO &&
      _sellAmount <= _supply,
    'invalid parameters',
  )

  // special case for 0 sell amount
  if (_sellAmount.isZero()) return BigInt.fromI32(0)

  // special case for selling the entire supply
  if (_sellAmount == _supply) return _reserveBalance

  // special case if the ratio = 100%
  if (_reserveRatio == MAX_RATIO) return _reserveBalance.times(_sellAmount) / _supply

  let baseD: BigInt = _supply - _sellAmount
  let powerResult: PowerResult = power(_supply, baseD, MAX_RATIO, _reserveRatio)
  let result = powerResult.result
  let precision = powerResult.precision
  let temp1 = _reserveBalance.times(result)
  let temp2 = _reserveBalance << precision
  return (temp1 - temp2) / result
}

class PowerResult {
  result: BigInt
  precision: u8
}

function power(_baseN: BigInt, _baseD: BigInt, _expN: BigInt, _expD: BigInt): PowerResult {
  assert(_baseN < MAX_NUM)
  let baseLog: BigInt
  let base: BigInt = (_baseN * FIXED_1) / _baseD
  if (base < OPT_LOG_MAX_VAL) {
    baseLog = optimalLog(base)
  } else {
    baseLog = generalLog(base)
  }
  let baseLogTimesExp: BigInt = (baseLog * _expN) / _expD
  if (baseLogTimesExp < OPT_EXP_MAX_VAL) {
    return {
      result: optimalExp(baseLogTimesExp),
      precision: MAX_PRECISION,
    }
  } else {
    let precision: u8 = findPositionInMaxExpArray(baseLogTimesExp)
    return {
      result: generalExp(baseLogTimesExp >> (MAX_PRECISION - precision), precision),
      precision: precision,
    }
  }
}

function optimalLog(x: BigInt): BigInt {
  let res: BigInt = BigInt.fromI32(0)

  let y: BigInt
  let z: BigInt
  let w: BigInt

  if (x >= hexToBI('0xd3094c70f034de4b96ff7d5b6f99fcd8')) {
    res = res + hexToBI('0x40000000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0xd3094c70f034de4b96ff7d5b6f99fcd8')
  } // add 1 / 2^1
  if (x >= hexToBI('0xa45af1e1f40c333b3de1db4dd55f29a7')) {
    res = res + hexToBI('0x20000000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0xa45af1e1f40c333b3de1db4dd55f29a7')
  } // add 1 / 2^2
  if (x >= hexToBI('0x910b022db7ae67ce76b441c27035c6a1')) {
    res = res + hexToBI('0x10000000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0x910b022db7ae67ce76b441c27035c6a1')
  } // add 1 / 2^3
  if (x >= hexToBI('0x88415abbe9a76bead8d00cf112e4d4a8')) {
    res = res + hexToBI('0x08000000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0x88415abbe9a76bead8d00cf112e4d4a8')
  } // add 1 / 2^4
  if (x >= hexToBI('0x84102b00893f64c705e841d5d4064bd3')) {
    res = res + hexToBI('0x04000000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0x84102b00893f64c705e841d5d4064bd3')
  } // add 1 / 2^5
  if (x >= hexToBI('0x8204055aaef1c8bd5c3259f4822735a2')) {
    res = res + hexToBI('0x02000000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0x8204055aaef1c8bd5c3259f4822735a2')
  } // add 1 / 2^6
  if (x >= hexToBI('0x810100ab00222d861931c15e39b44e99')) {
    res = res + hexToBI('0x01000000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0x810100ab00222d861931c15e39b44e99')
  } // add 1 / 2^7
  if (x >= hexToBI('0x808040155aabbbe9451521693554f733')) {
    res = res + hexToBI('0x00800000000000000000000000000000')
    x = (x * FIXED_1) / hexToBI('0x808040155aabbbe9451521693554f733')
  } // add 1 / 2^8

  z = y = x - FIXED_1
  w = (y * y) / FIXED_1
  res =
    res +
    (z * (hexToBI('0x0100000000000000000000000000000000') - y)) /
      hexToBI('0x0100000000000000000000000000000000')
  z = (z * w) / FIXED_1 // add y^01 / 01 - y^02 / 02
  res =
    res +
    (z * (hexToBI('0x00aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') - y)) /
      hexToBI('0x0200000000000000000000000000000000')
  z = (z * w) / FIXED_1 // add y^03 / 03 - y^04 / 04
  res =
    res +
    (z * (hexToBI('0x0099999999999999999999999999999999') - y)) /
      hexToBI('0x0300000000000000000000000000000000')
  z = (z * w) / FIXED_1 // add y^05 / 05 - y^06 / 06
  res =
    res +
    (z * (hexToBI('0x0092492492492492492492492492492492') - y)) /
      hexToBI('0x0400000000000000000000000000000000')
  z = (z * w) / FIXED_1 // add y^07 / 07 - y^08 / 08
  res =
    res +
    (z * (hexToBI('0x008e38e38e38e38e38e38e38e38e38e38e') - y)) /
      hexToBI('0x0500000000000000000000000000000000')
  z = (z * w) / FIXED_1 // add y^09 / 09 - y^10 / 10
  res =
    res +
    (z * (hexToBI('0x008ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b') - y)) /
      hexToBI('0x0600000000000000000000000000000000')
  z = (z * w) / FIXED_1 // add y^11 / 11 - y^12 / 12
  res =
    res +
    (z * (hexToBI('0x0089d89d89d89d89d89d89d89d89d89d89') - y)) /
      hexToBI('0x0700000000000000000000000000000000')
  z = (z * w) / FIXED_1 // add y^13 / 13 - y^14 / 14
  res =
    res +
    (z * (hexToBI('0x0088888888888888888888888888888888') - y)) /
      hexToBI('0x0800000000000000000000000000000000') // add y^15 / 15 - y^16 / 16

  return res
}

function optimalExp(x: BigInt): BigInt {
  let res: BigInt = BigInt.fromI32(0)

  let y: BigInt
  let z: BigInt

  z = y = x % hexToBI('0x10000000000000000000000000000000') // get the input modulo 2^(-3)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x10e1b3be415a0000') // add y^02 * (20! / 02!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x05a0913f6b1e0000') // add y^03 * (20! / 03!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0168244fdac78000') // add y^04 * (20! / 04!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x004807432bc18000') // add y^05 * (20! / 05!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x000c0135dca04000') // add y^06 * (20! / 06!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0001b707b1cdc000') // add y^07 * (20! / 07!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x000036e0f639b800') // add y^08 * (20! / 08!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x00000618fee9f800') // add y^09 * (20! / 09!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0000009c197dcc00') // add y^10 * (20! / 10!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0000000e30dce400') // add y^11 * (20! / 11!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x000000012ebd1300') // add y^12 * (20! / 12!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0000000017499f00') // add y^13 * (20! / 13!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0000000001a9d480') // add y^14 * (20! / 14!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x00000000001c6380') // add y^15 * (20! / 15!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x000000000001c638') // add y^16 * (20! / 16!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0000000000001ab8') // add y^17 * (20! / 17!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x000000000000017c') // add y^18 * (20! / 18!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0000000000000014') // add y^19 * (20! / 19!)
  z = (z * y) / FIXED_1
  res = res + z * hexToBI('0x0000000000000001') // add y^20 * (20! / 20!)
  res = res / hexToBI('0x21c3677c82b40000') + y + FIXED_1 // divide by 20! and then add y^1 / 1! + y^0 / 0!

  if (!(x & hexToBI('0x0010000000000000000000000000000000')).isZero())
    res =
      (res * hexToBI('0x01c3d6a24ed82218787d624d3e5eba95f9')) /
      hexToBI('0x018ebef9eac820ae8682b9793ac6d1e776') // multiply by e^2^(-3)
  if (!(x & hexToBI('0x0020000000000000000000000000000000')).isZero())
    res =
      (res * hexToBI('0x018ebef9eac820ae8682b9793ac6d1e778')) /
      hexToBI('0x01368b2fc6f9609fe7aceb46aa619baed4') // multiply by e^2^(-2)
  if (!(x & hexToBI('0x0040000000000000000000000000000000')).isZero())
    res =
      (res * hexToBI('0x01368b2fc6f9609fe7aceb46aa619baed5')) /
      hexToBI('0x00bc5ab1b16779be3575bd8f0520a9f21f') // multiply by e^2^(-1)
  if (!(x & hexToBI('0x0080000000000000000000000000000000')).isZero())
    res =
      (res * hexToBI('0x00bc5ab1b16779be3575bd8f0520a9f21e')) /
      hexToBI('0x00454aaa8efe072e7f6ddbab84b40a55c9') // multiply by e^2^(+0)
  if (!(x & hexToBI('0x0100000000000000000000000000000000')).isZero())
    res =
      (res * hexToBI('0x00454aaa8efe072e7f6ddbab84b40a55c5')) /
      hexToBI('0x000960aadc109e7a3bf4578099615711ea') // multiply by e^2^(+1)
  if (!(x & hexToBI('0x0200000000000000000000000000000000')).isZero())
    res =
      (res * hexToBI('0x000960aadc109e7a3bf4578099615711d7')) /
      hexToBI('0x00002bf84208204f5977f9a8cf01fdce3d') // multiply by e^2^(+2)
  if (!(x & hexToBI('0x0400000000000000000000000000000000')).isZero())
    res =
      (res * hexToBI('0x00002bf84208204f5977f9a8cf01fdc307')) /
      hexToBI('0x00000003c6ab775dd0b95b4cbee7e65d11') // multiply by e^2^(+3)

  return res
}

function generalExp(_x: BigInt, _precision: u8): BigInt {
  let xi: BigInt = _x
  let res: BigInt = BIZERO()

  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x03442c4e6074a82f1797f72ac0000000') // add x^02 * (33! / 02!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0116b96f757c380fb287fd0e40000000') // add x^03 * (33! / 03!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0045ae5bdd5f0e03eca1ff4390000000') // add x^04 * (33! / 04!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000defabf91302cd95b9ffda50000000') // add x^05 * (33! / 05!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0002529ca9832b22439efff9b8000000') // add x^06 * (33! / 06!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000054f1cf12bd04e516b6da88000000') // add x^07 * (33! / 07!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000a9e39e257a09ca2d6db51000000') // add x^08 * (33! / 08!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0000012e066e7b839fa050c309000000') // add x^09 * (33! / 09!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0000001e33d7d926c329a1ad1a800000') // add x^10 * (33! / 10!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000002bee513bdb4a6b19b5f800000') // add x^11 * (33! / 11!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000003a9316fa79b88eccf2a00000') // add x^12 * (33! / 12!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000048177ebe1fa812375200000') // add x^13 * (33! / 13!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000005263fe90242dcbacf00000') // add x^14 * (33! / 14!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0000000000057e22099c030d94100000') // add x^15 * (33! / 15!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000000057e22099c030d9410000') // add x^16 * (33! / 16!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000000000052b6b54569976310000') // add x^17 * (33! / 17!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000000000004985f67696bf748000') // add x^18 * (33! / 18!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0000000000000003dea12ea99e498000') // add x^19 * (33! / 19!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000000000000031880f2214b6e000') // add x^20 * (33! / 20!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0000000000000000025bcff56eb36000') // add x^21 * (33! / 21!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0000000000000000001b722e10ab1000') // add x^22 * (33! / 22!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000000000000001317c70077000') // add x^23 * (33! / 23!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000000000000000000cba84aafa00') // add x^24 * (33! / 24!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000000000000000000082573a0a00') // add x^25 * (33! / 25!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000000000000000000005035ad900') // add x^26 * (33! / 26!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x0000000000000000000000002f881b00') // add x^27 * (33! / 27!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000000000000000000001b29340') // add x^28 * (33! / 28!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x000000000000000000000000000efc40') // add x^29 * (33! / 29!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000000000000000000000007fe0') // add x^30 * (33! / 30!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000000000000000000000000420') // add x^31 * (33! / 31!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000000000000000000000000021') // add x^32 * (33! / 32!)
  xi = (xi * _x) >> _precision
  res = res + xi * hexToBI('0x00000000000000000000000000000001') // add x^33 * (33! / 33!)

  return res / hexToBI('0x0688589cc0e9505e2f2fee5580000000') + _x + (ONE << _precision) // divide by 33! and then add x^1 / 1! + x^0 / 0!
}

function generalLog(x: BigInt): BigInt {
  let res: BigInt = BIZERO()

  // If x >= 2, then we compute the integer part of log2(x), which is larger than 0.
  if (x >= FIXED_2) {
    let count: u8 = floorLog2(x / FIXED_1)
    x = x >> count // now x < 2
    res = BigInt.fromU32(count) * FIXED_1
  }

  // If x > 1, then we compute the fraction part of log2(x), which is larger than 0.
  if (x > FIXED_1) {
    for (let i = MAX_PRECISION; i > 0; --i) {
      x = (x * x) / FIXED_1 // now 1 < x < 4
      if (x >= FIXED_2) {
        x = x >> 1 // now 1 < x < 2
        res = (res + ONE) << (i - 1)
      }
    }
  }

  return (res * LN2_NUMERATOR) / LN2_DENOMINATOR
}

function floorLog2(_n: BigInt): u8 {
  let res: u8 = 0

  if (_n < BigInt.fromI32(256)) {
    // At most 8 iterations
    while (_n > BigInt.fromI32(1)) {
      _n = _n >> 1
      res = res + 1
    }
  } else {
    // Exactly 8 iterations
    for (let s: u8 = 128; s > 0; s >>= 1) {
      if (_n >= ONE << s) {
        _n = _n >> s
        res = res | s
      }
    }
  }

  return res
}

function findPositionInMaxExpArray(_x: BigInt): u8 {
  let lo: u8 = MIN_PRECISION
  let hi: u8 = MAX_PRECISION

  while (lo + 1 < hi) {
    let mid: u8 = (lo + hi) / 2
    if (maxExpArray[mid] >= _x) lo = mid
    else hi = mid
  }

  if (maxExpArray[hi] >= _x) return hi
  if (maxExpArray[lo] >= _x) return lo

  assert(false)
  return 0
}
