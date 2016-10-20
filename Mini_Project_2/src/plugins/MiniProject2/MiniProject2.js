/*globals define*/
/*jshint node:true, browser:true*/

/**
 * Generated by PluginGenerator 1.7.0 from webgme on Wed Oct 19 2016 22:17:35 GMT-0500 (Central Daylight Time).
 * A plugin that inherits from the PluginBase. To see source code documentation about available
 * properties and methods visit %host%/docs/source/PluginBase.html.
 */

define([
    'plugin/PluginConfig',
    'text!./metadata.json',
    'plugin/PluginBase'
], function (
    PluginConfig,
    pluginMetadata,
    PluginBase,
    indexHtmlContent,
    ejs,
    programJsTemplate) {
    'use strict';

    pluginMetadata = JSON.parse(pluginMetadata);

    /**
     * Initializes a new instance of myExample.
     * @class
     * @augments {PluginBase}
     * @classdesc This class represents the plugin myExample.
     * @constructor
     */
    var MiniProject2 = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.pluginMetadata = pluginMetadata;
    };

    /**
     * Metadata associated with the plugin. Contains id, name, version, description, icon, configStructue etc.
     * This is also available at the instance at this.pluginMetadata.
     * @type {object}
     */
    MiniProject2.metadata = pluginMetadata;

    // Prototypical inheritance from PluginBase.
    MiniProject2.prototype = Object.create(PluginBase.prototype);
    MiniProject2.prototype.constructor = MiniProject2;

    /**
     * Main function for the plugin to execute. This will perform the execution.
     * Notes:
     * - Always log with the provided logger.[error,warning,info,debug].
     * - Do NOT put any user interaction logic UI, etc. inside this method.
     * - callback always has to be called even if error happened.
     *
     * @param {function(string, plugin.PluginResult)} callback - the result callback
     */
    MiniProject2.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this,
            nodeObject;


        // Using the logger.
        // self.logger.debug('This is a debug message.');
        // self.logger.info('This is an info message.');
        // self.logger.warn('This is a warning message.');
        // self.logger.error('This is an error message.');

        // Using the coreAPI to make changes.

        nodeObject = self.activeNode;

        //self.core.setAttribute(nodeObject, 'name', 'My new obj');
        //self.core.setRegistry(nodeObject, 'position', {x: 70, y: 70});

        self.metaNodeInfo = [];
        var artifact;
        self.loadNodeMap(self.rootNode)
            .then(function (nodes) {
                self.printChildrenRec(self.rootNode, nodes);
                // Here data has been added metaNodeInfo.
                var metaNodeInfoJson = JSON.stringify(self.metaNodeInfo, null, 4);
                artifact = self.blobClient.createArtifact('data');
                return artifact.addFile('tree.json', metaNodeInfoJson);
            })
            .then(function (fileHash) {
                self.result.addArtifact(fileHash);
                return artifact.save()
            })
            .then(function (artifactHash) {
                self.result.addArtifact(artifactHash);
                self.result.setSuccess(true);
                callback(null, self.result);
            })
            .catch(function (err) {
                self.logger.error(err.stack);
                // Result success is false at invocation.
                callback(err, self.result);
            });

    };

    MiniProject2.prototype.loadNodeMap = function (node) {
        var self = this;
        return self.core.loadSubTree(node)
            .then(function (nodeArr) {
                var nodes = {},
                    i;
                for (i = 0; i < nodeArr.length; i += 1) {
                    nodes[self.core.getPath(nodeArr[i])] = nodeArr[i];
                }

                return nodes;
            });
    };

    MiniProject2.prototype.printChildrenRec = function (root, nodes, indent) {
        var self = this,
            childrenPaths,
            childNode,
            i;

        indent = indent || '';

        childrenPaths = self.core.getChildrenPaths(root);

        self.logger.info(indent, self.core.getAttribute(root, 'name'), 'has', childrenPaths.length, 'children.')


        for (i = 0; i < childrenPaths.length; i += 1) {
            childNode = nodes[childrenPaths[i]];
            if (i === 0 ){
                self.logger.info('ROOT isMeta: true');
            }
            self.printChildrenRec(childNode, nodes);
            var name = self.core.getAttribute(childNode, 'name');
                if( self.isMetaTypeOf(childNode, self.META['State']) || self.isMetaTypeOf(childNode, self.META['Transition']) ){
                    var metaNode = self.getMetaType(childNode);
                    self.logger.info(name,'isMeta: true');
                    self.logger.info(name, 'is of meta-type', self.core.getAttribute(metaNode, 'name'));
                } else{
                    self.logger.info(name, 'isMeta: false');
                }
        }


        for (i = 0; i < childrenPaths.length; i += 1){
            childNode = nodes[childrenPaths[i]];
            var metaNode = self.getMetaType(childNode);
            if (i === 0 || !(self.isMetaTypeOf(childNode, self.META['State']) || self.isMetaTypeOf(childNode, self.META['Transition']))){
                self.logger.info('name:',name, 'path:',self.core.getPath(childNode), 'nmbrChildren:', childrenPaths.length,'base : null');
            }else{
                self.logger.info('name:',name, 'path:' ,self.core.getPath(childNode),  'nmbrChildren:', childrenPaths.length,'base:',self.core.getAttribute(metaNode, 'name'));

            }
        }


    };


    MiniProject2.prototype.print = function () {
        var self = this,
            dataModel = {
                stateMachine: {
                    name: '',
                    initialState: null,
                    finalStates: [],
                    states: []
                }
            };

        dataModel.stateMachine.name = self.core.getAttribute(self.activeNode, 'name');
        var i,
            childNode,
            childName,
            childrenPaths;

                for (i = 0; i < nodes.length; i += 1) {
                    self.pathToNode[self.core.getPath(nodes[i])] = nodes[i];
                }

                childrenPaths = self.core.getChildrenPaths(self.activeNode);

                for (i = 0; i < childrenPaths.length; i += 1) {
                    childNode = self.pathToNode[childrenPaths[i]];
                    // Log the name of the child (it's an attribute so we use getAttribute).
                    childName = self.core.getAttribute(childNode, 'name');
                    self.logger.info('At childNode', childName);

                    if (self.isMetaTypeOf(childNode, self.META['State']) === true) {
                        self.logger.info(childName, 'isMeta: true');
                        self.logger.info(childName, 'MetaType: State');
                        if (self.isMetaTypeOf(childNode, self.META['Initial']) === true) {
                            dataModel.stateMachine.initialState = self.core.getPath(childNode);
                            self.logger.info(childName, 'MetaType: Initial');
                        } else if (self.isMetaTypeOf(childNode, self.META['End']) === true) {
                            dataModel.stateMachine.finalStates.push(self.core.getPath(childNode));
                            self.logger.info(childName, 'MetaType: End');
                        }
                        dataModel.stateMachine.states.push(self.getStateData(childNode));
                    } else if (self.isMetaTypeOf(childNode, self.META['Transition']) === true) {
                        self.logger.info(childName, 'MetaType: Transition');
                        self.logger.info(childName, 'isMeta: true');
                        // No need to handle - getStateData will get the transitions.
                    } else {
                        self.logger.debug('Child was not of type State or Transition, skipping', childName);
                        self.logger.info(childName, 'isMeta: false');
                    }
                    self.metaNodeInfo.push({name: childNode , path: childrenPaths[i], numberOfChildren: childrenPaths[i].length});
                }

                return dataModel;
    };


    MiniProject2.prototype.getStateData = function (stateNode) {
        var self = this,
            stateData = {
                id: '',
                name: '',
                transitions: []
            },
            i,
            transNode,
            transPaths;

        stateData.name = self.core.getAttribute(stateNode, 'name');
        stateData.id = self.core.getPath(stateNode);

        transPaths = self.core.getCollectionPaths(stateNode, 'src');

        for (i = 0; i < transPaths.length; i += 1) {
            transNode = self.pathToNode[transPaths[i]];
            self.logger.info(stateData.name, 'has outgoing transition', transPaths[i]);
            stateData.transitions.push(self.getTransitionData(transNode));
        }

        return stateData;
    };

    MiniProject2.prototype.getTransitionData = function (transitionNode) {
        var self = this,
            transitionData = {
                targetId: '',
                targetName: '',
                event: ''
            },
            targetNode;

        transitionData.event = self.core.getAttribute(transitionNode, 'event');
        transitionData.targetId = self.core.getPointerPath(transitionNode, 'dst');
        targetNode = self.pathToNode[transitionData.targetId];
        transitionData.targetName = self.core.getAttribute(targetNode, 'name');

        return transitionData;
    };


    return MiniProject2;
});
