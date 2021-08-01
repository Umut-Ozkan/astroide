const { writeFileSync, readFileSync, existsSync, } = require("fs");
const { set, get, has, unset } = require("lodash");

class Database {
	constructor() {
		if (!existsSync(`./database.json`,)) {
			writeFileSync(`./database.json`, "{}",);
		}
	}
	/** 
	 * Database File Name
	 * @type {string}
	 * @private
	*/
	filname = "database.json"

	/**
	 * Return All Datas
	 * @returns {Object}
	 */
	all() {
		const file = readFileSync(this.filname, "utf-8");
		const data = JSON.parse(file);
		return data;
	}

	/**
	 * This method sets a new data 
	 * @param {string} name data key 
	 * @param {string} value data key value
	 * @returns {Object} 
	 */
	set(name, value) {
		const data = this.all();
		set(data, name, value);
		writeFileSync(this.filname, JSON.stringify(data));
		return get(this.all(), name);
	}

	/**
	 * This method push a data 
	 * @param {string} name data key 
	 * @param {string} value data key value
	 * @returns {Array} 
	 */
	push(name, value) {
		let savedData = this.get(name);
		if (!savedData) {
			this.set(name, [])
			savedData = this.get(name)
		}
		if (!Array.isArray(savedData))
			throw new Error("Data to push should be an array");
		savedData.push(value);
		this.set(name, savedData);
		return savedData;
	}

	/**
	 * This method add a number in data
	 * @param {string} name data key 
	 * @param {number} value data key value
	 * @returns {Object} 
	 */
	add(name, value) {
		let savedData = this.get(name);
		if (!savedData) {
			this.set(name, 0)
			savedData = this.get(name)
		}
		if (isNaN(savedData))
			throw new Error("Data to add should be a number");
		savedData += value;
		this.set(name, savedData);
		return savedData;
	}

	/**
	 * This method subracts a number in data
	 * @param {string} name data key 
	 * @param {number} value data key value
	 * @returns {Object} 
	 */
	subtract(name, value) {
		let savedData = this.get(name);
		if (!savedData) {
			this.set(name, 0)
			savedData = this.get(name)
		}
		if (isNaN(savedData))
			throw new Error("Data to subtract should be a number");
		savedData -= value;
		this.set(name, savedData);
		return savedData;
	}

	/**
	 * This method delete data
	 * @param {string} name data key 
	 * @returns {boolean} 
	 */
	delete(name) {
		if (!this.get(name)) return false;
		unset(this.all, name);
		writeFileSync(this.filname, JSON.stringify(this.all));
		return true;
	}

	/**
	 * This method fetch a data
	 * @param {string} name data key
	 * @returns {Object} 
	 */
	get(name) {
		const gets = get(this.all, name);
		if (!gets) return null;
		return gets;
	}
	fetch = this.get;

	/**
	 * This method returns	if data created or not created
	 * @param {string} name data key 
	 * @param {string} value data key value
	 * @returns {boolean} 
	 */
	has = (name) => has(this.all, name);
}
module.exports = new Database();