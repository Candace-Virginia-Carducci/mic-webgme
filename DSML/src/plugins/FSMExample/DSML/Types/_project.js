define([], function () {

    var Project = function () {
    };

    Project.initialize = function (core, nodes, META) {
        var name;
        for (name in META) {
            if (Project.hasOwnProperty(name)) {
                Project[name].Type = META[name];
            } else {
                Project[name] = {};
                Project[name].Type = META[name];
            }
        }

        Project._core = core;
        Project._nodes = nodes;
    };

    return Project;
});