define(['./_project', './StateBase.Dsml'], function (Project, StateBase) {
    'use strict';

    /**
     * Initializes a new instance of State.
     *
     * @class
     * @augments {Project.StateBase}
     * @classdesc This class represents a(n) State.
     * @property {Project.State.Attributes} attributes The attributes of the State.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.State = function (node) {
        StateBase.call(this, node);
        this._node = node;
        this.attributes = new Project.State.Attributes(this._node);
    };

    /**
     * Initializes a new instance of State.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of State.
     * @param {object} node - The wrapped CoreNode object of State.
     * @constructor
     */
    Project.State.Attributes = function (node) {
        StateBase.Attributes.call(this, node);
        this._node = node;
    };

    
    // This will give inheritance when checking types
    Project.State.prototype = Object.create(StateBase.prototype);
    Project.State.prototype.constructor = Project.State;

    Project.State.Attributes.prototype = Object.create(StateBase.Attributes.prototype);
    Project.State.Attributes.prototype.constructor = Project.State.Attributes;

    /**
    * WebGME node object that represents State type.
    * @type {Object}
    * @static
    */
    Project.State.Type = null; // this is set by the CandiceProject.initialize function

    /**
    * WebGME node object's meta type ID of State.
    * @type {string}
    * @static
    */
    Project.State.ID = "/615025579/1416392928";

    /**
    * WebGME node object's meta type GUID of State.
    * @type {string}
    * @static
    */
    Project.State.GUID = "682bbfe9-48c6-9de0-2a45-3315bca7c7cf";
    
    /**
    * Creates a new State inside given parent.
    * @returns {Project.State} The newly created State.
    * @param {Project.FCO} parent Instance where the new State should be created.
    * @public
    */
    Project.State.createObj = function (parent) {
        var nodeObj = Project._core.createNode({parent: parent._node, base: Project.State.Type});
        return new Project.State(nodeObj);
    };

    return Project.State;
});