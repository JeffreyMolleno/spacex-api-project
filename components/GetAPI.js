export default function GetAPI(location) {
    return fetch(`https://api.spacexdata.com/v3/${location}`)
    .then(data=>data.json())
    .catch(data=>alert(data));
}
