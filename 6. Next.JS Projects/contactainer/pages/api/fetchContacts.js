import ConnectDB from "@/db/Connect";
import Contact from "@/db/Models/Contact";


export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await ConnectDB()
            const data = await Contact.find({})
            if (data.length!==0) {
                res.status(200).json({ success:true, data:data })
            } 
            else {
                res.status(200).json({ success:true, data:false, message:"You have not added any contacts yet." })
            }
        } catch (error) {
            res.status(500).json({
                success:false,
                IntServerError:true,
                message:"Internal Server Error "
            })
        }
    } else {
        res.status(405).json({
            success:false,
            reqError:true,
            message:"please give a GET request to continue"})
    }
}

