// @ts-check

// /**
//  * @param {string} key
//  * @param {{ serious(): string?, name: string }} object
//  * @returns {string?}
//  */

// /**
//  * @typedef {Object} SpecialType - creates a new type named 'SpecialType'
//  * @property {string} prop1 - a string property of SpecialType
//  * @property {number} prop2 - a number property of SpecialType
//  * @property {number=} prop3 - an optional number property of SpecialType
//  * @prop {number} [prop4] - an optional number property of SpecialType
//  * @prop {number} [prop5=42] - an optional number property of SpecialType with default
//  */

class Hash {
	/**
	 * Returns a UUIDv4 as string
	 * @returns {number}
	 */
	static generateHash = () => Math.round(Math.random() * 100000000);
}

/**
 * @template T
 */
class LCaheValues {
	hash;
	key;
	value;

	/**
	 * @constructor
	 * @param {{ key: string, value: T}} object with more
	 */
	constructor(object) {
		this.hash = Hash.generateHash();
		this.key = object.key;
		this.value = object.value;
	}
}

class LCache {
	/**
	 * @type {Map.<string, LCaheValues>}
	 */
	#cache;
	constructor() {
		this.#cache = new Map();
	}

	/**
	 * @returns {Array<string>}
	 */
	get keys() {
		return Array.from(this.#cache.keys());
	}

	/**
	 * @returns {Array<LCaheValues>} - das
	 */
	get values() {
		return Array.from(this.#cache.values());
	}

	/**
	 * @return {Object.<string, LCaheValues>}
	 */
	get cache() {
		return Object.fromEntries(this.#cache);
	}

	/**
	 * Override existing values if key already exist else add new value
	 * @template T
	 * @param {{ key: string, value?: T|null}} item - fallback value is null
	 * @returns {LCaheValues}
	 */
	exist({ key, value = null }) {
		if (this.#cache.has(key) === true) {
			this.add({ key, value });
			return this.get(key);
		}

		try {
			this.add({ key, value });
		} catch (error) {
			throw new Error(`value does not exist, error: ${error}`);
		}

		return this.get(key);
	}

	/**
	 * @param {string} key with more
	 * @returns {LCaheValues}
	 * Return the value
	 */
	get(key) {
		const value = this.#cache.get(key);
		if (value === undefined) {
			throw new Error("key does not exist, must provide a valid key");
		}

		return value;
	}

	/**
	 * @template T
	 * @param {{ key: string, value: T}} object with more
	 * @returns {LCaheValues}
	 */
	add(object) {
		if (object.key === undefined) {
			throw new Error("Must provide a valid key");
		}

		if (object.value === undefined) {
			throw new Error("Must provide a valid value");
		}

		this.#cache.set(
			object.key,
			new LCaheValues({
				key: object.key,
				value: object.value,
			})
		);
		return this.get(object.key);
	}

	/**
	 * Delete an specific element from cache
	 * @param {string} key
	 * @returns {boolean}
	 */
	delete(key) {
		return this.#cache.delete(key);
	}

	/**
	 * Delete all cache elements
	 * @returns {void}
	 */
	clear() {
		this.#cache.clear();
	}
	/**
	 * @returns {number}
	 */
	get size() {
		return this.#cache.size;
	}
}
