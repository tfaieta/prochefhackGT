export default function processData(data){ //load array into map
    var dict = {};
    for(var i = 0 ; i < data.length; i++)
    {
        var key = data[i].substring(0,2).toUpperCase();
        if(dict[key] == null){
            dict[key] = [];
        }
        dict[key].push(data[i]);
    }
    return dict;
}