define(['./_project', './FCO.Dsml'], function (Project, FCO) {
    'use strict';

    /**
     * Initializes a new instance of Transition.
     *
     * @class
     * @augments {Project.FCO}
     * @classdesc This class represents a(n) Transition.
     * @property {Project.Transition.Attributes} attributes The attributes of the Transition.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Transition = function (node) {
        FCO.call(this, node);
        this._node = node;
        this.attributes = new Project.Transition.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Transition.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Transition.
     * @param {object} node - The wrapped CoreNode object of Transition.
     * @constructor
     */
    Project.Transition.Attributes = function (node) {
        FCO.Attributes.call(this, node);
        this._node = node;
    };

    // This will give inheritance when checking types
    Project.Transition.prototype = Object.create(FCO.prototype);
    Project.Transition.prototype.constructor = Project.Transition;

    Project.Transition.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.Transition.Attributes.prototype.constructor = Project.Transition.Attributes;

    /**
     * WebGME node object that represents Transition type.
     * @type {Object}
     * @static
     */
    Project.Transition.Type = null; // this is set by the Project.initialize function

    /**
     * WebGME node object's meta type ID of Transition.
     * @type {string}
     * @static
     */
    Project.Transition.ID = "/615025579/318746662";

    /**
     * WebGME node object's meta type GUID of Transition.
     * @type {string}
     * @static
     */
    Project.Transition.GUID = "6142e6db-2edb-439d-085a-4546ea60084e";

    Project.Transition.createObj = function (parent) {
        var nodeObj = Project._core.createNode({parent: parent._node, base: Project.Transition.Type});
        return new Project.Transition(nodeObj);
    };

    /**
     * Gets or sets the attribute event of the Transition instance.
     *
     * @returns {string} Currently set event.
     * @public
     */
    Project.Transition.Attributes.prototype.event = function (value) {
        if (typeof value === 'undefined') {
            return Project._core.getAttribute(this._node, 'event');
        } else {
            Project._core.setAttribute(this._node, 'event', value);
        }
    };

    return Project.Transition;
});