import ConnectDB from "@/db/Connect";
import Contact from "@/db/Models/Contact";


export default async function handler(req, res) {
    if (req.method==='GET') {
        const {id} = req.query
        try {
            await ConnectDB()
            const UpdContact = await Contact.findById(id).exec()
            if (UpdContact) {
            res.status(200).json({
                success:true,
                data:UpdContact
            })
        } else {
            res.status(404).json({
                success:true,
                ContactNotFound:true,
                message:"Contact does not exists "
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            IntServerError:true,
            message:"Internal Server Error ",
        })
    }
    } else {
        res.status(405).json({
            success:false,
            reqError:true,
            message:"please give a GET request to continue"})
    }

}