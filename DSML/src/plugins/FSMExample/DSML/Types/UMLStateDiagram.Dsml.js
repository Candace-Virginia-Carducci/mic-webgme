define (['./_project', './FCO.Dsml'], function (Project, FCO) {
    'use strict';

    /**
     * Initializes a new instance of UMLStateDiagram.
     *
     * @class
     * @augments {Project.FCO}
     * @classdesc This class represents a(n) UMLStateDiagram.
     * @property {Project.UMLStateDiagram.Attributes} attributes The attributes of the UMLStateDiagram.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.UMLStateDiagram = function (node) {
        FCO.call(this, node);
        this._node = node;
        this.attributes = new Project.UMLStateDiagram.Attributes(this._node);
    };

    /**
     * Initializes a new instance of UMLStateDiagram.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of UMLStateDiagram.
     * @param {object} node - The wrapped CoreNode object of UMLStateDiagram.
     * @constructor
     */
    Project.UMLStateDiagram.Attributes = function (node) {
        FCO.Attributes.call(this, node);
        this._node = node;
    };

    Project.UMLStateDiagram.prototype = Object.create(FCO.prototype);
    Project.UMLStateDiagram.prototype.constructor = Project.UMLStateDiagram;

    Project.UMLStateDiagram.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.UMLStateDiagram.Attributes.prototype.constructor = Project.UMLStateDiagram.Attributes;

    /**
    * WebGME node object that represents UMLStateDiagram type.
    * @type {Object}
    * @static
    */
    Project.UMLStateDiagram.Type = null; // this is set by the Project.initialize function

    /**
    * WebGME node object's meta type ID of UMLStateDiagram.
    * @type {string}
    * @static
    */
    Project.UMLStateDiagram.ID = "/615025579/1077978197";

    /**
    * WebGME node object's meta type GUID of UMLStateDiagram.
    * @type {string}
    * @static
    */
    Project.UMLStateDiagram.GUID = "ac888c15-1e7d-6e40-e7e3-d3defd2fde7b";
    
    /**
    * Creates a new UMLStateDiagram inside given parent.
    * @returns {Project.UMLStateDiagram} The newly created UMLStateDiagram.
    * @param {Project.FCO} parent Instance where the new UMLStateDiagram should be created.
    * @public
    */
    Project.UMLStateDiagram.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.UMLStateDiagram.Type});
        return new Project.UMLStateDiagram(node);
    };

    /**
    * Creates a new Project.Initial inside this UMLStateDiagram instance.
    * @returns {Project.Initial} The newly created Initial.
    * @public
    */
    Project.UMLStateDiagram.prototype.createInitial = function () {
        return Project.Initial.createObj(this);
    };

    /**
     * Creates a new Project.State inside this UMLStateDiagram instance.
     * @returns {Project.State} The newly created Initial.
     * @public
     */
    Project.UMLStateDiagram.prototype.createState = function () {
        return Project.State.createObj(this);
    };

    /**
     * Creates a new Project.StateBase inside this UMLStateDiagram instance.
     * @returns {Project.StateBase} The newly created Initial.
     * @public
     */
    Project.UMLStateDiagram.prototype.createStateBase = function () {
        return Project.StateBase.createObj(this);
    };

    /**
     * Creates a new Project.End inside this UMLStateDiagram instance.
     * @returns {Project.End} The newly created Initial.
     * @public
     */
    Project.UMLStateDiagram.prototype.createEnd = function () {
        return Project.End.createObj(this);
    };

    /**
    * Creates a new Project.Transition inside this UMLStateDiagram instance with src and dst connected.
    * @returns {Project.Transition} The newly created Transition.
    * @public
    */
    Project.UMLStateDiagram.prototype.createTransition = function () {
        return Project.Transition.createObj(this);
    };

    return Project.UMLStateDiagram;
});