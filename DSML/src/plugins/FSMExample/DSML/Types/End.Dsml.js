define(['./_project', './StateBase.Dsml'], function (Project, StateBase) {
    'use strict';

    /**
     * Initializes a new instance of End.
     *
     * @class
     * @augments {Project.StateBase}
     * @classdesc This class represents a(n) End.
     * @property {Project.End.Attributes} attributes The attributes of the End.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.End = function (node) {
        StateBase.call(this, node);
        this._node = node;
        this.attributes = new Project.End.Attributes(this._node);
    };

    /**
     * Initializes a new instance of End.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of End.
     * @param {object} node - The wrapped CoreNode object of End.
     * @constructor
     */
    Project.End.Attributes = function (node) {
        StateBase.Attributes.call(this, node);
        this._node = node;
    };

    Project.End.prototype = Object.create(StateBase.prototype);
    Project.End.prototype.constructor = Project.End;

    Project.End.Attributes.prototype = Object.create(StateBase.Attributes.prototype);
    Project.End.Attributes.prototype.constructor = Project.End.Attributes;

    /**
    * WebGME node object that represents End type.
    * @type {Object}
    * @static
    */
    Project.End.Type = null; // this is set by the Project.initialize function

    /**
    * WebGME node object's meta type ID of End.
    * @type {string}
    * @static
    */
    Project.End.ID = "/615025579/1178174363";

    /**
    * WebGME node object's meta type GUID of End.
    * @type {string}
    * @static
    */
    Project.End.GUID = "f61f3ba5-029c-d771-7945-34eb2057bdf1";

    /**
    * Creates a new End inside given parent.
    * @returns {Project.End} The newly created End.
    * @param {Project.FCO} parent Instance where the new End should be created.
    * @public
    */
    Project.End.createObj = function (parent) {
        var nodeObj = Project._core.createNode({parent: parent._node, base: Project.End.Type});
        return new Project.End(nodeObj);
    };

    return Project.End;
});