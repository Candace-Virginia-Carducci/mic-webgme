define(['./_project', './FCO.Dsml'], function (Project, FCO) {
    'use strict';

    /**
     * Initializes a new instance of StateBase.
     *
     * @class
     * @augments {Project.FCO}
     * @classdesc This class represents a(n) StateBase.
     * @property {Project.StateBase.Attributes} attributes The attributes of the StateBase.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.StateBase = function (node) {
        FCO.call(this, node);
        this._node = node;
        this.attributes = new Project.StateBase.Attributes(this._node);
    };

    /**
     * Initializes a new instance of StateBase.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of StateBase.
     * @param {object} node - The wrapped CoreNode object of StateBase.
     * @constructor
     */
    Project.StateBase.Attributes = function (node) {
        FCO.Attributes.call(this, node);
        this._node = node;
    };

    // This will give inheritance when checking types
    Project.StateBase.prototype = Object.create(FCO.prototype);
    Project.StateBase.prototype.constructor = Project.StateBase;

    Project.StateBase.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.StateBase.Attributes.prototype.constructor = Project.StateBase.Attributes;

    /**
     * WebGME node object that represents StateBase type.
     * @type {Object}
     * @static
     */
    Project.StateBase.Type = null;

    /**
     * WebGME node object's meta type ID of StateBase.
     * @type {string}
     * @static
     */
    Project.StateBase.ID = "/615025579/909339777";

    /**
     * WebGME node object's meta type GUID of StateBase.
     * @type {string}
     * @static
     */
    Project.StateBase.GUID = "38b21b05-09bf-7181-0e1c-d7428e3d076e";


    /**
     * Creates a new StateBase inside given parent.
     * @returns {Project.StateBase} The newly created StateBase.
     * @param {Project.FCO} parent Instance where the new StateBase should be created.
     * @public
     */
    Project.StateBase.createObj = function (parent) {
        var nodeObj = Project._core.createNode({parent: parent._node, base: Project.StateBase.Type});
        return new Project.StateBase(nodeObj);
    };

    /**
     * Gets or sets the attribute delay of the StateBase instance.
     * @param {number} [value] - If defined sets the attribute value to this
     * @returns {number} Currently set name.
     * @public
     */
    Project.StateBase.Attributes.prototype.delay = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'delay', value);
        }

        return Project._core.getAttribute(this._node, 'delay');
    };

    return Project.StateBase;
});