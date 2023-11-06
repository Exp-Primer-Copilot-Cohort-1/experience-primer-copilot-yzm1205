function skillsMember(){
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django', 'Flask'];
    var member = ['Tom', 'Jerry', 'Donald', 'Daisy', 'Mickey', 'Minnie', 'Goofy', 'Pluto'];
    var memberSkills = [];
    for(var i = 0; i < member.length; i++){
        var skill = [];
        for(var j = 0; j < 3; j++){
            var random = Math.floor(Math.random() * skills.length);
            skill.push(skills[random]);

}