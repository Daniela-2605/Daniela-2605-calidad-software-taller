/**
 * Suma dos números, evitando negativos
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  if (a < 0) return 0;
  return a + b;
}

module.exports = { add };
