define(['./_project', './StateBase.Dsml'], function (Project, StateBase) {
    'use strict';

    /**
     * Initializes a new instance of Initial.
     *
     * @class
     * @augments {Project.StateBase}
     * @classdesc This class represents a(n) Initial.
     * @property {Project.Initial.Attributes} attributes The attributes of the Initial.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Initial = function (node) {
        StateBase.call(this, node);
        this._node = node;
        this.attributes = new Project.Initial.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Initial.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Initial.
     * @param {object} node - The wrapped CoreNode object of Initial.
     * @constructor
     */
    Project.Initial.Attributes = function (node) {
        StateBase.Attributes.call(this, node);
        this._node = node;
    };

    // This will give inheritance when checking types
    Project.Initial.prototype = Object.create(StateBase.prototype);
    Project.Initial.prototype.constructor = Project.Initial;

    Project.Initial.Attributes.prototype = Object.create(StateBase.Attributes.prototype);
    Project.Initial.Attributes.prototype.constructor = Project.Initial.Attributes;

    /**
    * WebGME node object that represents Initial type.
    * @type {Object}
    * @static
    */
    Project.Initial.Type = null; // this is set by the Project.initialize function

    /**
    * WebGME node object's meta type ID of Initial.
    * @type {string}
    * @static
    */
    Project.Initial.ID = "/615025579/1242097160";

    /**
    * WebGME node object's meta type GUID of Initial.
    * @type {string}
    * @static
    */
    Project.Initial.GUID = "f8fc18e6-db54-3cf1-51e5-df2a7693628f";

    /**
    * Creates a new Initial inside given parent.
    * @returns {Project.Initial} The newly created Initial.
    * @param {Project.FCO} parent Instance where the new Initial should be created.
    * @public
    */
    Project.Initial.createObj = function (parent) {
        var nodeObj = Project._core.createNode({parent: parent._node, base: Project.Initial.Type});
        return new Project.Initial(nodeObj);
    };

    /**
     * Gets or sets the attribute startValue of the StateBase instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Initial.Attributes.prototype.startValue = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'startValue', value);
        }

        return Project._core.getAttribute(this._node, 'startValue');
    };

    return Project.Initial;
});