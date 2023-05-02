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

/**
 * Returns a UUIDv4 as string
 *
 * @returns {string}
 * {@link https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0?permalink_comment_id=4466912#gistcomment-4466912 GitHub}.
 */
const generateUuid = () => {
	return String("xxxxxxx").replace(/[x]/g, (character) => {
		const random = (Math.random() * 16) | 0;
		const value = character === "x" ? random : (random & 0x3) | 0x8;

		return value.toString(16);
	});
};

// console.log(generateUuid());

/**
 * @template T
 */
class LCaheValues {
	/**@type {string} */
	key;
	// /**@type {T} */
	value;

	/**
	 * @constructor
	 * @param {{ key: string, value: T}} object with more
	 */
	constructor(object) {
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
	 * @return {Map.<string, LCaheValues>}
	 */
	get cache() {
		return this.#cache;
	}

	/**
	 * @param {string} key with more
	 * @returns {LCaheValues}
	 */
	get(key) {
		const value = this.#cache.get(key);
		if (value === undefined) {
			throw new Error("key does not exist");
		}

		return value;
	}

	/**
	 * @template T
	 * @param {{ key: string, value: T}} object with more
	 * @returns {LCaheValues}
	 */
	add(object) {
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
