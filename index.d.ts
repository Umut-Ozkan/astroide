declare const _exports: Database;
export = _exports;
declare class Database {
    /**
     * Database File Name
     * @type {string}
     * @private
    */
    private filname;
    /**
     * Return All Datas
     * @returns {Object}
     */
    all(): any;
    /**
     * This method sets a new data
     * @param {string} name data key
     * @param {string} value data key value
     * @returns {Object}
     */
    set(name: string, value: string): any;
    /**
     * This method push a data
     * @param {string} name data key
     * @param {string} value data key value
     * @returns {Array}
     */
    push(name: string, value: string): any[];
    /**
     * This method add a number in data
     * @param {string} name data key
     * @param {number} value data key value
     * @returns {Object}
     */
    add(name: string, value: number): any;
    /**
     * This method subracts a number in data
     * @param {string} name data key
     * @param {number} value data key value
     * @returns {Object}
     */
    subtract(name: string, value: number): any;
    /**
     * This method delete data
     * @param {string} name data key
     * @returns {boolean}
     */
    delete(name: string): boolean;
    /**
     * This method fetch a data
     * @param {string} name data key
     * @returns {Object}
     */
    get(name: string): any;
    fetch: (name: string) => any;
    /**
     * This method returns	if data created or not created
     * @param {string} name data key
     * @param {string} value data key value
     * @returns {boolean}
     */
    has: (name: string) => boolean;
}
