import ConnectDB from "@/db/Connect";
import Contact from "@/db/Models/Contact";

export default async function handler(req, res) {
    if (req.method === 'POST') {
            let data = req.body
            try {
                await ConnectDB()
                data = Contact(data)
                data = await data.save()
                res.status(200).json({
                    success:true,
                    contactCreated:true,
                    message:`Contact ${data} was successfully created`})
            } catch (error) {
                res.status(500).json({
                    success:false,
                    IntServerError:true,
                    message:"Internal Server Error "
                })
            }
        }
    else{
        res.status(405).json({
            success:false,
            reqError:true,
            message:"please give a POST request to continue"
        })
    }
}