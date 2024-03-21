export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, amount } = JSON.parse(req.body);
        const data = {
            name,
            email,
            amount
        };
        console.log(JSON.stringify(data))
        let resp = await fetch(`https://script.google.com/macros/s/AKfycbzE2g1k4NI0zrKkS1EVfgxRtmEMl3B4-HFdL939CBgeA27N8adsikfGsJgC0cMu7EBUTg/exec?name=${data.name}&email=${data.email}&amount=${data.amount}`,{
            method: 'GET',
        })
        console.log(await resp.json())
        console.log(`https://script.google.com/macros/s/AKfycbzE2g1k4NI0zrKkS1EVfgxRtmEMl3B4-HFdL939CBgeA27N8adsikfGsJgC0cMu7EBUTg/exec?name=${data.name}&email=${data.email}&amount=${data.amount}`)
        return res.status(200).json({ message: 'Email sent' });
    }
}