export default function(req, res){
    const {username, password} = req.body;

    console.log('ghtogthghtghthghthgtoh', username)

    if(username=='cool'){
        return res.status(200).json({ token: 'OKAAY' });
    } else {
        return res.status(401).json({ token: 'NO OKAY' });
    }
}