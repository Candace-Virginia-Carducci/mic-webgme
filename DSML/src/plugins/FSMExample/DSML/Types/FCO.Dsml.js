define(['./_project'], function (Project) {
    'use strict';

    /**
     * Initializes a new instance of FCO.
     *
     * @class

     * @classdesc This class represents a(n) FCO.
     * @property {Project.FCO.Attributes} attributes The attributes of the FCO.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.FCO = function (node) {
        this._node = node;
        this.attributes = new Project.FCO.Attributes(this._node);
    };

    /**
     * Initializes a new instance of FCO.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of FCO.
     * @param {object} node - The wrapped CoreNode object of FCO.
     * @constructor
     */
    Project.FCO.Attributes = function (node) {
        this._node = node;
    };

    /**
     * WebGME node object that represents FCO type.
     * @type {Object}
     * @static
     */
    Project.FCO.Type = null;

    /**
     * WebGME node object's meta type ID of FCO.
     * @type {string}
     * @static
     */
    Project.FCO.ID = "/1";

    /**
     * WebGME node object's meta type GUID of FCO.
     * @type {string}
     * @static
     */
    Project.FCO.GUID = "cd891e7b-e2ea-e929-f6cd-9faf4f1fc045";

    /**
     * Creates a new FCO inside given parent.
     * @returns {Project.FCO} The newly created FCO.
     * @param {Project.FCO} parent Instance where the new FCO should be created.
     * @public
     */
    Project.FCO.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.FCO.Type});
        return new Project.FCO(node);
    };

    /**
     * Gets the ID of the FCO instance.
     * @returns {string} The ID.
     * @public
     */
    Project.FCO.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the FCO instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.FCO.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };

    /**
     * Gets or sets the attribute name of the FCO instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.FCO.Attributes.prototype.name = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'name', value);
        }

        return Project._core.getAttribute(this._node, 'name');
    };

    return Project.FCO;
});