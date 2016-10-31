define(['./_project', './FCO.Dsml'], function (Project, FCO) {
    'use strict';

    /**
     * Initializes a new instance of Language.
     *
     * @class
     * @augments {Project.FCO}
     * @classdesc This class represents a(n) Language.
     * @property {Project.Language.Attributes} attributes The attributes of the Language.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Language = function (node) {
        FCO.call(this, node);
        this._node = node;
        this.attributes = new Project.Language.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Language.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Language.
     * @param {object} node - The wrapped CoreNode object of Language.
     * @constructor
     */
    Project.Language.Attributes = function (node) {
        FCO.Attributes.call(this, node);
        this._node = node;
    };

    // This will give inheritance when checking types
    Project.Language.prototype = Object.create(FCO.prototype);
    Project.Language.prototype.constructor = Project.Language;

    Project.Language.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.Language.Attributes.prototype.constructor = Project.Language.Attributes;

    /**
     * WebGME node object that represents Language type.
     * @type {Object}
     * @static
     */
    Project.Language.Type = null; // this is set by the Project.initialize function

    /**
     * WebGME node object's meta type ID of Language.
     * @type {string}
     * @static
     */
    Project.Language.ID = "/615025579";

    /**
     * WebGME node object's meta type GUID of Language.
     * @type {string}
     * @static
     */
    Project.Language.GUID = "d799addf-eb22-8471-0f3e-a5146ac905c8";

    /**
     * Creates a new Language inside given parent.
     * @returns {Project.Language} The newly created Language.
     * @param {Project.FCO} parent Instance where the new Language should be created.
     * @public
     */
    Project.Language.createObj = function (parent) {
        var nodeObj = Project._core.createNode({parent: parent._node, base: Project.Language.Type});
        return new Project.Language(nodeObj);
    };

    /**
     * Creates a new Project.FCO inside this Language instance.
     * @returns {Project.FCO} The newly created FCO.
     * @public
     */
    Project.Language.prototype.createFCO = function () {
        return Project.FCO.createObj(this);
    };

    //TODO: This is incomplete list of children..

    return Project.Language;
});